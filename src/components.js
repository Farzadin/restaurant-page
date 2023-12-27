import {
  h1,
  header,
  div,
  nav,
  ul,
  li,
  a,
  p,
  footer,
  i,
  main,
  section,
  img,
} from "./hypertext.js";

import { myIntro } from "./textContent.js";
import restaurant from "./restaurant.jpg";

function createFooter() {
  const myFooter = footer(
    { class: "footer" },
    div(
      { class: "container" },
      p(
        null,
        "© Farzad DianatKhah 2023",
        a(
          { href: "https://github.com/Farzadin" },
          i({ class: "fab fa-github" })
        )
      )
    )
  );
  return myFooter;
}

function createNavigation() {
  const myNav = nav(
    { class: "nav" },
    ul(
      { class: "nav-list" },
      li(null, a({ class: "home" }, "خانه")),
      li(null, a({ class: "menu" }, "منو")),
      li(null, a({ class: "contact" }, "تماس"))
    )
  );

  return myNav;
}

function createHeaderWithNavigation(title) {
  const myHeader = header(
    { class: "header" },
    div(
      { class: "container" },
      h1({ class: "page-title" }, title),
      createNavigation()
    )
  );

  return myHeader;
}

function createSectionForHome() {
  const mySection = section(
    { class: "section-home" },
    p(null, myIntro),
    img({ src: restaurant, class: "restaurant-img" })
  );

  return mySection;
}

function createSectionForContact() {
  const mySection = section({ class: "section-contact" });

  return mySection;
}

function createSectionForMenu() {
  const mySection = section(
    { class: "section-menu" },
    p(null, "This is some random bullshit on Menu")
  );

  return mySection;
}

function createMain() {
  const myMain = main(
    { class: "main" },
    div({ class: "container main-container" }, createSectionForHome())
  );

  return myMain;
}
export {
  createFooter,
  createHeaderWithNavigation,
  createMain,
  createSectionForHome,
  createSectionForMenu,
};
