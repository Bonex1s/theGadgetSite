import { renderTemplate } from "./utils.js";
import footerTemplate from "./footer-template.js";

const headers = document.querySelectorAll(".personal-data-header");

headers.forEach((header) => {
  header.addEventListener("click", function () {
    const content = this.nextElementSibling;
    const arrow = this.querySelector(".arrow");

    content.classList.toggle("open");
    arrow.classList.toggle("rotate");
  });
});

renderTemplate("footer", footerTemplate);
