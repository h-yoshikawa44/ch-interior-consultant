import '../css/style.css';
import 'wicg-inert';

const topHeader = document.getElementById('top-header');
const heroHeader = document.getElementById('hero-header');
const footer = document.getElementById('footer');

const openBtn = document.getElementById('open-menu-btn');
openBtn.addEventListener('click', () => {
  document.getElementById('menu').classList.add('menu__open');
  topHeader.setAttribute('inert', true);
  heroHeader.setAttribute('inert', true);
  footer.setAttribute('inert', true);
});

const closeBtn = document.getElementById('close-menu-btn');
closeBtn.addEventListener('click', () => {
  document.getElementById('menu').classList.remove('menu__open');
  topHeader.removeAttribute('inert', false);
  heroHeader.removeAttribute('inert', false);
  footer.removeAttribute('inert', false);
});
