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
  // Переключение видимости поля поиска
  if (
    formSection.style.display === "none" ||
    formSection.style.display === ""
  ) {
    formSection.style.display = "flex";
  } else {
    formSection.style.display = "none";
  }
});
