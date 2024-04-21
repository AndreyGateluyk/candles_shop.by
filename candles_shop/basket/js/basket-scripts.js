import { CartItem, cart, saveCart, addToCart } from './basket.js';

const cartContainer = document.querySelector('.basket-container');

// Загрузка корзины из localStorage
function loadCart() {
  cart.items = JSON.parse(localStorage.getItem('shoppingCart')) || [];
  cartContainer.innerHTML = "";
  

  cart.items.forEach((card, index) => {
    const { id, name, price, quantity, aroma, image} = card
    const cardItem =
    `
    <div class="item-container" data-index="${index}">
    <div class="item">
    <div class="item-description">
    <div class="item-img">
          <img src="${image}" alt="товар">
        </div>
        <div class="item-text">
        <div class="item-name">${name}</div>
        <div class="item-aroma">Аромат: ${aroma}</div>
        </div>
        </div>
        <div class="item-quantity">
        <button class="quantityBtn minus">-</button>
        <div class="item-quantity__text">${quantity}</div>
        <button class="quantityBtn plus">+</button>
      </div>
      <div class="item-price">
        <div class="item-price__number">${price * quantity}</div>BYN
      </div>
    </div>
    <button class="delete">
      Удалить
    </button>
  </div>
  `
  cartContainer.insertAdjacentHTML('beforeend', cardItem);
});
getTotalPrice();
}

// Инициализация корзины при загрузке страницы
loadCart();

// Подсчет общей стоимости корзины товаров
function getTotalPrice() {
  const pricesArr = document.querySelectorAll('.item-price__number');
  let priceTotal = 0;
  pricesArr.forEach(elem => {
    priceTotal += Number(elem.innerText)
  });
  document.querySelector('.order_price__number').innerText = priceTotal;
}

cartContainer.addEventListener('click', (e) => {
  // удаление товаров из корзины
  if(e.target.classList.contains('delete')) {
    let deleteBtns = document.querySelectorAll('.delete');
    deleteBtns.forEach(elem => {
      elem.addEventListener('click', (e) => {
        const index = Number(e.target.closest('.item-container').dataset.index);
        cart.items.forEach((item, i) => {
          if(i === index) {
            cart.items.splice(i, 1);
            saveCart();
            loadCart();
            console.log(deleteBtns);
          }
        })
        console.log(cart.items);
      })
    })
  };
  // Изменение количества товаров в корзине
  if(e.target.classList.contains('minus')) {
    const index = Number(e.target.closest('.item-container').dataset.index);
    if(cart.items[index].quantity > 0) {
      cart.items[index].quantity -= 1;
      saveCart();
      loadCart();
    }
  };
  if(e.target.classList.contains('plus')) {
    const index = Number(e.target.closest('.item-container').dataset.index);
    cart.items[index].quantity += 1;
    saveCart();
    loadCart();
  }
});

// Оформление заказа
const order = document.querySelector('.order-btn');
order.addEventListener('click', checkoutOrder);
function checkoutOrder() {
  const container = document.querySelector('.container');
  const modal = 
  `
  <div class="modal-container">
    <div class="modal">
      <div class="close">
        <button>
          <img src="../basket/close.svg" alt="закрыть">
        </button>
      </div>
      <form action="">
        <label for="POST-tel">Оставьте свой номер телефона и мы свами свяжемся для уточнения условий заказа:</label>
        <input id="POST-tel" type="text" name="name" placeholder="+375 (_ _) _ _ _-_ _-_ _">
        <input type="submit" value="Отправить" id="submit">
      </form>
    </div>
  </div>
  `
  container.insertAdjacentHTML('beforeend', modal);
  const close = document.querySelector('.close');
  close.addEventListener('click', (e) => {
    const item = document.querySelector('.modal-container')
    container.removeChild(item);
  })
}




