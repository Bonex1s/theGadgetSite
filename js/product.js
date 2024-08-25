document.addEventListener("DOMContentLoaded", function () {
  //  PROMOTION-BLOCK

  document.getElementById("close-promotion").addEventListener("click", () => {
    const promotionContainer = document.querySelector(".promotions");

    promotionContainer.style.display = "none";
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
});

// IMG
// Получаем все маленькие изображения
const smallImages = document.querySelectorAll(".small-img img");

// Получаем элемент основной картинки
const mainImage = document.getElementById("main-img");

// Добавляем обработчик событий на каждое маленькое изображение
smallImages.forEach((img) => {
  img.addEventListener("click", (event) => {
    event.preventDefault(); // Предотвращаем переход по ссылке
    mainImage.src = event.target.src; // Меняем основное изображение
  });
});
