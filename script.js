const root = document.documentElement;
const loader = document.getElementById('loader');
const loaderCount = document.getElementById('loaderCount');
const loaderBar = document.getElementById('loaderBar');
const themeToggle = document.getElementById('themeToggle');
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
const roleText = document.getElementById('roleText');
const roles = ['HR Generalist', 'People Operations Partner', 'Talent Acquisition Specialist'];

const savedTheme = localStorage.getItem('ha-theme-v3') || 'dark';
setTheme(savedTheme);

function setTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem('ha-theme-v3', theme);
  const light = theme === 'light';
  themeToggle.querySelector('span').textContent = light ? '☾' : '☀';
  themeToggle.querySelector('b').textContent = light ? 'DARK' : 'LIGHT';
  themeToggle.setAttribute('aria-label', `Switch to ${light ? 'dark' : 'light'} mode`);
}

themeToggle.addEventListener('click', () => setTheme(root.dataset.theme === 'light' ? 'dark' : 'light'));
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

const loadingStarted = performance.now();
function updateLoader(now) {
  const progress = Math.min(100, Math.round(((now - loadingStarted) / 2580) * 100));
  loaderCount.textContent = String(progress).padStart(2, '0');
  loaderBar.style.width = `${progress}%`;
  if (progress < 100) requestAnimationFrame(updateLoader);
  else setTimeout(() => loader.classList.add('hide'), 180);
}
requestAnimationFrame(updateLoader);

let roleIndex = 0;
setInterval(() => {
  roleIndex = (roleIndex + 1) % roles.length;
  roleText.animate([{opacity: 0, transform: 'translateY(7px)'}, {opacity: 1, transform: 'none'}], {duration: 350});
  roleText.textContent = roles[roleIndex];
}, 2600);

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, {threshold: .12});
document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));

const countObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting || entry.target.dataset.animated) return;
    entry.target.dataset.animated = 'true';
    const target = Number(entry.target.dataset.count);
    const suffix = entry.target.dataset.suffix || '';
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { entry.target.textContent = target + suffix; return; }
    const start = performance.now();
    function count(now) {
      const progress = Math.min((now - start) / 3000, 1);
      entry.target.textContent = Math.round(target * (1 - Math.pow(1 - progress, 3))) + suffix;
      if (progress < 1) requestAnimationFrame(count);
    }
    requestAnimationFrame(count);
  });
}, {threshold: .55});
document.querySelectorAll('[data-count]').forEach(number => countObserver.observe(number));
document.getElementById('year').textContent = new Date().getFullYear();
