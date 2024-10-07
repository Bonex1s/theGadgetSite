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

const openPromo = document.getElementById("open-input");
const promoCode = document.getElementById("promo-code");

openPromo.addEventListener("click", () => {
  if (promoCode.style.display === "none") {
    promoCode.style.display = "block";
  } else {
    promoCode.style.display = "none";
  }
});
// DROPDOWN ========================================================================
const dropdownHeader = document.querySelector(".dropdown-header");
const dropdown = document.querySelector(".dropdown");
const dropdownIcon = document.querySelector(".dropdown-icon");

dropdownHeader.addEventListener("click", function () {
  dropdown.classList.toggle("open");
  dropdownIcon.classList.toggle("rotated");
});

document.addEventListener("click", function (e) {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove("open");
    dropdownIcon.classList.remove("rotated");
  }
});

const deliveryRadios = document.querySelectorAll(".delivery-radio");

deliveryRadios.forEach((radio) => {
  radio.addEventListener("change", function () {
    const allContents = document.querySelectorAll(".delivery-info");
    allContents.forEach((content) => content.classList.remove("open"));

    const targetId = radio.getAttribute("data-target");
    const content = document.getElementById(targetId);

    if (content) {
      content.classList.add("open");
    } else {
      console.error(`Element with ID ${targetId} not found.`);
    }
  });
});

// CITY DROPPDOWN =====================================================

const cityButton = document.querySelector(".city-select-button");
const cityContent = document.querySelector(".city-select-content");
const selectedCitySpan = document.getElementById("city-select-button");
const selectedCityIcon = document.getElementById("city-select-icon");

cityButton.addEventListener("click", (event) => {
  event.preventDefault();
  cityContent.classList.toggle("show");
  selectedCityIcon.classList.toggle("rotate");
});

cityContent.addEventListener("click", (event) => {
  if (event.target.tagName === "P") {
    const selectedCity = event.target.getAttribute("data-city");
    selectedCitySpan.textContent = selectedCity;
    localStorage.setItem("selectedCity", selectedCity);
    cityContent.classList.remove("show");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const deleteItem = document.querySelectorAll(".delete-item");
  const mainInfoProduct = document.querySelectorAll(".main-info-product");
  deleteItem.forEach((element) => {
    element.addEventListener("click", (event) => {
      const mainInfoProduct = event.target.closest(".main-info-product");
      if (mainInfoProduct) {
        mainInfoProduct.style.display = "none";
      }
    });
  });
});
