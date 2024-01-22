import { h1, header, div, nav, ul, li, a, p, footer, i } from "./hypertext.js";

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

export { createFooter, createHeaderWithNavigation };
