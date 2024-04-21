const nav = document.querySelector('.navigation')
const navBarContainer = document.querySelector('.nav-bar-container');
const burgerBtn = document.querySelector('.nav__burger-btn');
const menuBtn = document.querySelector('.menu-btn');

function showNavBarContainer () {
  nav.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function hiddenNavBarContainer() {
  nav.classList.remove('open');
  document.body.style.overflow = 'visible';
}

burgerBtn.addEventListener('click', () => {
  if(nav.className.includes('open')) {
    hiddenNavBarContainer();
  }
  else {
    showNavBarContainer();
  }
})

navBarContainer.addEventListener('click', () => {
  hiddenNavBarContainer();
})

window.addEventListener('resize', () => {
  if(window.innerWidth >= 769) {
    hiddenNavBarContainer();
  }
})