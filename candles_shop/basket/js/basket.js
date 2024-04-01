
class CartItem {
  constructor(id, name, price, quantity, aroma) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.aroma = aroma;
  }
}

// Корзина
var cart = {
  items: [],

  // Добавление товара в корзину
  addItem: function(item) {
    this.items.push(item);
  },

  // Удаление товара из корзины
  removeItem: function(id) {
    this.items = this.items.filter(item => item.id !== id);
  },

  // Изменение количества товара
  updateQuantity: function(id, quantity) {
    var item = this.items.find(item => item.id === id);
    if (item) {
      item.quantity = quantity;
    }
  },

  // Подсчет общей стоимости товаров в корзине
  getTotalPrice: function() {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
};

// Сохранение корзины в localStorage
function saveCart() {
  localStorage.setItem('shoppingCart', JSON.stringify(cart.items));
}

// Загрузка корзины из localStorage
function loadCart() {
  cart.items = JSON.parse(localStorage.getItem('shoppingCart')) || [];
  console.log(cart.items);
}

// Функция для добавления товара в корзину
function addToCart(id, name, price, quantity, aroma) {
  var item = cart.items.find(item => item.id === id && item.aroma === aroma);
  if (item) {
    item.quantity += Number(quantity);
  } else {
    cart.addItem(new CartItem(id, name, price, quantity, aroma));
  }
  saveCart();
}

// Инициализация корзины при загрузке страницы
window.onload = function() {
  loadCart();
};

// Добавление слушателя событий к кнопке
window.addEventListener('click', function(event) {
  if(event.target.classList.contains('add-btn')) {
    const addItem = event.target.closest('.modal');

    const addId = addItem.dataset.id;
    const addName = addItem.querySelector('.modal__description-title').innerText.trim();
    const addPrice = Number(addItem.dataset.price);
    const addQuantity = Number(addItem.querySelector('#quantity').innerText);
    const addAroma = addItem.querySelector('.modal__btn_active').children[1].innerText;

    addToCart(addId, addName, addPrice, addQuantity, addAroma)
    console.log(addQuantity);
    loadCart()
  }
})

document.addEventListener('DOMContentLoaded', function() {
  var addButton = document.getElementById('addButton');
  addButton.addEventListener('click', function() {
    addToCart(1, 'Новый товар', 100);
  });
});