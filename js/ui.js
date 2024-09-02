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

  const menu = document.getElementById("item-preview-menu");
  document
    .getElementById("menu-text-case")
    .addEventListener("mouseover", () => {
      menu.style.display = "flex";
    });

  menu.addEventListener("mouseout", () => {
    menu.style.display = "none";
  });
  document.getElementById("menu-text-case").addEventListener("mouseout", () => {
    menu.style.display = "none";
  });
  // const productElement = document.getElementById("menu-text-case");

  // function handleMouseEnter() {
  //   const menu = document.getElementById("item-preview-menu");
  //   menu.style.display = "flex";
  // }
  // function handleMouseLeave() {
  //   const menu = document.getElementById("item-preview-menu");
  //   menu.style.display = "none"; // Скрываем меню
  // }
  // productElement.addEventListener("mouseenter", handleMouseEnter);
  // productElement.addEventListener("mouseleave", handleMouseLeave);

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
});
