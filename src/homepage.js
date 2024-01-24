import {
  createHeaderWithNavigation,
  createFooter,
  createHomeContentWithMain,
} from "./components.js";

export default function createHomePage() {
  const content = document.getElementById("content");

  content.appendChild(createHeaderWithNavigation("رستوران من"));
  content.appendChild(createHomeContentWithMain());
  content.appendChild(createFooter());
}
