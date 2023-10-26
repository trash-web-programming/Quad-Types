<<<<<<< HEAD
// const btns = document.querySelectorAll('button');
// btns.forEach((element) => {
//   element.onclick = () => console.log("CLicked");
// });
=======
>>>>>>> main

const modalOpenButton = document.getElementById("account-menu-icon");
const modal = document.getElementById("account-modal");

modalOpenButton.addEventListener("click", () => {
  if (modal.classList.value.includes("hidden")) {
    modal.classList.remove("hidden");
  } else {
    modal.classList.add("hidden");
  }
<<<<<<< HEAD
});
=======
});
>>>>>>> main
