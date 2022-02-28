const menuBtn = document.getElementById('menu-button');
const menuList = document.getElementById('menu-list');
const menuClose = document.getElementById('menu-close');

menuBtn.addEventListener('click', () => {
  menuList.style.display = 'flex';
});

menuClose.addEventListener('click', () => {
  menuList.style.display = 'none';
});