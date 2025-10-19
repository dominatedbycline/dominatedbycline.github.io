// Simple image lightbox - click to enlarge
(function() {
  'use strict';

  // Only target images in article content
  var images = document.querySelectorAll('article img');
  if (!images.length) return;

  images.forEach(function(img) {
    // Skip if image is too small
    if (img.width < 200) return;

    // Make clickable
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', function() {
      openLightbox(img.src, img.alt);
    });
  });

  function openLightbox(src, alt) {
    var lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
      <div class="lightbox-overlay"></div>
      <div class="lightbox-content">
        <img src="${src}" alt="${alt || ''}" style="max-width:90vw;max-height:90vh;border-radius:8px;box-shadow:0 8px 32px rgba(0,0,0,0.3);">
        <button class="lightbox-close" aria-label="Close">✕</button>
      </div>
    `;

    // Styles
    lightbox.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:10000;display:flex;align-items:center;justify-content:center;';

    var overlay = lightbox.querySelector('.lightbox-overlay');
    overlay.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);';

    var content = lightbox.querySelector('.lightbox-content');
    content.style.cssText = 'position:relative;z-index:1;';

    var closeBtn = lightbox.querySelector('.lightbox-close');
    closeBtn.style.cssText = 'position:absolute;top:-40px;right:0;background:none;border:none;color:#fff;font-size:32px;cursor:pointer;padding:0;width:40px;height:40px;';

    document.body.appendChild(lightbox);

    // Close handlers
    function close() {
      lightbox.remove();
    }

    closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', close);

    document.addEventListener('keydown', function closeOnEsc(e) {
      if (e.key === 'Escape') {
        close();
        document.removeEventListener('keydown', closeOnEsc);
      }
    });
  }
})();
