// Reading progress bar
(function() {
  'use strict';

  // Only run on post pages
  if (!document.querySelector('article')) return;

  // Create progress bar
  var progressBar = document.createElement('div');
  progressBar.className = 'reading-progress';
  progressBar.innerHTML = '<div class="reading-progress-fill"></div>';
  document.body.prepend(progressBar);

  var fill = progressBar.querySelector('.reading-progress-fill');

  // Update progress on scroll
  function updateProgress() {
    var windowHeight = window.innerHeight;
    var documentHeight = document.documentElement.scrollHeight - windowHeight;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var progress = (scrollTop / documentHeight) * 100;

    fill.style.width = Math.min(progress, 100) + '%';
  }

  // Throttle scroll event
  var ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        updateProgress();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Initial update
  updateProgress();
})();
