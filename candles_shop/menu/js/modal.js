const menuGrid = document.querySelector('.menu__grid');
const main = document.querySelector('main');

function renderModal(card) {
  const modalContainer = `
    <div class="modal-container">
      <div class="modal">
        <div class="modal__img">
          <img src="../menu/image/coffee/irish-coffee.jpg" alt="">
        </div>
        <div class="modal__info">
          <div class="modal__description">
            <div class="modal__description-title">
            </div>
            <div class="modal__description-text">
            </div>
          </div>
          <div class="modal__info-item">
            <div>Аромат</div>
            <div class="btn-container btn-container-aroma">
              <button id="btnS" class="modal-btn modal__btn_active" type="button"><span class="circle"></span><span class="aroma">Цитрус</span></button>
              <button id="btnM" class="modal-btn" type="button"><span class="circle"></span><span class="aroma">Хвоя</span></button>
              <button id="btnL" class="modal-btn" type="button"><span class="circle"></span><span class="aroma">Пряности</span></button>
            </div>
          </div>
          <div class="modal__info-item">
            <div>Количество</div>
            <div class="btn-container btn-container-quantity">
              <button id="btnMinus" class="modal-btn" type="button"><span class="circle">-</span></button>
              <div id="quantity">1</div>
              <button id="btnPlus" class="modal-btn" type="button"><span class="circle">+</span></button>
            </div>
          </div>
          <div class="modal__info-total">
            <div>Стоимость</div>
            <div class="modal__price"></div>
          </div>
          <div class="modal__info-sale">
            <img src="image/modal/info-empty.png" alt="">
            <div>
              Внешний вид может иметь незначительные отличия от фото товара на каталоге
            </div>
          </div>
          <button class="add-btn" type="button">Добавить</button>
          <button class="close-btn" type="button">Выйти</button>
        </div>
      </div>
    </div>
  `
  main.insertAdjacentHTML('beforeend', modalContainer);
}

menuGrid.addEventListener('click', (e) => {
  renderModal(e.target.closest('.menu__card'));
  const closeBtn = document.querySelector('.close-btn');
  closeBtn.addEventListener('click', (e) => {
    e.target.closest('.modal-container').remove();
  });
});


