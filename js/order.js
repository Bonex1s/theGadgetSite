import { activeButton, renderTemplate } from "./utils.js";
import footerTemplate from "./footer-template.js";
import headerTemplate from "./header-template.js";

renderTemplate("footer", footerTemplate);
renderTemplate("header", headerTemplate);

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

// PROMOCODE ============================================================================

const openPromo = document.getElementById("toggleButton");
const promoCode = document.getElementById("promo-code");

openPromo.addEventListener("click", () => {
  if (promoCode.style.display === "none") {
    promoCode.style.display = "block";
  } else {
    promoCode.style.display = "none";
  }
});
