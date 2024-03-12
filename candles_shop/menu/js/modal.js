const menuGrid = document.querySelector('.menu__grid');
const main = document.querySelector('main');

function renderModal(card) {
  const modalContainer = `
    <div class="modal-container">
      <div class="modal">
        <div class="modal__img">
          <img src="${card.children[0].children[0].src}" alt="">
        </div>
        <div class="modal__info">
          <div class="modal__description">
            <div class="modal__description-title">
              ${card.children[1].children[0].textContent}
            </div>
            <div class="modal__description-text">
            ${card.children[1].children[1].textContent}
            </div>
          </div>
          <div class="modal__info-item">
            <div>Аромат</div>
            <div class="btn-container btn-container-aroma">
              <button class="modal-btn modal-btn-aroma modal__btn_active" type="button"><span class="circle">✓</span><span class="aroma">Цитрус</span></button>
              <button class="modal-btn modal-btn-aroma" type="button"><span class="circle"></span><span class="aroma">Хвоя</span></button>
              <button class="modal-btn modal-btn-aroma" type="button"><span class="circle"></span><span class="aroma">Пряности</span></button>
            </div>
          </div>
          <div class="modal__info-item">
            <div>Количество</div>
            <div class="btn-container btn-container-quantity">
              <button id="btnMinus" class="modal-btn quantity-btn minus" type="button"><span class="circle">-</span></button>
              <div id="quantity">1</div>
              <button id="btnPlus" class="modal-btn quantity-btn plus" type="button"><span class="circle">+</span></button>
            </div>
          </div>
          <div class="modal__info-total">
            <div>Стоимость</div>
            <div class="modal__price">
              <span>${card.children[1].children[2].children[0].textContent}</span> BYN
            </div>
          </div>
          <div class="modal__info-sale">
            <img src="image/modal/info-empty.png" alt="">
            <div>
              Внешний вид может иметь незначительные отличия от фото товара на каталоге
            </div>
          </div>
          <button class="add-btn" type="button">В корзину</button>
          <button class="close-btn" type="button">Выйти</button>
        </div>
      </div>
    </div>
  `
  main.insertAdjacentHTML('beforeend', modalContainer);
}

menuGrid.addEventListener('click', (e) => {
  const currentCard = e.target.closest('.menu__card');
  renderModal(currentCard);
  const closeBtn = document.querySelector('.close-btn');
  closeBtn.addEventListener('click', (e) => {
    e.target.closest('.modal-container').remove();
  });

  const quantityBtns = document.querySelectorAll('.quantity-btn');
  const priceStart = Number(document.querySelector('.modal__price').children[0].textContent);
  quantityBtns.forEach((elem) => {
    elem.addEventListener('click', (e) => {
      const quantity = document.querySelector('#quantity');
      const price = document.querySelector('.modal__price').children[0];
      if(e.target.closest('.quantity-btn').id === 'btnPlus') {
        quantity.textContent = Number(quantity.textContent) + 1;
        price.textContent = Number(price.textContent) + priceStart;
      }
      if(e.target.closest('.quantity-btn').id === 'btnMinus') {
        if(Number(quantity.textContent) === 1) {
          return;
        }
        quantity.textContent = Number(quantity.textContent) - 1;
        price.textContent = Number(price.textContent) - priceStart;
      }
    });
  });

  const aromaBtns = document.querySelectorAll('.modal-btn-aroma');
  aromaBtns.forEach((elem) => {
    elem.addEventListener('click', (e) => {
      const targetBtn = e.target.closest('.modal-btn-aroma');
      aromaBtns.forEach((elem) => {
        elem.classList.remove('modal__btn_active');
        elem.children[0].textContent = '';
      });
      targetBtn.classList.add('modal__btn_active');
      targetBtn.children[0].textContent = '✓';
    });
  });

  const currentId = currentCard.dataset.id;
  const modal = document.querySelector('.modal-container')
  const currentImg = document.querySelector('.modal__img').children[0].src;
  const currentAroma = document.querySelector('.modal__btn_active').textContent;
  const currentCount = document.querySelector('#quantity').textContent;

  console.log(currentImg)
  const addBtn = document.querySelector('.add-btn');
  addBtn.addEventListener('click', (e) => {
    localStorage.setItem(
        `${currentId}`,
        JSON.stringify({imgSrc: `${currentImg}`, aroma: `${currentAroma}`, count: `${currentCount}`, price: `${priceStart}`})
      );
      modal.remove()
  })
});
