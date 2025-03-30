import '../css/reset.css';
import '../css/style.css';
import 'wicg-inert';

const contents = document.getElementById('contents');
const menu = document.getElementById('menu');

/**
 * メニューを開く
 */
const openMenu = () => {
  menu.classList.add('js-menu--open');
  contents.setAttribute('inert', true);
  document.body.classList.add('js-overflow-hidden');
};

/**
 * メニューを閉じる
 */
const closeMenu = () => {
  menu.classList.remove('js-menu--open');
  contents.removeAttribute('inert', false);
  document.body.classList.remove('js-overflow-hidden');
};

window.addEventListener('DOMContentLoaded', () => {
  // メニュー開閉
  const menuOpenBtn = document.getElementById('open-menu-btn');
  menuOpenBtn.addEventListener('click', openMenu);

  const menuCloseBtn = document.getElementById('close-menu-btn');
  menuCloseBtn.addEventListener('click', closeMenu);
});

window.addEventListener('load', () => {
  // Chromeでページ初期読み込み時のtrasition抑制クラスの除去
  document
    .getElementsByClassName('js-preload')[0]
    .classList.remove('js-preload');
});
