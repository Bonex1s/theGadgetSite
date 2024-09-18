import cartTemplate from "./cart-template.js";
import footerTemplate from "./footer-template.js";
import { renderTemplate } from "./utils.js";

const minRange = document.getElementById("minRange");
const maxRange = document.getElementById("maxRange");
const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");
const sliderRange = document.querySelector(".slider-range");

function updateSlider() {
  // Убедимся, что минимальное значение меньше максимального
  if (parseInt(minRange.value) > parseInt(maxRange.value)) {
    minRange.value = maxRange.value;
  }

  // Рассчитываем проценты для обеих ручек ползунков
  const minValue =
    ((minRange.value - minRange.min) / (minRange.max - minRange.min)) * 100;
  const maxValue =
    ((maxRange.value - minRange.min) / (maxRange.max - minRange.min)) * 100;

  // Устанавливаем положение и ширину области между ползунками
  sliderRange.style.left = `${minValue}%`;
  sliderRange.style.width = `${maxValue - minValue}%`;

  // Обновляем отображаемые значения
  minPrice.textContent = minRange.value;
  maxPrice.textContent = maxRange.value;
}

// Инициализация
updateSlider();

// Обновление значений при изменении ползунков
minRange.addEventListener("input", updateSlider);
maxRange.addEventListener("input", updateSlider);

document.getElementById("login").addEventListener("click", function () {
  const formSection = document.querySelector(".login-container");
  if (
    formSection.style.display === "none" ||
    formSection.style.display === ""
  ) {
    formSection.style.display = "flex";
  } else {
    formSection.style.display = "none";
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

document.getElementById("search-icon").addEventListener("click", function () {
  const searchContainer = document.querySelector(".search-container");
  if (
    searchContainer.style.display === "none" ||
    searchContainer.style.display === ""
  ) {
    searchContainer.style.display = "block";
  } else {
    searchContainer.style.display = "none";
  }
});

const productTitle = localStorage.getItem("selectedProduct");

if (productTitle) {
  document.getElementById("productTitle").textContent = productTitle;
} else {
  document.getElementById("productTitle").textContent = "Товар не выбран";
}

const savedValue = localStorage.getItem("selectedProduct");

if (document.getElementById("productTitle").textContent === "iPhone 15 Pro") {
  document.getElementById("caseId").src =
    "https://thegadget.ua/images/products/9b30974d82c824248d9eab2bd549dbc8878d4505199a2331c7b8f6d54055c257.webp";
  document.getElementById("text-card").textContent =
    "Чохол SwitchEasy Artist Case with MagSafe for iPhone 15 Pro 6.1 Fleur";
}

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

renderTemplate("footer", footerTemplate);
renderTemplate("cart-container", cartTemplate);

// CART ADD -------------------------------------------------------

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
// LOGIN ACCOUNT ======================================================================

// FILTER OPEN CONTENT ===============================================================
const headers = document.querySelectorAll(".filter-header");

headers.forEach((header) => {
  header.addEventListener("click", function () {
    const content = this.nextElementSibling;
    const arrow = this.querySelector(".filter-arrow");

    content.classList.toggle("open");
    arrow.classList.toggle("rotate");
  });
});
