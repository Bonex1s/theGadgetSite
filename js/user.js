import cartTemplate from "./cart-template.js";
import { activeButton, renderTemplate } from "./utils.js";
import footerTemplate from "./footer-template.js";
import headerTemplate from "./header-template.js";

const headers = document.querySelectorAll(".personal-data-header");

headers.forEach((header) => {
  header.addEventListener("click", function () {
    const content = this.nextElementSibling;
    const arrow = this.querySelector(".arrow");

    content.classList.toggle("open");
    arrow.classList.toggle("rotate");
  });
});

renderTemplate("footer", footerTemplate);
renderTemplate("header", headerTemplate);
// HEADER ========================================================================
document.addEventListener("DOMContentLoaded", function () {
  //  PROMOTION-BLOCK

  document.getElementById("close-promotion").addEventListener("click", () => {
    const promotionContainer = document.querySelector(".promotions");

    promotionContainer.style.display = "none";
  });

  const searchBtn = document.getElementById("search-icon");
  const searchContainer = document.querySelector(".search-container");

  searchBtn.addEventListener("click", function (event) {
    event.stopPropagation();

    if (
      searchContainer.style.display === "none" ||
      !searchContainer.style.display
    ) {
      searchContainer.style.display = "flex";
    } else {
      searchContainer.style.display = "none";
    }
  });
  // ВІДКЛЮЧИТИ DISPLAY КЛІКОМ
  document.addEventListener("click", function (event) {
    if (
      !searchContainer.contains(event.target) &&
      !searchBtn.contains(event.target)
    ) {
      searchContainer.style.display = "none";
    }
  });

  const formSection = document.querySelector(".login-container");
  const formOpenBtn = document.querySelector("#login");

  formOpenBtn.addEventListener("click", function (event) {
    event.stopPropagation();

    if (formSection.style.display === "none" || !formSection.style.display) {
      formSection.style.display = "flex";
    } else {
      formSection.style.display = "none";
    }
  });

  // Закрытие формы при клике вне её
  document.addEventListener("click", function (event) {
    // Проверяем, был ли клик вне формы и кнопки
    if (
      !formSection.contains(event.target) &&
      !formOpenBtn.contains(event.target)
    ) {
      formSection.style.display = "none"; // Скрываем форму
    }
  });

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header-panel");
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  const menuCase = document.getElementById("item-preview-menu");
  const buttonMenuCase = document.getElementById("menu-text-case");
  const menuGlass = document.getElementById("item-preview-menu-2");
  const buttonMenuGlass = document.getElementById("menu-text-glass");
  const buttonMenuPhone = document.getElementById("menu-text-phone");
  const menuPhone = document.getElementById("item-preview-menu-3");
  const menuСharger = document.getElementById("item-preview-menu-4");
  const buttonСharger = document.getElementById("menu-text-charger");
  const buttonOther = document.getElementById("menu-text-other");
  const buttonGadget = document.getElementById("menu-text-gadget");
  const menuGadget = document.getElementById("item-preview-menu-5");
  const menuOther = document.getElementById("item-preview-menu-6");

  function previewMenu(menu, button) {
    button.addEventListener("mouseover", () => {
      menu.style.display = "flex";
    });
    button.addEventListener("mouseout", () => {
      menu.style.display = "none";
    });

    menu.addEventListener("mouseover", () => {
      menu.style.display = "flex";
    });

    menu.addEventListener("mouseout", () => {
      menu.style.display = "none";
    });
  }
  previewMenu(menuCase, buttonMenuCase);
  previewMenu(menuGlass, buttonMenuGlass);
  previewMenu(menuPhone, buttonMenuPhone);
  previewMenu(menuСharger, buttonСharger);
  previewMenu(menuOther, buttonOther);
  previewMenu(menuGadget, buttonGadget);
});
// RENDER ==========================================================================

// ADD LOCAL CART ==========================================================================

function openCart() {
  document.getElementById("cartPanel").classList.add("active");
  document.body.classList.add("cart-open");
}

function closeCart() {
  document.getElementById("cartPanel").classList.remove("active");
  document.body.classList.remove("cart-open");
}

window.openCart = openCart;
window.closeCart = closeCart;

function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(event) {
  event.preventDefault();
  console.log("addToCart called");

  const productName = document.querySelector("#product-header").textContent;
  const productPrice = parseInt(
    document.querySelector("#price").textContent.replace(/\D/g, "")
  );
  const productImg = document.querySelector("#main-img").src;

  const cart = getCart();
  const existingProduct = cart.find((item) => item.name === productName);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({
      name: productName,
      price: productPrice,
      img: productImg,
      quantity: 1,
    });
  }

  saveCart(cart);
  renderCart();
}

function renderCart() {
  const cart = getCart();
  const cartItemsContainer = document.querySelector("#cart-product");
  const totalPriceElement = document.querySelector("#price-cart-product");
  cartItemsContainer.innerHTML = "";
  let totalPrice = 0;

  cart.forEach((item, index) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-product");
    cartItem.innerHTML = `
      <div class="img-cart-product">
        <img src="${item.img}" alt="Фото товара" />
      </div>
      <div class="info-cart-product">
        <p class="product-cart-name">${item.name}</p>
        <p class="quantity-cart-product">${item.quantity}x <b>${item.price} грн</b></p>
        <span class="cancel-product js-cancel-cart-product" data-index="${index}">Відмінити</span>
      </div>
    `;
    console.log(cart);
    cartItemsContainer.appendChild(cartItem);
    totalPrice += item.price * item.quantity;
  });

  totalPriceElement.innerHTML = `Усього: <strong>${totalPrice} грн</strong>`;

  document
    .querySelectorAll(".cancel-product.js-cancel-cart-product")
    .forEach((button) => {
      button.addEventListener("click", removeFromCart);
    });
}

function removeFromCart(event) {
  const cancelButton = event.target;
  if (!cancelButton.classList.contains("cancel-product")) return;

  const productName = cancelButton
    .closest(".cart-product")
    .querySelector(".product-cart-name").textContent;

  let cart = getCart();
  cart = cart
    .map((item) => {
      if (item.name === productName) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          return null;
        }
      }
      return item;
    })
    .filter((item) => item !== null);

  saveCart(cart);
  renderCart();
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".button-57.js-add-to-cart").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      console.log("Button clicked");
      addToCart(event);
    });
  });

  renderCart();
});
