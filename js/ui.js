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

  document
    .querySelector(".carousel-container")
    .addEventListener("click", function () {
      const prev = document.querySelector(".prev-block");
      const active = document.querySelector(".active-block");
      const next = document.querySelector(".next-block");

      prev.classList.remove("prev-block");
      prev.classList.add("active-block");

      active.classList.remove("active-block");
      active.classList.add("next-block");

      next.classList.remove("next-block");
      next.classList.add("prev-block");
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const popularButton = document.getElementById("select-zone-popular");
  const allButton = document.getElementById("select-zone-all");
  const leftArrow = document.getElementById("left-arrow");
  const rightArrow = document.getElementById("right-arrow");
  const pages = document.querySelectorAll(".card-list");
  let currentPage = 0;

  function showPage(index) {
    pages.forEach((page, i) => {
      page.style.display = i === index ? "grid" : "none";
    });
  }

  leftArrow.addEventListener("click", () => {
    currentPage = currentPage > 0 ? currentPage - 1 : pages.length - 1;
    showPage(currentPage);
  });

  rightArrow.addEventListener("click", () => {
    currentPage = currentPage < pages.length - 1 ? currentPage + 1 : 0;
    showPage(currentPage);
  });

  showPage(currentPage);

  popularButton.addEventListener("click", () => {
    currentPage = currentPage > 0 ? currentPage - 1 : pages.length - 1;
    showPage(currentPage);
  });
  allButton.addEventListener("click", () => {
    currentPage = currentPage < pages.length - 1 ? currentPage + 1 : 0;
    showPage(currentPage);
  });
});

const menuToggle = document.getElementById("toggle-section");

document.getElementById("menu-toggle").addEventListener("click", () => {
  if (menuToggle.style.display === "" || menuToggle.style.display === "none") {
    menuToggle.style.display = "block";
  } else {
    menuToggle.style.display = "none";
  }
});

const productLinks = document.querySelectorAll("a[data-product]");

// Добавляем обработчик событий на клик для каждой ссылки
productLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const productName = event.target.getAttribute("data-product");

    // Сохраняем текст в localStorage
    localStorage.setItem("selectedProduct", productName);

    // Для проверки выводим значение в консоль
    console.log(localStorage.getItem("selectedProduct"));
  });
});

function openCart() {
  document.getElementById("cartPanel").classList.add("active");
  document.body.classList.add("cart-open");
}

function closeCart() {
  document.getElementById("cartPanel").classList.remove("active");
  document.body.classList.remove("cart-open");
}

document.getElementById("loadMoreBtn").addEventListener("click", function () {
  const hiddenNews = document.querySelectorAll(".news-item.hidden");

  hiddenNews.forEach((item, index) => {
    if (index < 12) {
      // Показываем 3 новости за раз
      item.classList.add("visible");
      item.classList.remove("hidden");
    }
  });

  // Если все новости показаны, скрываем кнопку "Читать еще"
  if (document.querySelectorAll(".news-item.hidden").length === 0) {
    this.style.display = "none";
  }
});
const images = [
  { desktop: "./assets/hero-img.webp", mobile: "./assets/hero-img-M.webp" },
  {
    desktop: "./assets/hero-img-3.webp",
    mobile: "./assets/hero-img-3M.webp",
  },
  { desktop: "./assets/hero-img-4.png", mobile: "./assets/hero-img-4M.webp" },
];

let currentIndex = 0;

function changeHeroImage() {
  const heroImage = document.getElementById("hero-image");
  const heroPicture = document
    .getElementById("hero-picture")
    .getElementsByTagName("source");

  currentIndex = (currentIndex + 1) % images.length;

  heroImage.src = images[currentIndex].desktop;
  heroPicture[0].srcset = images[currentIndex].mobile;
  heroPicture[1].srcset = images[currentIndex].mobile;
}

setInterval(changeHeroImage, 6000);

const buttonSelectZone = document.querySelectorAll(".select-zone");

buttonSelectZone.forEach((button) => {
  button.addEventListener("click", () => {
    buttonSelectZone.forEach((btn) => btn.classList.remove("active"));

    button.classList.add("active");
  });
});

console.log("Script loaded");
// LOGIN ACCOUNT ======================================================================
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

document
  .querySelector("#login-form-login")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;

    if (username === "admin" && password === "admin") {
      localStorage.setItem(
        "user",
        JSON.stringify({ name: "Test User", email: "test@example.com" })
      );

      window.location.href = "./pages/user.html";
    } else {
      alert("Невірний логін чи пароль");
    }
  });
const formRegistration = document.querySelector("#login-form-registration");
const formLogin = document.querySelector("#login-form-login");
const registrationBtn = document.querySelector("#registration-btn");

registrationBtn.addEventListener("click", () => {
  formLogin.style.display = "none";
  formRegistration.style.display = "flex";
});

// XML PARSER ====================================================================

document.addEventListener("DOMContentLoaded", function () {
  fetch("data/products.xml")
    .then((response) => {
      if (!response.ok) {
        console.error("Network error:", response.statusText);
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data, "application/xml");
      const products = xmlDoc.getElementsByTagName("product");

      const productElements = document.querySelectorAll(".card");

      productElements.forEach((productElement, index) => {
        if (index < products.length) {
          const product = products[index];
          const image = product.getElementsByTagName("image")[0].textContent;
          const name = product.getElementsByTagName("name")[0].textContent;
          const price = product.getElementsByTagName("price")[0].textContent;

          const imgElement = productElement.querySelector(".main-img");
          const nameElement = productElement.querySelector(".text-card");
          const priceElement = productElement.querySelector(".price");
          if (!imgElement || !nameElement || !priceElement) {
            console.error("Элементы не найдены", {
              imgElement,
              nameElement,
              priceElement,
            });
          }

          imgElement.src = image;
          nameElement.textContent = name;
          priceElement.textContent = `${price} грн.`;
        }
      });
    })
    .catch((error) => console.error("Ошибка при загрузке XML:", error));
});
