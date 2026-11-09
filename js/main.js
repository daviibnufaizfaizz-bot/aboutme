/**
 * ==========================================================================
 * PORTOFOLIO DIMAS PEBRIANTO - TEMA MOONLIGHT
 * JavaScript Vanilla (ES6+)
 * ==========================================================================
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Cek preferensi aksesibilitas: prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------------
     1. DATA KEAHLIAN (SKILLS)
     Data ini diambil dari array dan dirender otomatis ke DOM (#skillsGrid)
     ------------------------------------------------------------------------ */
  const skillsData = [
    {
      name: 'HTML5',
      category: 'Frontend & Struktur Web',
      icon: '🌐'
    },
    {
      name: 'CSS3',
      category: 'Styling, Flexbox & Grid',
      icon: '🎨'
    },
    {
      name: 'JavaScript',
      category: 'ES6+ & DOM Manipulation',
      icon: '⚡'
    },
    {
      name: 'Git & GitHub',
      category: 'Version Control & Workflow',
      icon: '📦'
    },
    {
      name: 'Problem Solving',
      category: 'Logika & Algoritma Dasar',
      icon: '💡'
    },
    {
      name: 'Teamwork',
      category: 'Komunikasi & Kolaborasi Tim',
      icon: '🤝'
    }
  ];

  /* ------------------------------------------------------------------------
     2. DATA PROYEK (PROJECTS)
     Data ini diambil dari array of objects dan dirender ke DOM (#projectsGrid)
     ------------------------------------------------------------------------ */
  const projectsData = [
    {
      title: 'Website Portofolio Moonlight',
      description: 'Website portofolio pribadi bergaya moonlight dengan efek glassmorphism, bintang berkedip, dan layout responsif yang dibangun tanpa framework.',
      tags: ['HTML5', 'CSS3', 'JavaScript Vanilla'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Aplikasi Web Placeholder 1',
      description: 'Eksplorasi antarmuka web interaktif yang menerapkan manipulasi DOM dinamis, transisi halus, dan arsitektur kode modular.',
      tags: ['JavaScript', 'Web APIs', 'Responsive Design'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Aplikasi Web Placeholder 2',
      description: 'Studi kasus implementasi algoritma dasar pemrograman dan visualisasi data sederhana untuk meningkatkan efisiensi pemecahan masalah.',
      tags: ['Logika Algoritma', 'Struktur Data', 'Modern UI'],
      demoUrl: '#',
      codeUrl: '#'
    }
  ];

  /* ------------------------------------------------------------------------
     3. DATA KATA ANIMASI KETIK (TYPING ANIMATION)
     Berputar antara peran/status placeholder Dimas
     ------------------------------------------------------------------------ */
  const typingWords = [
    'Mahasiswa',
    'Pembelajar Teknologi',
    'Calon Developer'
  ];

  /* ------------------------------------------------------------------------
     4. RENDER DATA KE DOM
     ------------------------------------------------------------------------ */
  function renderSkills() {
    const grid = document.getElementById('skillsGrid');
    if (!grid) return;

    grid.innerHTML = skillsData.map(skill => `
      <div class="skill-card card fade-in-element">
        <div class="skill-icon-wrap" aria-hidden="true">${skill.icon}</div>
        <div class="skill-info">
          <h3 class="skill-name">${skill.name}</h3>
          <span class="skill-category">${skill.category}</span>
        </div>
      </div>
    `).join('');
  }

  function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;

    grid.innerHTML = projectsData.map(project => `
      <article class="project-card card fade-in-element">
        <div class="project-body">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.description}</p>
          <div class="project-tags">
            ${project.tags.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
          </div>
        </div>
        <div class="project-actions">
          <a href="${project.demoUrl}" class="btn btn-primary project-btn" target="_blank" rel="noopener noreferrer">Demo</a>
          <a href="${project.codeUrl}" class="btn btn-secondary project-btn" target="_blank" rel="noopener noreferrer">Kode</a>
        </div>
      </article>
    `).join('');
  }

  renderSkills();
  renderProjects();

  /* ------------------------------------------------------------------------
     5. ANIMASI MENGETIK (TYPING EFFECT)
     ------------------------------------------------------------------------ */
  const typingElement = document.getElementById('typing-text');
  if (typingElement) {
    if (prefersReducedMotion) {
      // Jika pengguna memilih minim animasi, tampilkan kata pertama secara statis
      typingElement.textContent = typingWords[0];
    } else {
      let wordIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      const typeSpeed = 100;
      const deleteSpeed = 50;
      const holdTime = 1800;

      function typeStep() {
        const currentWord = typingWords[wordIndex];

        if (isDeleting) {
          typingElement.textContent = currentWord.substring(0, charIndex - 1);
          charIndex--;
        } else {
          typingElement.textContent = currentWord.substring(0, charIndex + 1);
          charIndex++;
        }

        let delay = isDeleting ? deleteSpeed : typeSpeed;

        if (!isDeleting && charIndex === currentWord.length) {
          delay = holdTime;
          isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % typingWords.length;
          delay = 400;
        }

        setTimeout(typeStep, delay);
      }

      typeStep();
    }
  }

  /* ------------------------------------------------------------------------
     6. NAVBAR MOBILE & SMOOTH SCROLL
     ------------------------------------------------------------------------ */
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  function toggleMenu(isOpen) {
    const currentState = navToggle.getAttribute('aria-expanded') === 'true';
    const targetState = typeof isOpen === 'boolean' ? isOpen : !currentState;

    navToggle.setAttribute('aria-expanded', String(targetState));
    navToggle.setAttribute('aria-label', targetState ? 'Tutup menu navigasi' : 'Buka menu navigasi');
    navMenu.classList.toggle('is-active', targetState);
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => toggleMenu());

    // Tutup menu saat link diklik
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('is-active')) {
          toggleMenu(false);
        }
      });
    });

    // Tutup menu jika klik di luar navbar
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !navToggle.contains(e.target) && navMenu.classList.contains('is-active')) {
        toggleMenu(false);
      }
    });

    // Tutup menu dengan tombol Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('is-active')) {
        toggleMenu(false);
        navToggle.focus();
      }
    });
  }

  /* ------------------------------------------------------------------------
     7. HIGHLIGHT LINK NAVBAR AKTIF (SCROLL SPY)
     ------------------------------------------------------------------------ */
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 160;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });
  updateActiveNavLink();

  /* ------------------------------------------------------------------------
     8. ANIMASI FADE-IN SAAT SCROLL (INTERSECTION OBSERVER)
     ------------------------------------------------------------------------ */
  // Tambahkan kelas fade-in ke elemen section utama
  const observeTargets = document.querySelectorAll('.section-header, .about-grid, .timeline-item, .contact-card, .skill-card, .project-card');

  observeTargets.forEach(el => {
    if (!el.classList.contains('fade-in-element')) {
      el.classList.add('fade-in-element');
    }
  });

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    // Jika reduced motion aktif atau browser lama, tampilkan semua tanpa animasi
    document.querySelectorAll('.fade-in-element').forEach(el => {
      el.classList.add('is-visible');
    });
  } else {
    const appearOptions = {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, appearOptions);

    document.querySelectorAll('.fade-in-element').forEach(el => {
      appearOnScroll.observe(el);
    });
  }

  /* ------------------------------------------------------------------------
     9. EFEK LATAR BINTANG BERKELIP (STARFIELD CANVAS)
     ------------------------------------------------------------------------ */
  const canvas = document.getElementById('starfield');
  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext('2d');
    let stars = [];
    let animationFrameId = null;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    }

    function initStars() {
      stars = [];
      // Jumlah bintang proporsional dengan lebar layar (sekitar 60 - 130 bintang)
      const count = Math.floor((canvas.width * canvas.height) / 10000);
      const starCount = Math.max(50, Math.min(count, 140));

      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.3 + 0.4,
          alpha: Math.random() * 0.7 + 0.3,
          speed: Math.random() * 0.015 + 0.005,
          phase: Math.random() * Math.PI * 2
        });
      }
    }

    function drawStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Efek kedip halus (sinusoidal)
        const currentAlpha = prefersReducedMotion 
          ? star.alpha 
          : star.alpha * (0.6 + 0.4 * Math.sin(star.phase));

        star.phase += star.speed;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232, 236, 255, ${currentAlpha.toFixed(3)})`;
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(drawStars);
      }
    }

    window.addEventListener('resize', () => {
      resizeCanvas();
      if (prefersReducedMotion) {
        drawStars();
      }
    });

    resizeCanvas();
    drawStars();
  }
});

