//  ACTIVE BUTTON
export function activeButton(classBtn) {
  const buttons = document.querySelectorAll(classBtn);
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("active"));
      btn.classList.add("active");
    });
  });
}
