const btns = document.querySelectorAll('button');
btns.forEach((element) => {
  element.onclick = () => console.log("CLicked");
});