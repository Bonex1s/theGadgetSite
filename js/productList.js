const minRange = document.getElementById("minRange");
const maxRange = document.getElementById("maxRange");
const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");
const sliderRange = document.querySelector(".slider-range");

function updateSlider() {
  // Убедимся, что минимальное значение меньше максимального
  if (parseInt(minRange.value) > parseInt(maxRange.value)) {
    minRange.value = maxRange.value;
  }

  // Рассчитываем проценты для обеих ручек ползунков
  const minValue =
    ((minRange.value - minRange.min) / (minRange.max - minRange.min)) * 100;
  const maxValue =
    ((maxRange.value - minRange.min) / (maxRange.max - minRange.min)) * 100;

  // Устанавливаем положение и ширину области между ползунками
  sliderRange.style.left = `${minValue}%`;
  sliderRange.style.width = `${maxValue - minValue}%`;

  // Обновляем отображаемые значения
  minPrice.textContent = minRange.value;
  maxPrice.textContent = maxRange.value;
}

// Инициализация
updateSlider();

// Обновление значений при изменении ползунков
minRange.addEventListener("input", updateSlider);
maxRange.addEventListener("input", updateSlider);

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

const productTitle = localStorage.getItem("selectedProduct");

if (productTitle) {
  document.getElementById("productTitle").textContent = productTitle;
} else {
  document.getElementById("productTitle").textContent = "Товар не выбран";
}

const savedValue = localStorage.getItem("selectedProduct");
