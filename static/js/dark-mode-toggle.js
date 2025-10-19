// Manual dark mode toggle
(function() {
  'use strict';

  // Create toggle button
  var btn = document.createElement('button');
  btn.className = 'dark-mode-toggle';
  btn.setAttribute('aria-label', 'Toggle dark mode');
  btn.innerHTML = '🌙';
  document.body.appendChild(btn);

  // Check saved preference or system preference
  var darkModeStyle = document.getElementById('darkModeStyle');
  if (!darkModeStyle) return; // Theme doesn't support dark mode

  var savedMode = localStorage.getItem('darkMode');
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  var isDark = savedMode === 'dark' || (savedMode === null && prefersDark);

  function updateMode(dark) {
    if (dark) {
      darkModeStyle.media = '';
      darkModeStyle.disabled = false;
      btn.innerHTML = '☀️';
      localStorage.setItem('darkMode', 'dark');
    } else {
      darkModeStyle.media = 'none';
      darkModeStyle.disabled = true;
      btn.innerHTML = '🌙';
      localStorage.setItem('darkMode', 'light');
    }
  }

  // Set initial mode
  updateMode(isDark);

  // Toggle on click
  btn.addEventListener('click', function() {
    isDark = !isDark;
    updateMode(isDark);
  });
})();
