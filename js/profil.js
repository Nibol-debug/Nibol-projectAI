  // Custom cursor
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  function animateCursor() {
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
    rx += (mx - rx) * 0.12;
    ry += (my - ry) *.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  document.querySelectorAll('a, button, .nav-btn').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(2)';
      ring.style.transform = 'translate(-50%,-50%) scale(1.4)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(1)';
      ring.style.transform = 'translate(-50%,-50%) scale(1)';
    });
  });

  // Nav scroll
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 80);
  });

  // Stars
  const starsEl = document.getElementById('stars');
  for (let i = 0; i < 120; i++) {
    const s = document.createElement('div');
    const size = Math.random() * 2.5 + 0.5;
    s.className = 'star';
    s.style.cssText = `
      left:${Math.random()*100}%;
      top:${Math.random()*100}%;
      width:${size}px;height:${size}px;
      --d:${2+Math.random()*4}s;
      --min:${0.1+Math.random()*0.4};
      animation-delay:${-Math.random()*4}s;
    `;
    starsEl.appendChild(s);
  }

  // Sakura petals
  const petalsEl = document.getElementById('petals');
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    const size = 5 + Math.random() * 8;
    p.className = 'petal';
    p.style.cssText = `
      --s:${size}px;
      --x:${Math.random()*100}%;
      --dur:${7+Math.random()*8}s;
      --delay:${-Math.random()*12}s;
      --sway:${(Math.random()-0.5)*120}px;
    `;
    petalsEl.appendChild(p);
  }

  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        // stagger children
        Array.from(e.target.children).forEach((child, i) => {
          child.style.transitionDelay = (i * 0.12) + 's';
        });
      }
    });
  }, { threshold: 0.15 });
  reveals.forEach(r => observer.observe(r));

  // Parallax fuji on scroll
  const fuji = document.querySelector('.fuji-wrap');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < window.innerHeight) {
      fuji.style.transform = `translateY(${y * 0.15}px)`;
    }
  });

  // Social media staggered reveal
  const socialLinks = document.querySelector('.social-links');
  if (socialLinks) {
    const socialObserver = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('animated');
          socialObserver.unobserve(e.target);
        }
      });
    }, { threshold: 0.2 });
    socialObserver.observe(socialLinks);

    // Cursor interaction for social buttons
    document.querySelectorAll('.social-btn').forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%,-50%) scale(2)';
        cursor.style.background = 'var(--fuji-pink)';
        ring.style.transform = 'translate(-50%,-50%) scale(1.5)';
        ring.style.borderColor = 'rgba(232,160,176,0.8)';
      });
      btn.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%,-50%) scale(1)';
        cursor.style.background = 'var(--fuji-pink)';
        ring.style.transform = 'translate(-50%,-50%) scale(1)';
        ring.style.borderColor = 'rgba(232,160,176,0.6)';
      });
    });
  }
  // Smooth scroll nav
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
// ── MUSIC PLAYER ──
const audio = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const trackTitle = document.getElementById('track-title');
const trackArtist = document.getElementById('track-artist');
const trackArt = document.getElementById('track-art');
const playlistContainer = document.getElementById('playlist-items');
const musicPlayer = document.getElementById('music-player');
const closePlayer = document.getElementById('close-player');

let currentTrackIndex = 0;
let isPlaying = false;

// Playlist (ganti link audio dengan milikmu nanti)
const playlist = [
  {
    title: "TKJ 34 Juara",
    artist: "Nibol × Chill Guy",
    src: "https://files.catbox.moe/5hxr8c.mp3", // ganti nanti
    emoji: "👑"
  },
  {
    title: "Glue song",
    artist: "beabadoobee",
    src: "https://files.catbox.moe/w17kiy.mp3",
    emoji: "🌳"
  },
  {
    title: "Safe and Sound - Different Heaven",
    artist: "NCS",
    src: "https://files.catbox.moe/wqdsf0.mp3",
    emoji: "🌧️"
  }
];

function loadTrack(index) {
  const track = playlist[index];
  audio.src = track.src;
  trackTitle.textContent = track.title;
  trackArtist.textContent = track.artist;
  trackArt.textContent = track.emoji;
  playlistContainer.querySelectorAll('.playlist-item').forEach((el, i) => {
    el.classList.toggle('active', i === index);
  });
}

function togglePlay() {
  if (isPlaying) {
    audio.pause();
    playPauseBtn.innerHTML = '▶';
    musicPlayer.classList.remove('playing');
  } else {
    audio.play();
    playPauseBtn.innerHTML = '❚❚';
    musicPlayer.classList.add('playing');
  }
  isPlaying = !isPlaying;
}

function updateProgress() {
  if (audio.duration) {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
    currentTimeEl.textContent = formatTime(audio.currentTime);
    durationEl.textContent = formatTime(audio.duration);
  }
}

function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec < 10 ? '0' : ''}${sec}`;
}

// Render playlist
function renderPlaylist() {
  playlistContainer.innerHTML = '';
  playlist.forEach((track, i) => {
    const div = document.createElement('div');
    div.className = 'playlist-item';
    div.innerHTML = `
      <span>${track.emoji} ${track.title}</span>
      <span style="font-size:0.65rem;opacity:0.6;">${track.artist}</span>
    `;
    div.addEventListener('click', () => {
      currentTrackIndex = i;
      loadTrack(currentTrackIndex);
      audio.play();
      isPlaying = true;
      playPauseBtn.innerHTML = '❚❚';
      musicPlayer.classList.add('playing');
    });
    playlistContainer.appendChild(div);
  });
}

// Event listeners
playPauseBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => {
  currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
  loadTrack(currentTrackIndex);
  if (isPlaying) audio.play();
});
nextBtn.addEventListener('click', () => {
  currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
  loadTrack(currentTrackIndex);
  if (isPlaying) audio.play();
});
progressBar.addEventListener('input', () => {
  audio.currentTime = (progressBar.value / 100) * audio.duration;
});
audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('ended', () => {
  currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
  loadTrack(currentTrackIndex);
  audio.play();
});

closePlayer.addEventListener('click', () => {
  musicPlayer.classList.add('hidden');
  if (isPlaying) audio.pause();
});

// Inisialisasi
window.addEventListener('load', () => {
  loadTrack(currentTrackIndex);
  renderPlaylist();
});