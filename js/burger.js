const burgerActive = document.querySelector(".burger-menu");

const burgerBtn = document.querySelector(".header__burger");

const closeBtn = document.querySelector(".btn-close");

burgerBtn.onclick = () => {
  burgerActive.classList.add("burger-menu__active");

  closeBtn.addEventListener("click", closeBurger);

  burgerActive.addEventListener("click", hideModal);

  function closeBurger() {
    burgerActive.classList.remove("burger-menu__active");
    closeBtn.removeEventListener("click", closeBurger);
  }

  function hideModal(event) {
    if (event.target === burgerActive) {
      closeBurger();
    }
  }
};
