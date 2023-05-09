import { loadContactContent } from "./contact.js";
import { loadHomeContent } from "./home.js";
import { loadMenuContent } from "./menu.js";

export function handlePageOnLoad() {
  // get reference of body
  const body = document.body;

  // create Header Element
  const header = document.createElement("header");

  // create h2 Element
  const h1 = document.createElement("h1");
  h1.textContent = "Saffron Kitchen";

  // create nav element
  const nav = document.createElement("nav");

  // create UnOrdered list Element (Tabs)
  const tabs = document.createElement("ul");
  tabs.classList.add("tabs");

  // create list items
  const home = document.createElement("li");
  const menu = document.createElement("li");
  const contact = document.createElement("li");

  // add content and attribute to list items
  home.classList.add("active");
  home.textContent = "Home";
  menu.textContent = "Menu";
  contact.textContent = "Contact";

  // Append li elements into to ul element
  tabs.appendChild(home);
  tabs.appendChild(menu);
  tabs.appendChild(contact);

  // append Tabs (list) into nav element
  nav.appendChild(tabs);

  // Header
  header.appendChild(h1);
  header.appendChild(nav);
  body.append(header);

  // append nav element into body element

  // replace the position of the children of body element
  const child1 = body.children[0]; // ul.tabs
  const child2 = body.children[1]; // div#content
  body.insertBefore(child2, child1);

  // Attach a click event listener to each tab
  const tabItems = document.querySelectorAll(".tabs li");
  tabItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      tabItems.forEach((item) => {
        item.classList.remove("active");
      });

      //  Add the "active" class to the clicked item
      item.classList.add("active");

      // Update the tab content based on the clicked tab header
      switch (index) {
        case 0:
          loadHomeContent();
          break;
        case 1:
          loadMenuContent();
          break;
        case 2:
          loadContactContent();
          break;
      }
    });
  });
  loadHomeContent();
}
