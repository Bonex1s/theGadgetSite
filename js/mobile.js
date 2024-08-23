document.querySelector(".menu-toggle").addEventListener("click", function () {
  const menuList = document.querySelector(".header-panel .menu_list");
  const svgList = document.querySelector(".header-panel .svg-list");

  if (menuList.style.display === "block") {
    menuList.style.display = "none";
    svgList.style.display = "none";
  } else {
    menuList.style.display = "block";
    svgList.style.display = "block";
  }
});
