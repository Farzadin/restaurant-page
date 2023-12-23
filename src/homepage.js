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

export default function createHomePage() {
  // Cache DOM
  const content = document.getElementById("content");

  const headerOfPage = header(
    null,
    div(
      { class: "container" },
      h1({ class: "page-title" }, "رستوران من"),
      nav(
        { class: "nav" },
        ul(
          { class: "nav-list" },
          li(null, a({ href: "#" }, "منو")),
          li(null, a({ href: "#" }, "تماس")),
          li(null, a({ href: "#" }, "رزرو"))
        )
      )
    )
  );

  const mainSectionOfPage = main(
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

  const footerOfPage = footer(
    null,
    div(
      { class: "container" },
      p(
        { class: "footer-text" },
        a({ href: "https://github.com/Farzadin" }, "Farzad DianatKhah 2023")
      )
    )
  );

  content.appendChild(headerOfPage);
  content.appendChild(mainSectionOfPage);
  content.appendChild(footerOfPage);
}
