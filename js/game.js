/* ═══════════════════════════════════════════════════
   GAME.JS · TAISHO ERA × KIMETSU NO YAIBA
   Elegant Demon Slayer Gaming Archive
═══════════════════════════════════════════════════ */

/* ═══ 1. CURSOR ═══ */
const blade = document.getElementById('cursorBlade');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

(function animCursor() {
  if (blade) { blade.style.left = mx + 'px'; blade.style.top = my + 'px'; }
  rx += (mx - rx) * 0.13;
  ry += (my - ry) * 0.13;
  if (ring) { ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; }
  requestAnimationFrame(animCursor);
})();

// Cursor hover effect
document.querySelectorAll('a, button, .ukiyo-frame, [contenteditable], .foot-stat').forEach(el => {
  el.addEventListener('mouseenter', () => {
    if (blade) blade.style.transform = 'translate(-50%,-50%) rotate(45deg) scale(2.2)';
    if (ring) { ring.style.transform = 'translate(-50%,-50%) scale(1.6)'; ring.style.borderColor = 'rgba(212,175,55,0.7)'; }
  });
  el.addEventListener('mouseleave', () => {
    if (blade) blade.style.transform = 'translate(-50%,-50%) rotate(45deg) scale(1)';
    if (ring) { ring.style.transform = 'translate(-50%,-50%) scale(1)'; ring.style.borderColor = 'rgba(212,175,55,0.4)'; }
  });
});

/* ═══ 2. CLOCK ═══ */
function updateClock() {
  const now = new Date();
  const p = v => String(v).padStart(2, '0');
  const el = document.getElementById('clock');
  const dl = document.getElementById('date');
  if (el) el.textContent = `${p(now.getHours())}:${p(now.getMinutes())}:${p(now.getSeconds())}`;
  if (dl) dl.textContent = `${p(now.getDate())}/${p(now.getMonth() + 1)}/${now.getFullYear()}`;
}
setInterval(updateClock, 1000);
updateClock();

/* ═══ 3. FLOATING PETALS (wisteria + sakura) ═══ */
(function initPetals() {
  const canvas = document.getElementById('petals');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H;
  const resize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; };
  window.addEventListener('resize', resize);
  resize();

  // Wisteria & sakura color palette
  const colors = [
    'rgba(155,126,200,VAL)',  // purple wisteria
    'rgba(139,107,168,VAL)',  // deep wisteria
    'rgba(200,164,212,VAL)',  // pale lavender
    'rgba(212,175,55,VAL)',   // gold fleck
    'rgba(220,160,180,VAL)',  // sakura pink
    'rgba(180,140,200,VAL)',  // soft purple
  ];

  class Petal {
    constructor() { this.reset(true); }
    reset(init = false) {
      this.x = Math.random() * W;
      this.y = init ? Math.random() * H : -20;
      this.size = Math.random() * 6 + 3;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = Math.random() * 0.8 + 0.3;
      this.rot = Math.random() * Math.PI * 2;
      this.vr = (Math.random() - 0.5) * 0.04;
      this.alpha = Math.random() * 0.35 + 0.1;
      this.sway = Math.random() * Math.PI * 2;
      this.swaySpeed = Math.random() * 0.02 + 0.005;
      const c = colors[Math.floor(Math.random() * colors.length)];
      this.color = c.replace('VAL', this.alpha.toFixed(2));
    }
    update() {
      this.sway += this.swaySpeed;
      this.x += this.vx + Math.sin(this.sway) * 0.4;
      this.y += this.vy;
      this.rot += this.vr;
      if (this.y > H + 20) this.reset();
    }
    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rot);
      ctx.fillStyle = this.color;
      // Wisteria petal shape — oval teardrop
      ctx.beginPath();
      ctx.ellipse(0, 0, this.size * 0.55, this.size, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  // Buat 55 petal — ringan, tidak berat
  const petals = Array.from({ length: 55 }, () => new Petal());

  (function animPetals() {
    ctx.clearRect(0, 0, W, H);
    petals.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animPetals);
  })();
})();

