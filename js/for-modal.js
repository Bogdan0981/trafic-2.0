const forModal = document.getElementById("modal");

const forBtns = document.querySelectorAll(".for-card_button");

const forCLose = document.querySelector(".modal-close");

for (let forBtn of forBtns) {
  forBtn.addEventListener("click", openModal);

  function openModal() {
    forModal.classList.add("modal__active");
  }
}

forCLose.onclick = () => {
  forModal.classList.remove("modal__active");
};
