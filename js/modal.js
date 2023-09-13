const accept = document.getElementById("btn");

const btnI = document.querySelectorAll("#for-card_button");
const modalWin = document.getElementById("modal");
const modalClose = document.getElementById("modal-close");
const resultBtn = document.querySelector(".result_button");

accept.onclick = () => {
  modalWin.classList.add("modal__active");

  modalClose.addEventListener("click", closeModal);

  function closeModal() {
    modalWin.classList.remove("modal__active");
    modalClose.removeEventListener("click", closeModal);
  }
};

resultBtn.onclick = () => {
  modalWin.classList.add("modal__active");

  modalClose.addEventListener("click", closeModal);

  function closeModal() {
    modalWin.classList.remove("modal__active");
    modalClose.removeEventListener("click", closeModal);
  }
};