/* ═══ 4. PHOTO UPLOAD + DRAG & DROP ═══ */
function loadPhoto(input, imgId) {
  const file = input.files[0];
  if (!file || !file.type.startsWith('image/')) return;
  const reader = new FileReader();
  reader.onload = e => {
    const img = document.getElementById(imgId);
    const frame = input.closest('.ukiyo-frame');
    if (!img || !frame) return;
    const ph = frame.querySelector('.photo-placeholder');
    img.src = e.target.result;
    img.style.display = 'block';
    if (ph) ph.style.display = 'none';
    // Simpan ke localStorage
    try { localStorage.setItem('gamePhoto_' + imgId, e.target.result); } catch (e) { }
  };
  reader.readAsDataURL(file);
}
window.loadPhoto = loadPhoto;

// Restore foto dari localStorage
['genshin', 'hsr', 'zzz', 'mlbb', 'hok'].forEach(game => {
  const key = 'gamePhoto_' + game + '-img';
  const data = localStorage.getItem(key);
  if (!data) return;
  const img = document.getElementById(game + '-img');
  if (!img) return;
  const frame = img.closest('.ukiyo-frame');
  if (!frame) return;
  const ph = frame.querySelector('.photo-placeholder');
  img.src = data;
  img.style.display = 'block';
  if (ph) ph.style.display = 'none';
});

// Drag & drop support
document.querySelectorAll('.ukiyo-frame').forEach(frame => {
  frame.addEventListener('dragover', e => {
    e.preventDefault();
    frame.style.boxShadow = '0 0 20px rgba(212,175,55,0.5)';
  });
  frame.addEventListener('dragleave', () => {
    frame.style.boxShadow = '';
  });
  frame.addEventListener('drop', e => {
    e.preventDefault();
    frame.style.boxShadow = '';
    const file = e.dataTransfer.files[0];
    if (!file || !file.type.startsWith('image/')) return;
    const input = frame.querySelector('.photo-input');
    const img = frame.querySelector('.game-photo');
    if (!input || !img) return;
    // Get id dari img element
    const imgId = img.id;
    const dt = new DataTransfer();
    dt.items.add(file);
    input.files = dt.files;
    loadPhoto(input, imgId);
  });
});

/* ═══ 5. PROGRESS BAR REVEAL (scroll-triggered) ═══ */
const progFills = document.querySelectorAll('.prog-fill');
const progObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Trigger animasi dengan delay stagger
      entry.target.style.animationPlayState = 'running';
      progObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

progFills.forEach(fill => {
  fill.style.animationPlayState = 'paused';
  progObserver.observe(fill);
});

/* ═══ 6. CARD REVEAL ANIMATION ═══ */
const cards = document.querySelectorAll('.game-card');
const cardObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, i * 60);
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

cards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(28px)';
  card.style.transition = 'opacity 0.7s ease, transform 0.7s ease, border-color 0.4s, box-shadow 0.4s';
  cardObserver.observe(card);
});

/* ═══ 7. OVERALL PROGRESS HUD ═══ */
function calcOverall() {
  const vals = [];
  document.querySelectorAll('.prog-fill').forEach(fill => {
    const style = fill.getAttribute('style') || '';
    const m = style.match(/--p:\s*([\d.]+)%/);
    if (m) vals.push(parseFloat(m[1]));
  });
  return vals.length
    ? Math.round(vals.reduce((a, b) => a + b, 0) / vals.length)
    : 0;
}

function updateHUD() {
  const overall = calcOverall();
  const bar = document.getElementById('overallBar');
  const pct = document.getElementById('overallPct');
  const avg = document.getElementById('avgProgress');
  if (bar) bar.style.width = overall + '%';
  if (pct) pct.textContent = overall + '%';
  if (avg) avg.textContent = overall + '%';
}

/* ═══ 8. EDITABLE STATS — simpan ke localStorage ═══ */
document.querySelectorAll('[contenteditable]').forEach(el => {
  // Restore nilai tersimpan
  const key = 'stat_' + (el.closest('.game-card')?.dataset.game || 'x') + '_' + (el.closest('.foot-stat')?.querySelector('.fl')?.textContent?.trim() || Math.random());
  const saved = localStorage.getItem(key);
  if (saved) el.textContent = saved;

  // Simpan saat berubah
  el.addEventListener('input', () => {
    try { localStorage.setItem(key, el.textContent); } catch (e) { }
  });

  // Select all on focus
  el.addEventListener('focus', () => {
    const range = document.createRange();
    range.selectNodeContents(el);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  });

  // Enter = blur
  el.addEventListener('keydown', e => {
    if (e.key === 'Enter') { e.preventDefault(); el.blur(); }
  });
});

