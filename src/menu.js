import { div, main, section } from "./hypertext.js";

export default function createMenu() {
  const menuContents = main(
    { class: "main" },
    div({ class: "container" }, section({ class: "menu-content" }))
  );

  return menuContents;
}
