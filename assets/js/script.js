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

  document.addEventListener('DOMContentLoaded', function () {
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