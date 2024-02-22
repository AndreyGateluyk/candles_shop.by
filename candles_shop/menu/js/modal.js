const menuGrid = document.querySelector('.menu__grid');
let modalImg = document.querySelector('.modal__img')
let modalTitle = document.querySelector('.modal__description-title');
let modalText = document.querySelector('.modal__description-text');
let modalPrice = document.querySelector('.modal__price')
const modalContainer = document.querySelector('.modal-container');
const closeBtn = document.querySelector('.close-btn');
const btnS = document.getElementById('btnS');
const btnM = document.getElementById('btnM');
const btnL = document.getElementById('btnL');
const btnSugar = document.getElementById('btnSugar');
const btnCinnamon = document.getElementById('btnCinnamon');
const btnSyrup = document.getElementById('btnSyrup');



menuGrid.addEventListener('click', (e) => {
  const element = e.target;
  const elementClick = element.closest('.menu__card');
  if(elementClick.classList.contains('dessert')) {
    btnS.children[1].innerHTML = '50 g';
    btnM.children[1].innerHTML = '100 g';
    btnL.children[1].innerHTML = '200 g';
    btnSugar.children[1].innerHTML = 'Berries';
    btnCinnamon.children[1].innerHTML = 'Nuts';
    btnSyrup.children[1].innerHTML = 'Jam';
  }
  if(elementClick.classList.contains('coffee')) {
    btnS.children[1].innerHTML = '200 ml';
    btnM.children[1].innerHTML = '300 ml';
    btnL.children[1].innerHTML = '400 ml';
    btnSugar.children[1].innerHTML = 'Sugar';
    btnCinnamon.children[1].innerHTML = 'Cinnamon';
    btnSyrup.children[1].innerHTML = 'Syrup';
  }
  if(elementClick.classList.contains('tea')) {
    btnS.children[1].innerHTML = '200 ml';
    btnM.children[1].innerHTML = '300 ml';
    btnL.children[1].innerHTML = '400 ml';
    btnSugar.children[1].innerHTML = 'Sugar';
    btnCinnamon.children[1].innerHTML = 'Lemon';
    btnSyrup.children[1].innerHTML = 'Syrup';
  }
  const childrenOne = elementClick.children;
  const childImg = childrenOne[0].children[0].src;
  const childTitle = childrenOne[1].children[0].outerText;
  const childText = childrenOne[1].children[1].outerText;
  const childPrice = childrenOne[1].children[2].outerText;
  modalImg.children[0].src = childImg;
  modalTitle.innerHTML = childTitle;
  modalText.innerHTML = childText;
  modalPrice.innerHTML = childPrice;
  modalContainer.classList.add('open');
  document.body.style.overflow = 'hidden';
});

window.addEventListener('click', (e) => {
  if(e.target.classList.contains('open')) {
    modalContainer.classList.remove('open');
    document.body.style.overflow = 'visible';
    deleteActiveClass();
    btnS.classList.add('modal__btn_active');
    btnCinnamon.classList.remove('modal__btn_active');
    btnSugar.classList.remove('modal__btn_active');
    btnSyrup.classList.remove('modal__btn_active');
  }
})

closeBtn.addEventListener('click', () => {
  modalContainer.classList.remove('open');
  document.body.style.overflow = 'visible';
  deleteActiveClass();
  btnS.classList.add('modal__btn_active');
  btnCinnamon.classList.remove('modal__btn_active');
  btnSugar.classList.remove('modal__btn_active');
  btnSyrup.classList.remove('modal__btn_active');
});

btnSugar.addEventListener('click', () => {
  if(btnSugar.classList.contains('modal__btn_active')) {
    btnSugar.classList.remove('modal__btn_active');
    const number = +modalPrice.innerHTML.slice(-4) - 0.5;
    modalPrice.innerHTML = `$${number.toFixed(2)}`;
  }
  else {
    btnSugar.classList.add('modal__btn_active');
    const number = +modalPrice.innerHTML.slice(-4) + 0.5;
    modalPrice.innerHTML = `$${number.toFixed(2)}`;
  }
});

btnCinnamon.addEventListener('click', () => {
  if(btnCinnamon.classList.contains('modal__btn_active')) {
    btnCinnamon.classList.remove('modal__btn_active');
    const number = +modalPrice.innerHTML.slice(-4) - 0.5;
    modalPrice.innerHTML = `$${number.toFixed(2)}`;
  }
  else {
    btnCinnamon.classList.add('modal__btn_active');
    const number = +modalPrice.innerHTML.slice(-4) + 0.5;
    modalPrice.innerHTML = `$${number.toFixed(2)}`;
  }
});

btnSyrup.addEventListener('click', () => {
  if(btnSyrup.classList.contains('modal__btn_active')) {
    btnSyrup.classList.remove('modal__btn_active');
    const number = +modalPrice.innerHTML.slice(-4) - 0.5;
    modalPrice.innerHTML = `$${number.toFixed(2)}`;
  }
  else {
    btnSyrup.classList.add('modal__btn_active');
    const number = +modalPrice.innerHTML.slice(-4) + 0.5;
    modalPrice.innerHTML = `$${number.toFixed(2)}`;
  }
});

const sizeArr = document.querySelector('.btn-container-size').children
function deleteActiveClass() {
  let count = -.5;
  for(let i = 0; i <sizeArr.length; i += 1) {
    count += .5;
    if(sizeArr[i].classList.contains('modal__btn_active')) {
      const number = +modalPrice.innerHTML.slice(-4) - count;
      modalPrice.innerHTML = `$${number.toFixed(2)}`;
    }
    sizeArr[i].classList.remove('modal__btn_active');
  }
}
btnS.addEventListener('click', () => {
  deleteActiveClass();
  btnS.classList.add('modal__btn_active');
});
btnM.addEventListener('click', () => {
  deleteActiveClass();
  btnM.classList.add('modal__btn_active');
  const number = +modalPrice.innerHTML.slice(-4) + 0.5;
  modalPrice.innerHTML = `$${number.toFixed(2)}`;
})
btnL.addEventListener('click', () => {
  deleteActiveClass();
  btnL.classList.add('modal__btn_active');
  const number = +modalPrice.innerHTML.slice(-4) + 1;
  modalPrice.innerHTML = `$${number.toFixed(2)}`;
})


