(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const selector = [
    '.nav-links a',
    '.project-card',
    '.inline-button',
    '.ghost-button',
    '.contact-focus-line'
  ].join(', ');

  const hosts = document.querySelectorAll(selector);

  hosts.forEach((el) => {
    el.classList.add('wave-host');

    el.addEventListener('pointerdown', (event) => {
      if (event.button !== 0) return;

      const rect = el.getBoundingClientRect();
      const wave = document.createElement('span');
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      wave.className = 'click-wave';
      wave.style.left = `${x}px`;
      wave.style.top = `${y}px`;

      el.appendChild(wave);

      wave.addEventListener('animationend', () => {
        wave.remove();
      }, { once: true });
    });
  });
})();
