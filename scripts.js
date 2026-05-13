/* ============================================================
   HADEEM SECKA — PORTFOLIO SCRIPTS
   Matrix rain canvas, scroll animations, nav highlighting,
   smooth scroll, mobile hamburger menu
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Matrix Rain Canvas ---------- */
  const canvas = document.getElementById('matrix-canvas');
  const ctx = canvas.getContext('2d');

  const FONT_SIZE = 14;
  const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:<>?/~';

  let columns = 0;
  let drops = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = Math.floor(canvas.width / FONT_SIZE);
    drops = Array.from({ length: columns }, () =>
      Math.random() * canvas.height / FONT_SIZE
    );
  }

  function drawMatrix() {
    ctx.fillStyle = 'rgba(10, 10, 10, 0.06)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00aaff';
    ctx.font = FONT_SIZE + 'px "JetBrains Mono", monospace';

    for (let i = 0; i < drops.length; i++) {
      const char = CHARS[Math.floor(Math.random() * CHARS.length)];
      const x = i * FONT_SIZE;
      const y = drops[i] * FONT_SIZE;

      const brightness = 0.3 + Math.random() * 0.7;
      ctx.fillStyle = `rgba(0, 170, 255, ${brightness})`;
      ctx.fillText(char, x, y);

      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i] += 0.5 + Math.random() * 0.5;
    }

    requestAnimationFrame(drawMatrix);
  }

  resizeCanvas();
  drawMatrix();

  let resizeTimeout;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(resizeCanvas, 150);
  });

  /* ---------- Scroll Reveal (Fade-Up) ---------- */
  var fadeElements = document.querySelectorAll('.fade-up');

  if ('IntersectionObserver' in window) {
    document.body.classList.add('js-ready');

    var fadeObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -10px 0px' }
    );

    fadeElements.forEach(function (el) {
      fadeObserver.observe(el);
    });

    setTimeout(function () {
      fadeElements.forEach(function (el) {
        el.classList.add('visible');
      });
    }, 1500);
  }

  /* ---------- Active Nav Section Highlighting ---------- */
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  const sectionObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('active');
            }
          });
        }
      });
    },
    { threshold: 0.15, rootMargin: '-80px 0px -50% 0px' }
  );

  sections.forEach(function (section) {
    sectionObserver.observe(section);
  });

  /* ---------- Smooth Scroll for Nav Links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      const mobileNav = document.getElementById('nav-links');
      const hamburger = document.getElementById('hamburger');
      if (mobileNav.classList.contains('open')) {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  });

  /* ---------- Mobile Hamburger Menu ---------- */
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('nav-links');

  hamburger.addEventListener('click', function () {
    const isOpen = mobileNav.classList.toggle('open');
    hamburger.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  document.addEventListener('click', function (e) {
    if (
      mobileNav.classList.contains('open') &&
      !mobileNav.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      mobileNav.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
      mobileNav.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
})();
