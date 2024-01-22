import { div, p, main, section, img } from "./hypertext.js";
import { createHeaderWithNavigation, createFooter } from "./components.js";
import { myIntro } from "./textContent.js";
import restaurant from "./restaurant.jpg";

export default function createHome() {
  // Cache DOM
  const content = document.getElementById("content");

  // contents
  const homeContents = main(
    { class: "main" },
    div(
      { class: "container" },
      section(
        { class: "home-content" },
        p({ class: "intro" }, myIntro),
        img({ src: restaurant, class: "restaurant-img" })
      )
    )
  );

  // Render
  content.appendChild(createHeaderWithNavigation("رستوران من"));
  content.appendChild(homeContents);
  content.appendChild(createFooter());
}
