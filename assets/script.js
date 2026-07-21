(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Menu mobile ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.querySelector('.mobile-menu');
  function closeMenu() {
    document.body.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
  }
  toggle.addEventListener('click', function () {
    var open = document.body.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-hidden', String(!open));
  });
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  /* ---------- Pull-up : découpe des titres en mots ---------- */
  document.querySelectorAll('.pullup').forEach(function (el) {
    if (reduceMotion) { el.classList.add('in'); return; }
    var nodes = Array.prototype.slice.call(el.childNodes);
    el.textContent = '';
    var wordIndex = 0;
    nodes.forEach(function (node) {
      var isEm = node.nodeType === 1 && node.tagName === 'EM';
      var text = node.textContent;
      text.split(/\s+/).forEach(function (word) {
        if (!word) return;
        var w = document.createElement('span');
        w.className = 'w';
        var inner = document.createElement('span');
        inner.textContent = word;
        inner.style.transitionDelay = (wordIndex * 70) + 'ms';
        if (isEm) {
          var em = document.createElement('em');
          em.appendChild(inner);
          w.appendChild(em);
        } else {
          w.appendChild(inner);
        }
        el.appendChild(w);
        el.appendChild(document.createTextNode(' '));
        wordIndex++;
      });
    });
  });

  /* ---------- Reveals à l'entrée dans le viewport ---------- */
  var toWatch = document.querySelectorAll('.reveal, .pullup');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    toWatch.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    toWatch.forEach(function (el) {
      /* Déjà visible au chargement : on anime tout de suite, sans dépendre de l'observer */
      if (el.getBoundingClientRect().top < window.innerHeight * 0.95) {
        requestAnimationFrame(function () { el.classList.add('in'); });
      } else {
        io.observe(el);
      }
    });
  }

  /* ---------- Révélation caractère par caractère au scroll ---------- */
  var about = document.getElementById('about-reveal');
  if (about) {
    if (reduceMotion) {
      about.classList.add('done');
    } else {
      var txt = about.textContent;
      about.textContent = '';
      var frag = document.createDocumentFragment();
      for (var i = 0; i < txt.length; i++) {
        var s = document.createElement('span');
        s.className = 'ch';
        s.textContent = txt[i];
        frag.appendChild(s);
      }
      about.appendChild(frag);
      var chars = about.querySelectorAll('.ch');
      var ticking = false;
      function paint() {
        ticking = false;
        var rect = about.getBoundingClientRect();
        var vh = window.innerHeight;
        var progress = (vh * 0.85 - rect.top) / (vh * 0.55);
        progress = Math.max(0, Math.min(1.15, progress));
        var lit = Math.floor(progress * chars.length);
        for (var j = 0; j < chars.length; j++) {
          chars[j].style.opacity = j < lit ? '1' : '';
        }
      }
      window.addEventListener('scroll', function () {
        if (!ticking) { ticking = true; requestAnimationFrame(paint); }
      }, { passive: true });
      paint();
    }
  }

  /* ---------- Nav : pilule claire une fois sorti du hero ---------- */
  var hero = document.querySelector('.hero');
  if (hero) {
    var navPaint = function () {
      document.body.classList.toggle('nav-light', window.scrollY > hero.offsetHeight * 0.72);
    };
    window.addEventListener('scroll', navPaint, { passive: true });
    navPaint();
  } else {
    document.body.classList.add('nav-light');
  }

  /* ---------- Année ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  /* ---------- Formulaire Web3Forms ---------- */
  var form = document.getElementById('devis-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var success = form.querySelector('.form-success');
      var error = form.querySelector('.form-error');
      var btn = form.querySelector('button[type="submit"]');
      success.style.display = 'none';
      error.style.display = 'none';

      var key = form.querySelector('[name="access_key"]').value;
      if (!key || key.indexOf('REMPLACER') !== -1) {
        error.style.display = 'block';
        return;
      }

      var data = new FormData(form);
      data.append('subject', 'Nouvelle demande de devis : site Lannemezan');
      data.append('from_name', 'ESPADE david Couverture · Lannemezan');
      btn.disabled = true;

      fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
        .then(function (r) { return r.json(); })
        .then(function (json) {
          if (json.success) {
            form.reset();
            success.style.display = 'block';
          } else {
            error.style.display = 'block';
          }
        })
        .catch(function () { error.style.display = 'block'; })
        .finally(function () { btn.disabled = false; });
    });
  }
})();
