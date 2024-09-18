import cartTemplate from "./cart-template.js";
import { activeButton, renderTemplate } from "./utils.js";
import footerTemplate from "./footer-template.js";
import headerTemplate from "./header-template.js";

document.addEventListener("DOMContentLoaded", function () {
  //  PROMOTION-BLOCK

  document.getElementById("close-promotion").addEventListener("click", () => {
    const promotionContainer = document.querySelector(".promotions");

    promotionContainer.style.display = "none";
  });

  document.getElementById("search-icon").addEventListener("click", function () {
    const searchContainer = document.querySelector(".search-container");
    if (searchContainer.style.display === "none") {
      searchContainer.style.display = "block";
    } else {
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

// IMG
const smallImages = document.querySelectorAll(".small-img img");
const mainImage = document.getElementById("main-img");

smallImages.forEach((img) => {
  img.addEventListener("click", (event) => {
    event.preventDefault();
    mainImage.src = event.target.src;
  });
});

// RAITING ==================================================================

document.querySelectorAll(".rating").forEach((rating) => {
  const ratingValue = parseFloat(rating.getAttribute("data-rating"));
  const stars = rating.querySelectorAll(".star");

  stars.forEach((star, index) => {
    if (ratingValue >= index + 1) {
      star.style.fill = "gold";
    } else if (ratingValue > index) {
      star.style.fill = "linear-gradient(90deg, gold 50%, #ccc 50%)";
    } else {
      star.style.fill = "#ccc";
    }
  });

  rating.querySelector(".rating-value").textContent = ratingValue;
});

const data = [
  {
    name: "Чохол Spigen для iPhone 15 Pro Max, Thin Fit (FKL-8328222-BL) Black",
    src: "../assets/spigenthinfit2.2.webp",
    price: "999грн",
    id: "Код товару: 2000000728240",
    img1: "../assets/spigenthinfit2.1.webp",
    img2: "../assets/spigenthinfit2.2.webp",
    img3: "../assets/spigenthinfit2.3.webp",
    img4: "../assets/spigenthinfit2.4.webp",
    img5: "../assets/spigenthinfit2.5.webp",
  },
  {
    name: "Чохол Spigen для iPhone 15 Pro Max, Thin Fit (FKL-0320022-MB) Mute Baige",
    src: "../assets/spigenthinfit1.webp",
    price: "999грн",
    id: "Код товару: 2000000128740",
    img1: "../assets/spigenthinfit2.webp",
    img2: "../assets/spigenthinfit1.webp",
    img3: "../assets/spigenthinfit3.webp",
    img4: "../assets/spigenthinfit4.webp",
    img5: "../assets/spigenthinfit5.webp",
  },
];

document.getElementById("black-color").addEventListener("click", () => {
  const dataIndex = 0;
  document.getElementById("main-img").src = data[dataIndex].src;
  document.getElementById("product-header").textContent = data[dataIndex].name;
  document.getElementById("product-id").textContent = data[dataIndex].id;
  document.getElementById("price").textContent = data[dataIndex].price;

  const smallImages = document.querySelectorAll(".small-img img");
  const images = [
    data[dataIndex].img1,
    data[dataIndex].img2,
    data[dataIndex].img3,
    data[dataIndex].img4,
    data[dataIndex].img5,
  ];

  smallImages.forEach((img, i) => {
    img.src = images[i];
  });
});
document.getElementById("yellow-color").addEventListener("click", () => {
  const dataIndex = 1;
  document.getElementById("main-img").src = data[dataIndex].src;
  document.getElementById("product-header").textContent = data[dataIndex].name;
  document.getElementById("product-id").textContent = data[dataIndex].id;
  document.getElementById("price").textContent = data[dataIndex].price;

  const smallImages = document.querySelectorAll(".small-img img");
  const images = [
    data[dataIndex].img1,
    data[dataIndex].img2,
    data[dataIndex].img3,
    data[dataIndex].img4,
    data[dataIndex].img5,
  ];

  smallImages.forEach((img, i) => {
    img.src = images[i];
  });
});

function initializeToggleButtons() {
  const buttons = document.querySelectorAll(".user-tip");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");
      const infoContainer = document.getElementById(targetId);
      const svg = this.querySelector("svg");

      if (infoContainer.classList.contains("open")) {
        infoContainer.classList.remove("open");
        svg.classList.remove("rotated");
      } else {
        infoContainer.classList.add("open");
        svg.classList.add("rotated");
      }
    });
  });
}

initializeToggleButtons();

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

document.getElementById("description-button").addEventListener("click", () => {
  const description = document.getElementById("description-container");
  const feedbackCol = document.getElementById("feedback-col-container");

  description.style.display = "none";
  feedbackCol.style.display = "flex";
});

activeButton(".buy-main-btn");
console.log("Script loaded");

// RENDER ==========================================================================
renderTemplate("footer", footerTemplate);
renderTemplate("header", headerTemplate);
renderTemplate("cart-container", cartTemplate);
// ADD LOCAL CART ==========================================================================
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

const toggleBtn = document.getElementById("characteristic-toggle-btn");
const moreCharacteristics = document.getElementById("more-characteristics");

toggleBtn.addEventListener("click", function () {
  moreCharacteristics.classList.toggle("open");

  if (moreCharacteristics.classList.contains("open")) {
    toggleBtn.textContent = "Скрити характеристики";
  } else {
    toggleBtn.textContent = "Ще характеристики";
  }
});

// LOGIN ACCOUNT ======================================================================

document.querySelector("#login-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  if (username === "admin" && password === "admin") {
    localStorage.setItem(
      "user",
      JSON.stringify({ name: "Test User", email: "test@example.com" })
    );

    window.location.href = "../pages/user.html";
  } else {
    alert("Неверный логин или пароль");
  }
});
