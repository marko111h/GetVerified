@'
function toggleMenu() {
  const nav = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');
  nav.classList.toggle('active');
  hamburger.classList.toggle('open');
}

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-links').classList.remove('active');
    document.querySelector('.hamburger').classList.remove('open');
  });
});

document.addEventListener('click', (e) => {
  const nav = document.querySelector('.nav-links');
  const hamburger = document.querySelector('.hamburger');
  if (!nav || !hamburger) return;
  if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
    nav.classList.remove('active');
    hamburger.classList.remove('open');
  }
});

(function () {
  const links = document.querySelectorAll('.nav-links a');
  const current = window.location.pathname;
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const normalize = (p) => p.replace(/\/+$/, '') || '/';
    const linkPath = normalize(new URL(href, window.location.origin).pathname);
    const curPath  = normalize(current);
    if (linkPath === curPath) {
      link.classList.add('active');
    }
  });
})();
'@ | Set-Content -Path script.js -Encoding UTF8