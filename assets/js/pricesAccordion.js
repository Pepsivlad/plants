document.addEventListener("DOMContentLoaded", () => {
  let accordionBtns = document.querySelectorAll(".price-selectors-accordion");
  let rectangles = document.querySelectorAll(".price-selectors-rectangle");

  accordionBtns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      rectangles[i].classList.replace("inactive", "active") ? null : rectangles[i].classList.replace("active", "inactive");
      rectangles[(i - 1 < 0) ? 2 : i - 1].classList.replace("active", "inactive");
      rectangles[(i + 1) % 3].classList.replace("active", "inactive");
      accordionBtns[i].classList.toggle("active");
      accordionBtns[(i - 1 < 0) ? 2 : i - 1].classList.remove("active");
      accordionBtns[(i + 1) % 3].classList.remove("active");
    })
  });
});