/* LeadSimple.AI – App JS */

(function () {
  'use strict';

  /* ---- Mobile nav toggle ---- */
  const hamburger = document.querySelector('.navbar__hamburger');
  const navLinks = document.querySelector('.navbar__links');
  const navActions = document.querySelector('.navbar__actions');

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!isOpen));

      [navLinks, navActions].forEach(function (el) {
        if (!el) return;
        if (isOpen) {
          el.style.display = '';
          el.classList.remove('nav--open');
        } else {
          el.style.display = 'flex';
          el.classList.add('nav--open');
        }
      });
    });
  }

  /* ---- Signup form ---- */
  var form = document.getElementById('signup-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = form.querySelector('.cta__input');
      var email = input ? input.value.trim() : '';

      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showFormMessage(form, 'Please enter a valid work email.', 'error');
        return;
      }

      // Simulate successful sign-up
      showFormMessage(form, "🎉 You're on the list! We'll be in touch soon.", 'success');
      form.reset();
    });
  }

  function showFormMessage(form, message, type) {
    var existing = form.querySelector('.form-message');
    if (existing) existing.remove();

    var msg = document.createElement('p');
    msg.className = 'form-message form-message--' + type;
    msg.textContent = message;
    msg.style.cssText =
      'margin-top:12px;font-size:0.9rem;font-weight:500;color:' +
      (type === 'success' ? '#00d4ff' : '#ff6b6b') + ';';
    form.after(msg);

    setTimeout(function () {
      msg.remove();
    }, 5000);
  }

  /* ---- Smooth scroll for all anchor links ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ---- Intersection observer for fade-in animation ---- */
  if ('IntersectionObserver' in window) {
    var style = document.createElement('style');
    style.textContent =
      '.fade-in{opacity:0;transform:translateY(24px);transition:opacity 0.55s ease,transform 0.55s ease}' +
      '.fade-in.visible{opacity:1;transform:none}';
    document.head.appendChild(style);

    var targets = document.querySelectorAll(
      '.feature-card, .step, .testimonial-card, .pricing-card, .stat'
    );
    targets.forEach(function (el) {
      el.classList.add('fade-in');
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    targets.forEach(function (el) {
      observer.observe(el);
    });
  }
})();
