const menuBtn = document.getElementById('menu-button');
const menuList = document.getElementById('menu-list');
const menuClose = document.getElementById('menu-close');

const itemPort = document.getElementById('item-portfolio');
const itemAbout = document.getElementById('item-about');
const itemContact = document.getElementById('item-contact');

menuBtn.addEventListener('click', () => {
  menuList.style.display = 'flex';
});

menuClose.addEventListener('click', () => {
  menuList.style.display = 'none';
});

itemPort.addEventListener('click', () => {
  menuList.style.display = 'none';
});

itemAbout.addEventListener('click', () => {
  menuList.style.display = 'none';
});

itemContact.addEventListener('click', () => {
  menuList.style.display = 'none';
});