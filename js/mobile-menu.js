(() => {
  const burgerIcon = document.querySelector(".icon-burger");
  const menuBody = document.querySelector(".toggle-container");
  const closeMenuBtn = document.querySelector(".toggle-close-btn");

  burgerIcon.addEventListener("click", function () {
    menuBody.classList.toggle("active");
  });
  closeMenuBtn.addEventListener("click", function () {
    menuBody.classList.toggle("active");
  });
})();
