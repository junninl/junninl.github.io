(async function () {
  // load nav.html and insert at top of <body>
  try {
    const res = await fetch('nav.html', { cache: 'no-store' });
    if (res.ok) {
      const navHtml = await res.text();
      document.body.insertAdjacentHTML('afterbegin', navHtml);
    } else {
      console.warn('Failed to load nav.html:', res.status);
    }
  } catch (err) {
    console.warn('Error loading nav.html:', err);
  }

  // keep CSS var --nav-height in sync with actual nav height
  function updateNavHeight() {
    const nav = document.querySelector('.top-nav');
    if (!nav) return;
    // Measure inner content height so var can both grow and shrink
    const inner = nav.querySelector('.nav-inner') || nav;
    const h = Math.ceil(inner.getBoundingClientRect().height);
    document.documentElement.style.setProperty('--nav-height', `${h}px`);
  }

  // update on key lifecycle events
  window.addEventListener('load', updateNavHeight);
  window.addEventListener('resize', updateNavHeight);

  // update once webfonts are ready, since they can change layout
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(updateNavHeight).catch(() => {});
  }

  // observe nav element for size changes (e.g., wrapping on small screens)
  const tryObserveNav = () => {
    const nav = document.querySelector('.top-nav');
    if (!nav || !('ResizeObserver' in window)) return;
    const inner = nav.querySelector('.nav-inner') || nav;
    const ro = new ResizeObserver(updateNavHeight);
    ro.observe(inner);
  };

  document.addEventListener('DOMContentLoaded', function () {
    // initial measurement
    updateNavHeight();
    tryObserveNav();

    // mark active link in nav
    const links = document.querySelectorAll('.top-nav a');
    if (!links.length) return;
    const path = window.location.pathname.split('/').pop() || 'index.html';
    links.forEach(a => {
      const href = a.getAttribute('href');
      if (href === path || (href === 'index.html' && path === '')) {
        a.classList.add('active');
      } else {
        a.classList.remove('active');
      }
    });
  });
})();
