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

  const menuCase = document.getElementById("item-preview-menu");
  const buttonMenuCase = document.getElementById("menu-text-case");

  buttonMenuCase.addEventListener("mouseover", () => {
    menuCase.style.display = "flex";
  });
  buttonMenuCase.addEventListener("mouseout", () => {
    menuCase.style.display = "none";
  });

  menuCase.addEventListener("mouseover", () => {
    menuCase.style.display = "flex";
  });

  menuCase.addEventListener("mouseout", () => {
    menuCase.style.display = "none";
  });

  const menuGlass = document.getElementById("item-preview-menu-2");
  const buttonMenuGlass = document.getElementById("menu-text-glass");

  buttonMenuGlass.addEventListener("mouseover", () => {
    menuGlass.style.display = "flex";
  });
  buttonMenuGlass.addEventListener("mouseout", () => {
    menuGlass.style.display = "none";
  });

  menuGlass.addEventListener("mouseout", () => {
    menuGlass.style.display = "none";
  });
  menuGlass.addEventListener("mouseover", () => {
    menuGlass.style.display = "flex";
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

const menuToggle = document.getElementById("toggle-section");

document.getElementById("menu-toggle").addEventListener("click", () => {
  if (menuToggle.style.display === "" || menuToggle.style.display === "none") {
    menuToggle.style.display = "block";
  } else {
    menuToggle.style.display = "none";
  }
});
