import {
  createHeaderWithNavigation,
  createFooter,
  createHomeContent,
} from "./components.js";

export default function createHome() {
  // Cache DOM
  const content = document.getElementById("content");

  // Render
  content.appendChild(createHeaderWithNavigation("رستوران من"));
  content.appendChild(createHomeContent());
  content.appendChild(createFooter());
}
