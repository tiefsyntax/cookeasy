const toggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

toggle.addEventListener('click', () => {
  navList.classList.toggle('active');

  // 切換 icon
  toggle.textContent = navList.classList.contains('active') ? '✕' : '☰';
});