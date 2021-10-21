import '../css/style.css';
import 'wicg-inert';

const heroHeader = document.getElementById('hero-header');

const openBtn = document.getElementById('open-menu-btn');
openBtn.addEventListener('click', () => {
  document.getElementById('menu').classList.add('menu__open');
  heroHeader.inert = true;
});

const closeBtn = document.getElementById('close-menu-btn');
closeBtn.addEventListener('click', () => {
  document.getElementById('menu').classList.remove('menu__open');
  heroHeader.inert = false;
});
