const baseBtn = document.getElementById("baseButton");
const baseModal = document.getElementById("baseModal");
const orderBaseBtn = document.getElementById("baseWhiteBtn");
const baseClose = document.getElementById("modal-closeBase");

const standartBtn = document.getElementById("standartButton");
const standartModal = document.getElementById("standartModal");
const orderStandartBtn = document.getElementById("standartWhiteBtn");
const standartClose = document.getElementById("modal-closeStandart");

const vipBtn = document.getElementById("vipButton");
const vipModal = document.getElementById("vipModal");
const orderVipBtn = document.getElementById("vipWhiteBtn");
const vipClose = document.getElementById("modal-closeVip");

const orderModal = document.querySelector(".modal");

const planCLose = document.querySelector(".modal");

/* Кнопки купить */
baseBtn.onclick = () => {
  baseModal.classList.add("modal__active");

  baseClose.addEventListener("click", closeModal);

  function closeModal() {
    baseModal.classList.remove("modal__active");

    baseClose.removeEventListener("click", closeModal);
  }
};

standartBtn.onclick = () => {
  standartModal.classList.add("modal__active");

  standartClose.addEventListener("click", closeModal);

  function closeModal() {
    standartModal.classList.remove("modal__active");

    standartClose.removeEventListener("click", closeModal);
  }
};

vipBtn.onclick = () => {
  vipModal.classList.add("modal__active");

  vipClose.addEventListener("click", closeModal);

  function closeModal() {
    vipModal.classList.remove("modal__active");

    vipClose.removeEventListener("click", closeModal);
  }
};

/* Кнокпа забронировать */
orderBaseBtn.onclick = () => {
  orderModal.classList.add("modal__active");

  planCLose.addEventListener("click", closeModal);

  function closeModal() {
    orderModal.classList.remove("modal__active");

    planCLose.removeEventListener("click", closeModal);
  }
};

orderStandartBtn.onclick = () => {
  orderModal.classList.add("modal__active");

  planCLose.addEventListener("click", closeModal);

  function closeModal() {
    orderModal.classList.remove("modal__active");

    planCLose.removeEventListener("click", closeModal);
  }
};

orderVipBtn.onclick = () => {
  orderModal.classList.add("modal__active");

  planCLose.addEventListener("click", closeModal);

  function closeModal() {
    orderModal.classList.remove("modal__active");

    planCLose.removeEventListener("click", closeModal);
  }
};
