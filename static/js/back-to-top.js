// Back to top button
(function() {
  'use strict';

  // Create button
  var btn = document.createElement('button');
  btn.className = 'back-to-top';
  btn.innerHTML = '↑';
  btn.setAttribute('aria-label', 'Back to top');
  btn.style.display = 'none';
  document.body.appendChild(btn);

  // Show/hide button based on scroll
  function toggleButton() {
    if (window.pageYOffset > 300) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  }

  // Smooth scroll to top
  btn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Throttle scroll event
  var ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        toggleButton();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Initial check
  toggleButton();
})();
