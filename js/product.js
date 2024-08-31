document.addEventListener("DOMContentLoaded", function () {
  //  PROMOTION-BLOCK

  document.getElementById("close-promotion").addEventListener("click", () => {
    const promotionContainer = document.querySelector(".promotions");

    promotionContainer.style.display = "none";
  });

  document.getElementById("search-icon").addEventListener("click", () => {
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
      star.style.fill = "#ccc";
    }
  });

  rating.querySelector(".rating-value").textContent = ratingValue;
});

const data = [
  {
    name: "Чохол Spigen для Samsung iPhone 15 Pro Max, Thin Fit (FKL-8328222-BL) Black",
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
    name: "Чохол Spigen для Samsung iPhone 15 Pro Max, Thin Fit (FKL-0320022-MB) Mute Baige",
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
