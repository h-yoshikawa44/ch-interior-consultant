import '../css/style.css';
import 'wicg-inert';

const contents = document.getElementById('contents');
const menu = document.getElementById('menu');

/**
 * メニューを開く
 */
const openMenu = () => {
  menu.classList.add('menu--open');
  contents.setAttribute('inert', true);
  document.body.classList.add('overflow-hidden');
};

/**
 * メニューを閉じる
 */
const closeMenu = () => {
  menu.classList.remove('menu--open');
  contents.removeAttribute('inert', false);
  document.body.classList.remove('overflow-hidden');
};

window.addEventListener('DOMContentLoaded', () => {
  // メニュー開閉
  const menuOpenBtn = document.getElementById('open-menu-btn');
  menuOpenBtn.addEventListener('click', openMenu);

  const menuCloseBtn = document.getElementById('close-menu-btn');
  menuCloseBtn.addEventListener('click', closeMenu);
});
