(function () {
  'use strict';

  const JIKAN = 'https://api.jikan.moe/v4';
  const DELAY_MS = 500;   // increased from 370 to reduce 429s
  const RETRY_MS = 2500;  // increased retry wait
  const MAX_RETRY = 4;    // one more retry
  const TOTAL = 100;
  const CACHE_KEY = 'myAnimeNibol_v3';
  const CACHE_TTL   = 7 * 24 * 60 * 60 * 1000;  // 7 days hard expiry
  const CACHE_STALE = 1 * 60 * 60 * 1000;        // 1h — serve instantly, refresh in bg
  const translationCache = {};

  // ===== USER'S PERSONAL PICKS =====
  // Ranks must be sequential 1..N without gaps, or gap slots fill from MAL top anime
  const MY_PICKS = [
    { rank: 1,  id: 52991 },
    { rank: 2,  id: 11061 },
    { rank: 3,  id: 9253 },
    { rank: 4,  id: 28851 },
    { rank: 5,  id: 37521 },
    { rank: 6,  id: 33352 },
    { rank: 7,  q: 'Takopi no Genzai', manga: true },
    { rank: 8,  id: 32182 },
    { rank: 9,  q: 'Look Back' },
    { rank: 10, id: 16498 },
    { rank: 11, id: 5680 },
    { rank: 12, id: 37991 },
    { rank: 13, id: 41457 },
    { rank: 14, id: 20583 },
    { rank: 15, id: 31933 },
    { rank: 16, q: 'Kubo-san wa Mob wo Yurusanai' },
    { rank: 17, q: 'Kaoru Hana wa Rin to Saku' },
    { rank: 18, id: 37105 },
    { rank: 19, id: 30831 },
    { rank: 20, id: 33255 },
  ];

  let animeList = [];
  let displayList = [];
  let activeFilter = 'all';
  let activeView = 'grid';

  // ===== UTILITIES =====
  const wait = ms => new Promise(r => setTimeout(r, ms));

  async function apiFetch(url) {
    for (let i = 0; i < MAX_RETRY; i++) {
      try {
        const res = await fetch(url);
        if (res.status === 429) {
          const backoff = RETRY_MS * (i + 1);
          console.warn(`Rate limited, waiting ${backoff}ms...`);
          await wait(backoff);
          continue;
        }
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        await wait(DELAY_MS);
        return json;
      } catch (e) {
        if (i < MAX_RETRY - 1) await wait(RETRY_MS);
        else { console.warn('Fetch failed:', url, e); return null; }
      }
    }
    return null;
  }

  function norm(a) {
    if (!a) return null;
    return {
      malId:    a.mal_id,
      title:    a.title,
      titleEn:  a.title_english || a.title,
      titleJp:  a.title_japanese || '',
      img:      a.images?.jpg?.large_image_url || a.images?.jpg?.image_url || '',
      score:    a.score || 0,
      type:     a.type || 'Unknown',
      episodes: a.episodes || '?',
      status:   a.status || '',
      synopsis: a.synopsis || 'No synopsis available.',
      genres:   (a.genres || []).map(g => g.name),
      studios:  (a.studios || []).map(s => s.name),
      year:     a.year || a.aired?.prop?.from?.year || '',
      url:      a.url || '',
      myRank:   0,
      isManga:  false
    };
  }

  function normManga(m) {
    if (!m) return null;
    return {
      malId:    m.mal_id,
      title:    m.title,
      titleEn:  m.title_english || m.title,
      titleJp:  m.title_japanese || '',
      img:      m.images?.jpg?.large_image_url || m.images?.jpg?.image_url || '',
      score:    m.score || 0,
      type:     'Manga',
      episodes: m.chapters || '?',
      status:   m.status || '',
      synopsis: m.synopsis || 'No synopsis available.',
      genres:   (m.genres || []).map(g => g.name),
      studios:  (m.authors || []).map(a => a.name),
      year:     m.published?.prop?.from?.year || '',
      url:      m.url || '',
      myRank:   0,
      isManga:  true
    };
  }

  // ===== FETCHERS =====
  async function fetchById(id) {
    const d = await apiFetch(`${JIKAN}/anime/${id}/full`);
    return d ? norm(d.data) : null;
  }

  async function searchAnime(q) {
    const d = await apiFetch(`${JIKAN}/anime?q=${encodeURIComponent(q)}&limit=1&sfw=true`);
    return d?.data?.[0] ? norm(d.data[0]) : null;
  }

  async function searchManga(q) {
    const d = await apiFetch(`${JIKAN}/manga?q=${encodeURIComponent(q)}&limit=1&sfw=true`);
    return d?.data?.[0] ? normManga(d.data[0]) : null;
  }

  async function translateToId(text) {
    if (!text || text === 'No synopsis available.') return 'Sinopsis belum tersedia.';
    const key = text.substring(0, 80);
    if (translationCache[key]) return translationCache[key];
    try {
      const chunks = [];
      let remaining = text.replace(/\[Written by MAL Rewrite\]/g, '').trim();
      while (remaining.length > 0) {
        if (remaining.length <= 490) { chunks.push(remaining); break; }
        let cut = remaining.lastIndexOf('. ', 490);
        if (cut === -1 || cut < 100) cut = remaining.lastIndexOf(' ', 490);
        if (cut === -1) cut = 490;
        else cut += 1;
        chunks.push(remaining.substring(0, cut).trim());
        remaining = remaining.substring(cut).trim();
      }
      const translated = [];
      for (const chunk of chunks) {
        try {
          const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(chunk)}&langpair=en|id`);
          const data = await res.json();
          if (data?.responseData?.translatedText && !data.responseData.translatedText.includes('QUERY LENGTH LIMIT')) {
            translated.push(data.responseData.translatedText);
          } else {
            translated.push(chunk);
          }
        } catch {
          translated.push(chunk);
        }
        await wait(300);
      }
      const result = translated.join(' ');
      translationCache[key] = result;
      return result;
    } catch (e) { console.warn('Translation failed:', e); }
    return text;
  }

  async function fetchTopPage(page) {
    const d = await apiFetch(`${JIKAN}/top/anime?page=${page}&limit=25&sfw=true`);
    return d?.data ? d.data.map(norm).filter(Boolean) : [];
  }

  // ===== CACHE =====
  function getCache() {
    try {
      const r = localStorage.getItem(CACHE_KEY);
      if (r) {
        const d = JSON.parse(r);
        const age = Date.now() - d.ts;
        if (age < CACHE_TTL) return { list: d.list, stale: age > CACHE_STALE };
      }
    } catch (e) {}
    return null;
  }

  function setCache(list) {
    try { localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), list })); } catch (e) {}
  }

  // ===== MAIN LOADER =====
  async function loadData() {
    const cached = getCache();
    if (cached && cached.list.length >= 20) {
      // Instantly render from cache
      animeList = cached.list;
      displayList = [...animeList];
      hideLoading(); renderGrid(); updateStats();

      // If stale, silently refresh in background
      if (cached.stale) {
        fetchAndRefresh();
      }
      return;
    }

    // No cache — show skeletons immediately, then fetch
    hideLoading();
    renderSkeletons(20);
    await fetchAndRefresh();
  }

  async function fetchAndRefresh() {
    let steps = 0;
    const totalSteps = MY_PICKS.length + 6;
    const prog = () => {
      steps++;
      // update skeleton progress indicators as picks come in
      const skels = document.querySelectorAll('.skeleton-card');
      const done = Math.round((steps / totalSteps) * skels.length);
      skels.forEach((s, i) => { if (i < done) s.classList.add('skeleton-loaded'); });
    };

    const picked = {};
    const pickedIds = new Set();

    for (const p of MY_PICKS) {
      let a = null;
      try {
        if (p.manga)     { a = await searchManga(p.q); }
        else if (p.id)   { a = await fetchById(p.id); }
        else if (p.q)    { a = await searchAnime(p.q); }
      } catch (e) {
        console.warn(`Failed to fetch rank ${p.rank}:`, e);
      }
      if (a) {
        a.myRank = p.rank;
        picked[p.rank] = a;
        pickedIds.add(a.malId);

      }
      prog();
    }

    const topAll = [];
    for (let pg = 1; pg <= 6; pg++) {
      try {
        const page = await fetchTopPage(pg);
        topAll.push(...page);
      } catch (e) {
        console.warn(`Failed to fetch top page ${pg}:`, e);
      }
      prog();
    }

    const final = new Array(TOTAL).fill(null);
    for (const [r, a] of Object.entries(picked)) {
      final[parseInt(r) - 1] = a;
    }

    const fill = topAll.filter(a => !pickedIds.has(a.malId));
    let fi = 0;
    for (let i = 0; i < TOTAL; i++) {
      if (!final[i] && fi < fill.length) {
        final[i] = fill[fi++];
        final[i].myRank = i + 1;
      }
    }

    animeList = final.filter(Boolean);
    animeList.forEach((a, i) => { a.myRank = i + 1; });
    displayList = [...animeList];

    setCache(animeList);
    hideLoading(); renderGrid(); updateStats();
  }

  function hideLoading() {
    const el = document.getElementById('loadingState');
    if (el) el.style.display = 'none';
  }

  function renderSkeletons(count) {
    const g = document.getElementById('animeGrid');
    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const s = document.createElement('div');
      s.className = 'skeleton-card';
      s.innerHTML = `
        <div class="skeleton-img"></div>
        <div class="skeleton-body">
          <div class="skeleton-line skeleton-title"></div>
          <div class="skeleton-line skeleton-meta"></div>
        </div>`;
      frag.appendChild(s);
    }
    g.appendChild(frag);
  }

  // ===== RENDERING =====
  function createCard(a) {
    const card = document.createElement('div');
    card.className = 'anime-card';
    card.style.animationDelay = `${(a.myRank % 20) * 0.04}s`;
    card.dataset.type = a.type;
    card.dataset.rank = a.myRank;

    let rc = '';
    if      (a.myRank === 1)  rc = 'rank-1';
    else if (a.myRank === 2)  rc = 'rank-2';
    else if (a.myRank === 3)  rc = 'rank-3';
    else if (a.myRank <= 10) rc = 'rank-top10';

    const fallbackSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='300' fill='%230d1f3c'%3E%3Crect width='200' height='300'/%3E%3Ctext x='100' y='150' text-anchor='middle' fill='%2300e5ff' font-size='13' font-family='sans-serif'%3ENo Image%3C/text%3E%3C/svg%3E`;
    const typeLabel = a.isManga ? 'Manga' : a.type;

    card.innerHTML = `
      <div class="card-image">
        <img src="${a.img}" alt="${a.title}" loading="lazy" onerror="this.src='${fallbackSvg}'">
        <div class="card-image-overlay"></div>
        <div class="rank-badge ${rc}">${a.myRank}</div>
        ${a.score ? `<div class="score-badge"><span class="star">★</span><span class="score-value">${a.score.toFixed(1)}</span></div>` : ''}
      </div>
      <div class="card-info">
        <div class="card-title">${a.titleEn || a.title}</div>
        <div class="card-meta">
          <span class="meta-tag type-tag">${typeLabel}</span>
          ${a.year ? `<span class="meta-tag">${a.year}</span>` : ''}
          <span class="meta-episodes">${a.episodes} ep</span>
        </div>
      </div>`;

    card.addEventListener('click', () => showModal(a));
    return card;
  }

  function renderGrid() {
    const g = document.getElementById('animeGrid');
    g.querySelectorAll('.anime-card, .no-results, .skeleton-card').forEach(c => c.remove());

    if (displayList.length === 0) {
      g.innerHTML += `<div class="no-results">
        <div class="no-results-icon">🌊</div>
        <div class="no-results-text">Anime tidak ditemukan</div>
        <div class="no-results-sub">Coba pencarian atau filter lain</div>
      </div>`;
      return;
    }

    const frag = document.createDocumentFragment();
    displayList.forEach(a => frag.appendChild(createCard(a)));
    g.appendChild(frag);
  }

  function updateStats() {
    const total = animeList.length;
    const scoredList = animeList.filter(a => a.score);
    const avg = scoredList.length
      ? scoredList.reduce((s, a) => s + a.score, 0) / scoredList.length
      : 0;
    const eps = animeList.reduce((s, a) => s + (typeof a.episodes === 'number' ? a.episodes : 0), 0);

    animateNum('totalAnime', total, 0);
    animateNum('avgScore', avg, 1);
    animateNum('totalEpisodes', eps, 0);
  }

  function animateNum(id, target, decimals) {
    const el = document.getElementById(id);
    if (!el) return;
    let current = 0;
    const step = target / 40;
    const interval = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(interval); }
      el.textContent = decimals ? current.toFixed(decimals) : Math.round(current);
    }, 30);
  }

  // ===== MODAL =====
  async function showModal(a) {
    const m = document.getElementById('modalContent');
    const genreHtml = a.genres.map(g => `<span class="genre-tag">${g}</span>`).join('');
    const studioLabel = a.isManga ? 'Penulis' : 'Studio';
    const studioVal = a.studios.length ? a.studios.join(', ') : 'Tidak diketahui';
    const epLabel = a.isManga ? 'Chapter' : 'Episode';

    m.innerHTML = `
      <button class="modal-close" onclick="document.getElementById('modalOverlay').classList.remove('active')">✕</button>
      <div class="modal-hero">
        <img src="${a.img}" alt="${a.title}">
        <div class="modal-hero-overlay"></div>
        <div class="modal-hero-info">
          <div class="modal-rank-badge">🏆 #${a.myRank}</div>
          <h2 class="modal-title">${a.titleEn || a.title}</h2>
          ${a.titleJp ? `<div class="modal-title-jp">${a.titleJp}</div>` : ''}
        </div>
      </div>
      <div class="modal-body">
        <div class="modal-stats">
          <div class="modal-stat"><span class="modal-stat-value">${a.score ? a.score.toFixed(1) : 'N/A'}</span><span class="modal-stat-label">Skor</span></div>
          <div class="modal-stat"><span class="modal-stat-value">${a.episodes}</span><span class="modal-stat-label">${epLabel}</span></div>
          <div class="modal-stat"><span class="modal-stat-value">${a.type}</span><span class="modal-stat-label">Tipe</span></div>
          <div class="modal-stat"><span class="modal-stat-value">${a.year || '?'}</span><span class="modal-stat-label">Tahun</span></div>
        </div>
        <h3 class="modal-section-title">${studioLabel}</h3>
        <p style="color:rgba(255,255,255,0.55);margin-bottom:20px;font-size:0.88rem">${studioVal}</p>
        ${a.genres.length ? `<h3 class="modal-section-title">Genre</h3><div class="modal-genres">${genreHtml}</div>` : ''}
        <h3 class="modal-section-title">Sinopsis</h3>
        <div class="modal-synopsis" id="synopsisText"><span style="opacity:0.4">Menerjemahkan sinopsis...</span></div>
        ${a.url ? `<a href="${a.url}" target="_blank" rel="noopener" class="modal-link">Lihat di MyAnimeList →</a>` : ''}
      </div>`;

    document.getElementById('modalOverlay').classList.add('active');

    const translated = await translateToId(a.synopsis);
    const synEl = document.getElementById('synopsisText');
    if (synEl) synEl.textContent = translated;
  }

  // ===== SEARCH & FILTER =====
  function applyFilters() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    displayList = animeList.filter(a => {
      const matchType = activeFilter === 'all' || a.type === activeFilter;
      const matchSearch = !query ||
        a.title.toLowerCase().includes(query) ||
        (a.titleEn && a.titleEn.toLowerCase().includes(query)) ||
        (a.titleJp && a.titleJp.includes(query));
      return matchType && matchSearch;
    });
    renderGrid();
  }

  // ===== BUBBLES =====
  function createBubbles() {
    for (let i = 0; i < 16; i++) {
      const b = document.createElement('div');
      b.className = 'bubble';
      const size = Math.random() * 28 + 6;
      b.style.cssText = `width:${size}px;height:${size}px;left:${Math.random()*100}%;animation-duration:${Math.random()*14+8}s;animation-delay:${Math.random()*12}s;`;
      document.body.appendChild(b);
    }
  }

  // ===== EVENTS =====
  function bindEvents() {
    document.getElementById('searchInput').addEventListener('input', applyFilters);

    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeFilter = btn.dataset.filter;
        applyFilters();
      });
    });

    document.querySelectorAll('.view-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeView = btn.dataset.view;
        document.getElementById('animeGrid').classList.toggle('list-view', activeView === 'list');
      });
    });

    document.getElementById('modalOverlay').addEventListener('click', (e) => {
      if (e.target.id === 'modalOverlay') e.target.classList.remove('active');
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') document.getElementById('modalOverlay').classList.remove('active');
    });

    const btt = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
      btt.classList.toggle('visible', window.scrollY > 400);
    });
    btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // ===== CUSTOM CURSOR =====
  function initCursor() {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot  = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    if (!dot || !ring) return;

    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;
    const ringSpeed = 0.14;

    (function animate() {
      ringX += (mouseX - ringX) * ringSpeed;
      ringY += (mouseY - ringY) * ringSpeed;
      ring.style.left = ringX + 'px';
      ring.style.top  = ringY + 'px';
      requestAnimationFrame(animate);
    })();

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX; mouseY = e.clientY;
      dot.style.left = mouseX + 'px';
      dot.style.top  = mouseY + 'px';
      document.body.classList.add('cursor-visible');
    });

    document.addEventListener('mouseleave', () => document.body.classList.remove('cursor-visible'));
    document.addEventListener('mouseenter', () => document.body.classList.add('cursor-visible'));
    document.addEventListener('mousedown', () => document.body.classList.add('cursor-click'));
    document.addEventListener('mouseup',   () => document.body.classList.remove('cursor-click'));

    document.addEventListener('mouseover', (e) => {
      document.body.classList.remove('cursor-hover', 'cursor-card');
      if      (e.target.closest('.anime-card')) document.body.classList.add('cursor-card');
      else if (e.target.closest('a, button, input')) document.body.classList.add('cursor-hover');
    });
  }

  // ===== INIT =====
  document.addEventListener('DOMContentLoaded', () => {
    initCursor();
    createBubbles();
    bindEvents();
    loadData();
  });
})();