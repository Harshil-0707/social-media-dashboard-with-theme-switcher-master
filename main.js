const btn = document.getElementById("btn");
const darkTheme = document.querySelectorAll("body");
const header = document.querySelector(".darkHeader");
const greytxt = document.querySelectorAll(".greytxt");
const box = document.querySelectorAll("main .socialAppDark , .socialMediaDark");

btn.onclick = () => {
  header.classList.toggle("whiteHeader");
  btn.firstElementChild.classList.toggle("active");
  box.forEach((boxs) => boxs.classList.toggle("socialLight"));
  greytxt.forEach((txt) => txt.classList.toggle("Grayish-Blue"));
  darkTheme.forEach((theme) => theme.classList.toggle("darkTheme"));
};
