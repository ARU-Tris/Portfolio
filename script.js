(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const selector = [
    '.nav-links a',
    '.project-card',
    '.inline-button',
    '.ghost-button',
    '.contact-focus-line',
    'button'
  ].join(', ');

  const targets = document.querySelectorAll(selector);

  targets.forEach((el) => {
    el.classList.add('has-ripple');
    el.dataset.rippleClipped = 'true';

    el.addEventListener('pointerdown', (event) => {
      if (event.button !== 0) return;

      const rect = el.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size = Math.max(rect.width, rect.height) * 2.15;
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      ripple.className = 'ripple-wave';
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      el.appendChild(ripple);

      ripple.addEventListener('animationend', () => {
        ripple.remove();
      }, { once: true });
    });
  });
})();
