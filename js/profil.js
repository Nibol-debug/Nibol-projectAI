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
