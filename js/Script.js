const modalOpenButton = document.getElementById("account-menu-icon");
const modal = document.getElementById("account-modal");

modalOpenButton.addEventListener("click", () => {
  if (modal.classList.value.includes("hidden")) {
    modal.classList.remove("hidden");
  } else {
    modal.classList.add("hidden");
  }
});

const addModal = document.querySelectorAll("#add-modal-background");
const addModalOpenButton = document.querySelectorAll("#add-engines-list");
const addModalCloseButton = document.querySelectorAll(".closeModal");

addModalOpenButton.addEventListener("click", () => {
  addModal.classList.remove("hidden");
});

addModalCloseButton.addEventListener("click", () => {
  addModal.classList.add("hidden");
});
