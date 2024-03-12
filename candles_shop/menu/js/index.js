import { products } from "../data/products.js";

const menuGrid = document.querySelector(".menu__grid");

function renderMenuCards() {
  products.forEach(card => {
    const { id, image, name, text, price} = card
    const cardItem =
      `
        <div class="menu__card" data-id="${id}">
          <div class="menu__card-img">
            <img src="${image}" alt="">
          </div>
          <div class="menu__card-description">
            <div class="menu__card-name">
              ${name}
            </div>
            <div class="menu__card-text">
              ${text}
            </div>
            <div class="menu__card-price" value=${price}>
              <span>${price}</span> BYN
            </div>
          </div>
        </div>
      `
    menuGrid.insertAdjacentHTML('beforeend', cardItem)
  });
}

renderMenuCards()

