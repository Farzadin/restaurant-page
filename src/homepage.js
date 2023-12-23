import {
  h1,
  header,
  div,
  nav,
  ul,
  li,
  a,
  main,
  section,
  p,
  img,
  footer,
} from "./hypertext.js";

import { myIntro } from "./textContent.js";
import myImage from "./home.jpg";

export default function createHome() {
  // Cache DOM
  const content = document.getElementById("content");

  content.appendChild(createHeader("رستوران من"));
  content.appendChild(createMain());
  content.appendChild(createFooter());
}

function createHeader(title) {
  const myHeader = header(
    null,
    div(
      { class: "container" },
      h1({ class: "page-title" }, title),
      nav(
        { class: "nav" },
        ul(
          { class: "nav-list" },
          li(null, a({ class: "menu" }, "منو")),
          li(null, a({ class: "contact" }, "تماس"))
        )
      )
    )
  );

  return myHeader;
}

function createMain() {
  const myMain = main(
    null,
    div(
      { class: "container" },
      section(
        { class: "intro-section" },
        p(null, myIntro),
        img({ src: myImage, class: "intro-img" })
      )
    )
  );
  return myMain;
}

function createFooter() {
  const myFooter = footer(
    null,
    div(
      { class: "container" },
      p(
        { class: "footer-text" },
        a({ href: "https://github.com/Farzadin" }, "Farzad DianatKhah 2023")
      )
    )
  );
  return myFooter;
}

export { createFooter, createHeader };
