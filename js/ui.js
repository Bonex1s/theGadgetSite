document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("search-icon").addEventListener("click", function () {
    const searchContainer = document.querySelector(".search-container");
    // Переключение видимости поля поиска
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
      console.log("ahahahah");
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

  // Изначально показываем первую страницу
  showPage(currentPage);
});
