// Add copy buttons to code blocks
document.addEventListener('DOMContentLoaded', function() {
  const codeBlocks = document.querySelectorAll('pre code');

  codeBlocks.forEach(function(codeBlock) {
    const pre = codeBlock.parentElement;

    // Create wrapper if not exists
    if (!pre.parentElement.classList.contains('code-wrapper')) {
      const wrapper = document.createElement('div');
      wrapper.className = 'code-wrapper';
      pre.parentNode.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);
    }

    // Create copy button
    const button = document.createElement('button');
    button.className = 'copy-code-button';
    button.textContent = 'Copy';
    button.setAttribute('aria-label', 'Copy code to clipboard');

    // Add click handler
    button.addEventListener('click', function() {
      const code = codeBlock.textContent;
      navigator.clipboard.writeText(code).then(function() {
        button.textContent = 'Copied!';
        button.classList.add('copied');
        setTimeout(function() {
          button.textContent = 'Copy';
          button.classList.remove('copied');
        }, 2000);
      }).catch(function(err) {
        console.error('Failed to copy:', err);
        button.textContent = 'Failed';
        setTimeout(function() {
          button.textContent = 'Copy';
        }, 2000);
      });
    });

    pre.parentElement.appendChild(button);
  });
});
