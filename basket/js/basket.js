class CartItem {
  constructor(id, name, price, quantity, aroma, image) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.aroma = aroma;
    this.image = image
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

// Инициализация корзины
cart.items = JSON.parse(localStorage.getItem('shoppingCart')) || [];

// Сохранение корзины в localStorage
function saveCart() {
  localStorage.setItem('shoppingCart', JSON.stringify(cart.items));
}

// Функция для добавления товара в корзину
function addToCart(id, name, price, quantity, aroma, image) {
  var item = cart.items.find(item => item.id === id && item.aroma === aroma);
  console.log(cart.items)
  if (item) {
    item.quantity += Number(quantity);
  } else {
    cart.addItem(new CartItem(id, name, price, quantity, aroma, image));
  }
  saveCart();
}

// Добавление слушателя событий к кнопке добавления товара
window.addEventListener('click', function(event) {
  if(event.target.classList.contains('add-btn')) {
    const addItem = event.target.closest('.modal');

    const addId = addItem.dataset.id;
    const addName = addItem.querySelector('.modal__description-title').innerText.trim();
    const addPrice = Number(addItem.dataset.price);
    const addQuantity = Number(addItem.querySelector('#quantity').innerText);
    const addAroma = addItem.querySelector('.modal__btn_active').children[1].innerText;
    const addImage = addItem.querySelector('.modal__img').children[0].src;

    addToCart(addId, addName, addPrice, addQuantity, addAroma, addImage)
    //loadCart();
  }
});

export { CartItem, cart, saveCart, addToCart };