/* ═══ 9. PARALLAX MIST on scroll ═══ */
const mist = document.querySelector('.bg-mist');
window.addEventListener('scroll', () => {
  if (!mist) return;
  const y = window.scrollY * 0.05;
  mist.style.transform = `translateY(${y}px)`;
}, { passive: true });

/* ═══ 10. HEADER SCROLL EFFECT ═══ */
const header = document.getElementById('mainHeader');
window.addEventListener('scroll', () => {
  if (!header) return;
  if (window.scrollY > 60) {
    header.style.background = 'rgba(5,8,18,0.97)';
    header.style.borderBottomColor = 'rgba(212,175,55,0.25)';
  } else {
    header.style.background = 'rgba(8,12,28,0.94)';
    header.style.borderBottomColor = 'rgba(212,175,55,0.18)';
  }
}, { passive: true });

/* ═══ 11. RANDOM LANTERN FLICKER ═══ */
function lanternFlicker() {
  const glows = document.querySelectorAll('.card-glow');
  glows.forEach(g => {
    if (Math.random() < 0.06) {
      const opacity = 0.4 + Math.random() * 0.6;
      g.style.opacity = opacity.toString();
      setTimeout(() => { g.style.opacity = ''; }, 80 + Math.random() * 120);
    }
  });
}
setInterval(lanternFlicker, 2000 + Math.random() * 2000);

/* ═══ 12. IMAGE POPUP + ZOOM MODAL ═══ */
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
let modalZoom = 1;

function setModalZoom(value) {
  modalZoom = Math.min(5, Math.max(1, value));
  if (modalImg) {
    modalImg.style.transform = `scale(${modalZoom})`;
    modalImg.style.cursor = modalZoom > 1 ? 'grab' : 'zoom-in';
  }
}

function resetModal() {
  if (modalImg) {
    modalImg.style.transform = 'scale(1)';
    modalImg.style.transition = 'transform 0.2s ease';
    setTimeout(() => { if (modalImg) modalImg.style.transition = ''; }, 200);
  }
  modalZoom = 1;
  if (modal) modal.style.cursor = 'pointer';
}

document.querySelectorAll('.game-photo').forEach(img => {
  img.style.cursor = 'zoom-in';
  img.addEventListener('click', () => {
    if (!modal || !modalImg) return;
    modalImg.src = img.src;
    modal.style.display = 'flex';
    resetModal();
    // langsung zoom saat modal terbuka agar responsif
    setModalZoom(2);
  });
});

const closeModal = document.getElementById('closeModal');
const imageModal = document.getElementById('imageModal');
if (closeModal && imageModal && modalImg) {
  closeModal.addEventListener('click', e => {
    e.stopPropagation();
    imageModal.style.display = 'none';
  });

  imageModal.addEventListener('click', () => {
    imageModal.style.display = 'none';
  });

  modalImg.addEventListener('click', e => {
    e.stopPropagation();
    if (modalZoom === 1) {
      setModalZoom(2);
    } else {
      setModalZoom(1);
    }
  });

  modalImg.addEventListener('wheel', e => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.1 : -0.1;
    setModalZoom(modalZoom + delta);
  }, { passive: false });

  modalImg.addEventListener('mousedown', e => {
    if (modalZoom <= 1) return;
    e.preventDefault();
    const startX = e.clientX;
    const startY = e.clientY;
    const startLeft = modalImg.offsetLeft;
    const startTop = modalImg.offsetTop;

    function onMouseMove(ev) {
      modalImg.style.position = 'relative';
      modalImg.style.left = `${startLeft + ev.clientX - startX}px`;
      modalImg.style.top = `${startTop + ev.clientY - startY}px`;
      modalImg.style.cursor = 'grabbing';
    }

    function onMouseUp() {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      modalImg.style.cursor = 'grab';
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
}

/* ═══ INIT ═══ */
window.addEventListener('load', () => {
  setTimeout(updateHUD, 800);
});
