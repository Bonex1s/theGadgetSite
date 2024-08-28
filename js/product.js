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
const smallImages = document.querySelectorAll(".small-img img");
const mainImage = document.getElementById("main-img");

smallImages.forEach((img) => {
  img.addEventListener("click", (event) => {
    event.preventDefault();
    mainImage.src = event.target.src;
  });
});

// RAITING

document.querySelectorAll(".rating").forEach((rating) => {
  const ratingValue = parseFloat(rating.getAttribute("data-rating"));
  const stars = rating.querySelectorAll(".star");

  stars.forEach((star, index) => {
    if (ratingValue >= index + 1) {
      star.style.fill = "gold";
    } else if (ratingValue > index) {
      star.style.fill = "linear-gradient(90deg, gold 50%, #ccc 50%)";
    } else {
      star.style.fill = "#ccc"; // Колір для незаповненої зірки
    }
  });

  rating.querySelector(".rating-value").textContent = ratingValue;
});
