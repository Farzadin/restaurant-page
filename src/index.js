import createHomePage from "./homepage.js";
import createMenu from "./menu.js";
import createContacts from "./contacts.js";
import { createHomeContentWithoutMain } from "./components.js";

window.addEventListener("DOMContentLoaded", () => {
  createHomePage();

  const main = document.querySelector("main");
  const menu = document.querySelector(".menu");
  const home = document.querySelector(".home");
  const contact = document.querySelector(".contact");

  function updateMainContent(content) {
    while (main.firstChild) {
      main.removeChild(main.firstChild);
    }

    main.appendChild(content);
  }

  menu.addEventListener("click", () => {
    updateMainContent(createMenu());
  });

  home.addEventListener("click", () => {
    updateMainContent(createHomeContentWithoutMain());
  });

  contact.addEventListener("click", () => {
    updateMainContent(createContacts());
  });
});
