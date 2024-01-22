import createHome from "./homepage.js";
import createMenu from "./menu.js";

window.addEventListener("DOMContentLoaded", () => {
  createHome();

  const content = document.getElementById("content");
  const main = document.querySelector("main");
  const menu = document.querySelector(".menu");

  menu.addEventListener("click", () => {
    if (content.contains(main)) {
      main.replaceWith(createMenu());
    }
  });
});
