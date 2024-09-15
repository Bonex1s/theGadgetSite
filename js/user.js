const headers = document.querySelectorAll(".personal-data-header");

headers.forEach((header) => {
  header.addEventListener("click", function () {
    const content = this.nextElementSibling;
    const arrow = this.querySelector(".arrow");

    content.classList.toggle("open");
    arrow.classList.toggle("rotate");
  });
});
