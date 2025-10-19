// Keyboard shortcuts
(function() {
  'use strict';

  document.addEventListener('keydown', function(e) {
    // Ignore if user is typing in input/textarea
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
      return;
    }

    // / - Focus search (if search exists)
    if (e.key === '/') {
      e.preventDefault();
      var searchInput = document.querySelector('input[type="search"], input[placeholder*="search" i]');
      if (searchInput) {
        searchInput.focus();
        searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }

    // n - Next post (if exists)
    if (e.key === 'n') {
      var nextLink = document.querySelector('a[rel="next"]');
      if (nextLink) {
        window.location.href = nextLink.href;
      }
    }

    // p - Previous post (if exists)
    if (e.key === 'p') {
      var prevLink = document.querySelector('a[rel="prev"]');
      if (prevLink) {
        window.location.href = prevLink.href;
      }
    }

    // g then h - Go home
    if (e.key === 'g') {
      var secondKey = function(e2) {
        if (e2.key === 'h') {
          window.location.href = '/';
        }
        document.removeEventListener('keydown', secondKey);
      };
      document.addEventListener('keydown', secondKey);
      setTimeout(function() {
        document.removeEventListener('keydown', secondKey);
      }, 1000);
    }

    // ? - Show keyboard shortcuts help
    if (e.key === '?') {
      e.preventDefault();
      showKeyboardHelp();
    }
  });

  // Show keyboard shortcuts overlay
  function showKeyboardHelp() {
    // Remove existing if present
    var existing = document.getElementById('keyboard-help');
    if (existing) {
      existing.remove();
      return;
    }

    var overlay = document.createElement('div');
    overlay.id = 'keyboard-help';
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);z-index:10000;display:flex;align-items:center;justify-content:center;';

    var box = document.createElement('div');
    box.style.cssText = 'background:#fff;color:#000;padding:2rem;border-radius:8px;max-width:500px;width:90%;';
    box.innerHTML = `
      <h3 style="margin-top:0;">Keyboard Shortcuts</h3>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="padding:0.5rem;"><kbd>/</kbd></td><td>Focus search</td></tr>
        <tr><td style="padding:0.5rem;"><kbd>n</kbd></td><td>Next post</td></tr>
        <tr><td style="padding:0.5rem;"><kbd>p</kbd></td><td>Previous post</td></tr>
        <tr><td style="padding:0.5rem;"><kbd>g</kbd> <kbd>h</kbd></td><td>Go home</td></tr>
        <tr><td style="padding:0.5rem;"><kbd>?</kbd></td><td>Show this help</td></tr>
        <tr><td style="padding:0.5rem;"><kbd>Esc</kbd></td><td>Close this help</td></tr>
      </table>
      <p style="margin-bottom:0;text-align:center;margin-top:1.5rem;">
        <button onclick="this.closest('#keyboard-help').remove()" style="padding:0.5rem 1rem;background:#000;color:#fff;border:none;border-radius:4px;cursor:pointer;">Close</button>
      </p>
    `;

    overlay.appendChild(box);
    document.body.appendChild(overlay);

    // Close on click outside or Escape
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        overlay.remove();
      }
    });

    document.addEventListener('keydown', function closeOnEsc(e) {
      if (e.key === 'Escape') {
        overlay.remove();
        document.removeEventListener('keydown', closeOnEsc);
      }
    });
  }

  // Add a small hint in the footer
  window.addEventListener('load', function() {
    var footer = document.querySelector('footer');
    if (footer) {
      var hint = document.createElement('div');
      hint.style.cssText = 'text-align:center;font-size:0.85rem;color:#999;margin-top:1rem;';
      hint.innerHTML = 'Press <kbd>?</kbd> for keyboard shortcuts';
      footer.appendChild(hint);
    }
  });
})();
