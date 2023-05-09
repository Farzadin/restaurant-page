/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadContactContent": () => (/* binding */ loadContactContent)
/* harmony export */ });
/* harmony import */ var _location_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location.png */ "./src/location.png");

function loadContactContent() {
  var content = document.getElementById("content");
  content.innerHTML = "\n  <div class=\"container\">\n    <div class='contact'>\n      <h2 class='contact__title'>contact</h2>\n      <p><span>Service options</span>: Dine-in \xB7 Takeaway</p>\n      <p><span>Address</span>: Tehran Province, Tehran, ranjbar, N Felestin St, PC74+R2R</p>\n      <img src=\"".concat(_location_png__WEBPACK_IMPORTED_MODULE_0__["default"], "\" />\n    </div>\n  </div>\n  ");
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHomeContent": () => (/* binding */ loadHomeContent)
/* harmony export */ });
/* harmony import */ var _restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant.jpg */ "./src/restaurant.jpg");

function loadHomeContent() {
  var content = document.getElementById("content");
  content.innerHTML = "\n  <section class='home'>\n\n    <div class='welcome'>\n      <h2>food <em class='love'>made with love</em></h2>\n      <p>\n        Indulge your taste buds with our mouth-watering dishes prepared by our\n        talented chefs. Our restaurant offers an intimate and comfortable\n        atmosphere where you can enjoy a memorable dining experience with your\n        friends and family.\n      </p>\n      <a href=\"#\" class='btn'>order now</a>\n    </div>\n\n    <div class='image'>\n      <img src='".concat(_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__["default"], "' />\n    </div>\n\n  </section>\n  ");
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMenuContent": () => (/* binding */ loadMenuContent)
/* harmony export */ });
/* harmony import */ var _food2_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food2.jpg */ "./src/food2.jpg");
/* harmony import */ var _food1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food1.jpg */ "./src/food1.jpg");


function loadMenuContent() {
  var content = document.getElementById("content");
  content.innerHTML = "\n\t<div class='menu'>\n\t\t<h2 class='menu__title'>Menu</h2>\n\t\t<ul class='menu__items'>\n\t\t\t<li class='menu__item item'>\n\t\t\t\t<img src=\"".concat(_food2_jpg__WEBPACK_IMPORTED_MODULE_0__["default"], "\" width=\"30%\" class='joj food'>\n\t\t\t\t<h3>\u062C\u0648\u062C\u0647 \u06A9\u0628\u0627\u0628</h3>\n\t\t\t\t<p><span class=\"price\">\u062A\u0648\u0645\u0627\u0646</span>\n\t\t\t\t50,000</p>\n\t\t\t</li>\n\t\t\t<li class='menu__item item'>\n\t\t\t\t<img src=\"").concat(_food1_jpg__WEBPACK_IMPORTED_MODULE_1__["default"], "\" width='30%' class='kob food'>\n\t\t\t\t<h3>\u0686\u0644\u0648 \u06A9\u0628\u0627\u0628 \u06A9\u0648\u0628\u06CC\u062F\u0647</h3>\n\t\t\t\t<p><span class=\"price\">\u062A\u0648\u0645\u0627\u0646</span>\n\t\t\t\t60,000 </p>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n  ");
}

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handlePageOnLoad": () => (/* binding */ handlePageOnLoad)
/* harmony export */ });
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");



function handlePageOnLoad() {
  // get reference of body
  var body = document.body;

  // create Header Element
  var header = document.createElement("header");

  // create h2 Element
  var h1 = document.createElement("h1");
  h1.textContent = "Saffron Kitchen";

  // create nav element
  var nav = document.createElement("nav");

  // create UnOrdered list Element (Tabs)
  var tabs = document.createElement("ul");
  tabs.classList.add("tabs");

  // create list items
  var home = document.createElement("li");
  var menu = document.createElement("li");
  var contact = document.createElement("li");

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
  var child1 = body.children[0]; // ul.tabs
  var child2 = body.children[1]; // div#content
  body.insertBefore(child2, child1);

  // Attach a click event listener to each tab
  var tabItems = document.querySelectorAll(".tabs li");
  tabItems.forEach(function (item, index) {
    item.addEventListener("click", function () {
      tabItems.forEach(function (item) {
        item.classList.remove("active");
      });

      //  Add the "active" class to the clicked item
      item.classList.add("active");

      // Update the tab content based on the clicked tab header
      switch (index) {
        case 0:
          (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.loadHomeContent)();
          break;
        case 1:
          (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.loadMenuContent)();
          break;
        case 2:
          (0,_contact_js__WEBPACK_IMPORTED_MODULE_0__.loadContactContent)();
          break;
      }
    });
  });
  (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.loadHomeContent)();
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --blue: #1a59c8;\r\n  --grey: #666;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n*::selection {\r\n  background: var(--blue);\r\n  color: #fff;\r\n}\r\n\r\nhtml {\r\n  font-size: 62.5%;\r\n}\r\n\r\nbody,\r\nhtml {\r\n  font-family: \"Nunito Sans\", sans-serif;\r\n}\r\n\r\nul,\r\nli {\r\n  list-style: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nbody {\r\n  background: #f7f7f7;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 48px;\r\n}\r\n\r\n/* Header */\r\n\r\nheader {\r\n  padding: 2rem 9%;\r\n  width: 100%;\r\n  background-color: #fff;\r\n\r\n  display: flex;\r\n  gap: 8px;\r\n  flex-direction: column;\r\n  place-items: center;\r\n  justify-content: center;\r\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.tabs {\r\n  display: flex;\r\n  place-content: center;\r\n  place-items: center;\r\n  gap: 16px;\r\n}\r\n\r\n.tabs li {\r\n  cursor: pointer;\r\n  font-size: 2rem;\r\n  color: var(--grey);\r\n}\r\n\r\n.tabs li:hover {\r\n  color: var(--blue);\r\n}\r\n\r\nheader h1 {\r\n  text-align: center;\r\n  font-size: 3.5rem;\r\n  color: #333;\r\n}\r\n/* Header ends */\r\n\r\n/*  Home Content */\r\n\r\n#content {\r\n  padding: 2rem 9%;\r\n\r\n  display: flex;\r\n  flex: wrap;\r\n  gap: 1.5rem;\r\n}\r\n\r\n#content .home {\r\n  display: flex;\r\n  place-items: center;\r\n  place-content: center;\r\n  flex: 1 1 40rem;\r\n  padding: 3rem;\r\n}\r\n\r\n.home .image {\r\n  flex: 1 1 170rem;\r\n}\r\n\r\n.home img {\r\n  width: 100%;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.home h2 {\r\n  font-size: 4.5rem;\r\n  color: #333;\r\n}\r\n\r\n.home p {\r\n  font-size: 1.7rem;\r\n  color: #666;\r\n  padding: 1rem 0;\r\n  width: 70%;\r\n}\r\n\r\n.love {\r\n  background-image: linear-gradient(90deg, #7209d4, #2832d4 33%, #00a5b2);\r\n  background-clip: text;\r\n  -webkit-background-clip: text;\r\n  color: transparent;\r\n}\r\n\r\n.btn {\r\n  display: inline-block;\r\n  padding: 0.8rem 3rem;\r\n  border: 0.2rem solid var(--blue);\r\n  color: var(--blue);\r\n  font-size: 1.7rem;\r\n  border-radius: 0.5rem;\r\n  position: relative;\r\n  overflow: hidden;\r\n  z-index: 0;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.btn::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  width: 0%;\r\n  height: 100%;\r\n  background-color: var(--blue);\r\n  transition: 0.3s linear;\r\n  z-index: -1;\r\n}\r\n\r\n.btn:hover::before {\r\n  width: 100%;\r\n  left: 0;\r\n}\r\n\r\n.btn:hover {\r\n  color: #fff;\r\n}\r\n\r\n/* Home Ends */\r\n\r\n/* menu */\r\n\r\n.menu {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.menu__title {\r\n  text-align: center;\r\n  font-size: 3rem;\r\n  padding: 2rem;\r\n  border-bottom: 1px solid grey;\r\n  width: 80%;\r\n  max-width: 750px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.menu__item {\r\n  padding: 2rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  place-items: center;\r\n  gap: 1.6rem;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.menu__item p {\r\n  font-size: 1.6rem;\r\n  color: #666;\r\n}\r\n\r\n.menu__item h3 {\r\n  font-size: 2rem;\r\n}\r\n\r\n.menu__item img {\r\n  border-radius: 1rem;\r\n}\r\n\r\n.price {\r\n  font-size: 1.6rem;\r\n  font-weight: bold;\r\n  color: #333;\r\n}\r\n\r\n/* menu ends */\r\n\r\n/* contact */\r\n\r\n.container {\r\n  margin: 0 auto;\r\n  padding: 5rem;\r\n}\r\n\r\n.contact {\r\n  margin: 0 auto;\r\n  padding: 4rem;\r\n\r\n  width: 80%;\r\n  max-width: 750%;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n.contact__title {\r\n  font-size: 2.4rem;\r\n}\r\n\r\n.contact img {\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  border-radius: 2rem;\r\n}\r\n\r\n.contact p {\r\n  font-size: 1.6rem;\r\n  color: #666;\r\n}\r\n\r\n.contact p span {\r\n  font-weight: bold;\r\n  font-size: 1.6rem;\r\n  color: #333;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;EAEE,sCAAsC;AACxC;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA,WAAW;;AAEX;EACE,gBAAgB;EAChB,WAAW;EACX,sBAAsB;;EAEtB,aAAa;EACb,QAAQ;EACR,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,4CAA4C;AAC9C;;AAEA;EACE,aAAa;EACb,qBAAqB;EACrB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,WAAW;AACb;AACA,gBAAgB;;AAEhB,kBAAkB;;AAElB;EACE,gBAAgB;;EAEhB,aAAa;EACb,UAAU;EACV,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,eAAe;EACf,aAAa;AACf;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,uEAAuE;EACvE,qBAAqB;EACrB,6BAA6B;EAC7B,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,oBAAoB;EACpB,gCAAgC;EAChC,kBAAkB;EAClB,iBAAiB;EACjB,qBAAqB;EACrB,kBAAkB;EAClB,gBAAgB;EAChB,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,SAAS;EACT,YAAY;EACZ,6BAA6B;EAC7B,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,WAAW;EACX,OAAO;AACT;;AAEA;EACE,WAAW;AACb;;AAEA,cAAc;;AAEd,SAAS;;AAET;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,6BAA6B;EAC7B,UAAU;EACV,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,WAAW;AACb;;AAEA,cAAc;;AAEd,YAAY;;AAEZ;EACE,cAAc;EACd,aAAa;AACf;;AAEA;EACE,cAAc;EACd,aAAa;;EAEb,UAAU;EACV,eAAe;;EAEf,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,WAAW;AACb","sourcesContent":[":root {\r\n  --blue: #1a59c8;\r\n  --grey: #666;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n*::selection {\r\n  background: var(--blue);\r\n  color: #fff;\r\n}\r\n\r\nhtml {\r\n  font-size: 62.5%;\r\n}\r\n\r\nbody,\r\nhtml {\r\n  font-family: \"Nunito Sans\", sans-serif;\r\n}\r\n\r\nul,\r\nli {\r\n  list-style: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nbody {\r\n  background: #f7f7f7;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 48px;\r\n}\r\n\r\n/* Header */\r\n\r\nheader {\r\n  padding: 2rem 9%;\r\n  width: 100%;\r\n  background-color: #fff;\r\n\r\n  display: flex;\r\n  gap: 8px;\r\n  flex-direction: column;\r\n  place-items: center;\r\n  justify-content: center;\r\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.tabs {\r\n  display: flex;\r\n  place-content: center;\r\n  place-items: center;\r\n  gap: 16px;\r\n}\r\n\r\n.tabs li {\r\n  cursor: pointer;\r\n  font-size: 2rem;\r\n  color: var(--grey);\r\n}\r\n\r\n.tabs li:hover {\r\n  color: var(--blue);\r\n}\r\n\r\nheader h1 {\r\n  text-align: center;\r\n  font-size: 3.5rem;\r\n  color: #333;\r\n}\r\n/* Header ends */\r\n\r\n/*  Home Content */\r\n\r\n#content {\r\n  padding: 2rem 9%;\r\n\r\n  display: flex;\r\n  flex: wrap;\r\n  gap: 1.5rem;\r\n}\r\n\r\n#content .home {\r\n  display: flex;\r\n  place-items: center;\r\n  place-content: center;\r\n  flex: 1 1 40rem;\r\n  padding: 3rem;\r\n}\r\n\r\n.home .image {\r\n  flex: 1 1 170rem;\r\n}\r\n\r\n.home img {\r\n  width: 100%;\r\n  border-radius: 1rem;\r\n}\r\n\r\n.home h2 {\r\n  font-size: 4.5rem;\r\n  color: #333;\r\n}\r\n\r\n.home p {\r\n  font-size: 1.7rem;\r\n  color: #666;\r\n  padding: 1rem 0;\r\n  width: 70%;\r\n}\r\n\r\n.love {\r\n  background-image: linear-gradient(90deg, #7209d4, #2832d4 33%, #00a5b2);\r\n  background-clip: text;\r\n  -webkit-background-clip: text;\r\n  color: transparent;\r\n}\r\n\r\n.btn {\r\n  display: inline-block;\r\n  padding: 0.8rem 3rem;\r\n  border: 0.2rem solid var(--blue);\r\n  color: var(--blue);\r\n  font-size: 1.7rem;\r\n  border-radius: 0.5rem;\r\n  position: relative;\r\n  overflow: hidden;\r\n  z-index: 0;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.btn::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  width: 0%;\r\n  height: 100%;\r\n  background-color: var(--blue);\r\n  transition: 0.3s linear;\r\n  z-index: -1;\r\n}\r\n\r\n.btn:hover::before {\r\n  width: 100%;\r\n  left: 0;\r\n}\r\n\r\n.btn:hover {\r\n  color: #fff;\r\n}\r\n\r\n/* Home Ends */\r\n\r\n/* menu */\r\n\r\n.menu {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.menu__title {\r\n  text-align: center;\r\n  font-size: 3rem;\r\n  padding: 2rem;\r\n  border-bottom: 1px solid grey;\r\n  width: 80%;\r\n  max-width: 750px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.menu__item {\r\n  padding: 2rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  place-items: center;\r\n  gap: 1.6rem;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.menu__item p {\r\n  font-size: 1.6rem;\r\n  color: #666;\r\n}\r\n\r\n.menu__item h3 {\r\n  font-size: 2rem;\r\n}\r\n\r\n.menu__item img {\r\n  border-radius: 1rem;\r\n}\r\n\r\n.price {\r\n  font-size: 1.6rem;\r\n  font-weight: bold;\r\n  color: #333;\r\n}\r\n\r\n/* menu ends */\r\n\r\n/* contact */\r\n\r\n.container {\r\n  margin: 0 auto;\r\n  padding: 5rem;\r\n}\r\n\r\n.contact {\r\n  margin: 0 auto;\r\n  padding: 4rem;\r\n\r\n  width: 80%;\r\n  max-width: 750%;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n.contact__title {\r\n  font-size: 2.4rem;\r\n}\r\n\r\n.contact img {\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  border-radius: 2rem;\r\n}\r\n\r\n.contact p {\r\n  font-size: 1.6rem;\r\n  color: #666;\r\n}\r\n\r\n.contact p span {\r\n  font-weight: bold;\r\n  font-size: 1.6rem;\r\n  color: #333;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/food1.jpg":
/*!***********************!*\
  !*** ./src/food1.jpg ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "094254193590e5cf4b47d6f920e533e3.jpg");

/***/ }),

/***/ "./src/food2.jpg":
/*!***********************!*\
  !*** ./src/food2.jpg ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "702650edce476103d9271babd7b3e4df.jpg");

/***/ }),

/***/ "./src/location.png":
/*!**************************!*\
  !*** ./src/location.png ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "1c0f6852e04f794e84174c2b78779b8f.png");

/***/ }),

/***/ "./src/restaurant.jpg":
/*!****************************!*\
  !*** ./src/restaurant.jpg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "8e56f497909fab398b9f769f83286bef.jpg");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-load.js */ "./src/page-load.js");


window.addEventListener("DOMContentLoaded", _page_load_js__WEBPACK_IMPORTED_MODULE_1__.handlePageOnLoad);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUM2QjtBQUVsRDhCLE1BQU0sQ0FBQ0YsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUV4QiwyREFBZ0IsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Zvb2QxLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZm9vZDIuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9sb2NhdGlvbi5wbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3Jlc3RhdXJhbnQuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGxvY2F0aW9uIGZyb20gXCIuL2xvY2F0aW9uLnBuZ1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRDb250YWN0Q29udGVudCgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG5cclxuICBjb250ZW50LmlubmVySFRNTCA9IGBcclxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPSdjb250YWN0Jz5cclxuICAgICAgPGgyIGNsYXNzPSdjb250YWN0X190aXRsZSc+Y29udGFjdDwvaDI+XHJcbiAgICAgIDxwPjxzcGFuPlNlcnZpY2Ugb3B0aW9uczwvc3Bhbj46IERpbmUtaW4gwrcgVGFrZWF3YXk8L3A+XHJcbiAgICAgIDxwPjxzcGFuPkFkZHJlc3M8L3NwYW4+OiBUZWhyYW4gUHJvdmluY2UsIFRlaHJhbiwgcmFuamJhciwgTiBGZWxlc3RpbiBTdCwgUEM3NCtSMlI8L3A+XHJcbiAgICAgIDxpbWcgc3JjPVwiJHtsb2NhdGlvbn1cIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgYDtcclxufVxyXG4iLCJpbXBvcnQgcmVzdGF1cmFudCBmcm9tIFwiLi9yZXN0YXVyYW50LmpwZ1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRIb21lQ29udGVudCgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gIGNvbnRlbnQuaW5uZXJIVE1MID0gYFxyXG4gIDxzZWN0aW9uIGNsYXNzPSdob21lJz5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPSd3ZWxjb21lJz5cclxuICAgICAgPGgyPmZvb2QgPGVtIGNsYXNzPSdsb3ZlJz5tYWRlIHdpdGggbG92ZTwvZW0+PC9oMj5cclxuICAgICAgPHA+XHJcbiAgICAgICAgSW5kdWxnZSB5b3VyIHRhc3RlIGJ1ZHMgd2l0aCBvdXIgbW91dGgtd2F0ZXJpbmcgZGlzaGVzIHByZXBhcmVkIGJ5IG91clxyXG4gICAgICAgIHRhbGVudGVkIGNoZWZzLiBPdXIgcmVzdGF1cmFudCBvZmZlcnMgYW4gaW50aW1hdGUgYW5kIGNvbWZvcnRhYmxlXHJcbiAgICAgICAgYXRtb3NwaGVyZSB3aGVyZSB5b3UgY2FuIGVuam95IGEgbWVtb3JhYmxlIGRpbmluZyBleHBlcmllbmNlIHdpdGggeW91clxyXG4gICAgICAgIGZyaWVuZHMgYW5kIGZhbWlseS5cclxuICAgICAgPC9wPlxyXG4gICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPSdidG4nPm9yZGVyIG5vdzwvYT5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9J2ltYWdlJz5cclxuICAgICAgPGltZyBzcmM9JyR7cmVzdGF1cmFudH0nIC8+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgPC9zZWN0aW9uPlxyXG4gIGA7XHJcbn1cclxuIiwiaW1wb3J0IGpvaiBmcm9tIFwiLi9mb29kMi5qcGdcIjtcclxuaW1wb3J0IGtvYiBmcm9tIFwiLi9mb29kMS5qcGdcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkTWVudUNvbnRlbnQoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuXHJcbiAgY29udGVudC5pbm5lckhUTUwgPSBgXHJcblx0PGRpdiBjbGFzcz0nbWVudSc+XHJcblx0XHQ8aDIgY2xhc3M9J21lbnVfX3RpdGxlJz5NZW51PC9oMj5cclxuXHRcdDx1bCBjbGFzcz0nbWVudV9faXRlbXMnPlxyXG5cdFx0XHQ8bGkgY2xhc3M9J21lbnVfX2l0ZW0gaXRlbSc+XHJcblx0XHRcdFx0PGltZyBzcmM9XCIke2pvan1cIiB3aWR0aD1cIjMwJVwiIGNsYXNzPSdqb2ogZm9vZCc+XHJcblx0XHRcdFx0PGgzPtis2YjYrNmHINqp2KjYp9ioPC9oMz5cclxuXHRcdFx0XHQ8cD48c3BhbiBjbGFzcz1cInByaWNlXCI+2KrZiNmF2KfZhjwvc3Bhbj5cclxuXHRcdFx0XHQ1MCwwMDA8L3A+XHJcblx0XHRcdDwvbGk+XHJcblx0XHRcdDxsaSBjbGFzcz0nbWVudV9faXRlbSBpdGVtJz5cclxuXHRcdFx0XHQ8aW1nIHNyYz1cIiR7a29ifVwiIHdpZHRoPSczMCUnIGNsYXNzPSdrb2IgZm9vZCc+XHJcblx0XHRcdFx0PGgzPtqG2YTZiCDaqdio2KfYqCDaqdmI2KjbjNiv2Yc8L2gzPlxyXG5cdFx0XHRcdDxwPjxzcGFuIGNsYXNzPVwicHJpY2VcIj7YqtmI2YXYp9mGPC9zcGFuPlxyXG5cdFx0XHRcdDYwLDAwMCA8L3A+XHJcblx0XHRcdDwvbGk+XHJcblx0XHQ8L3VsPlxyXG5cdDwvZGl2PlxyXG4gIGA7XHJcbn1cclxuIiwiaW1wb3J0IHsgbG9hZENvbnRhY3RDb250ZW50IH0gZnJvbSBcIi4vY29udGFjdC5qc1wiO1xyXG5pbXBvcnQgeyBsb2FkSG9tZUNvbnRlbnQgfSBmcm9tIFwiLi9ob21lLmpzXCI7XHJcbmltcG9ydCB7IGxvYWRNZW51Q29udGVudCB9IGZyb20gXCIuL21lbnUuanNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVQYWdlT25Mb2FkKCkge1xyXG4gIC8vIGdldCByZWZlcmVuY2Ugb2YgYm9keVxyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG5cclxuICAvLyBjcmVhdGUgSGVhZGVyIEVsZW1lbnRcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG5cclxuICAvLyBjcmVhdGUgaDIgRWxlbWVudFxyXG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGgxLnRleHRDb250ZW50ID0gXCJTYWZmcm9uIEtpdGNoZW5cIjtcclxuXHJcbiAgLy8gY3JlYXRlIG5hdiBlbGVtZW50XHJcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcclxuXHJcbiAgLy8gY3JlYXRlIFVuT3JkZXJlZCBsaXN0IEVsZW1lbnQgKFRhYnMpXHJcbiAgY29uc3QgdGFicyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuICB0YWJzLmNsYXNzTGlzdC5hZGQoXCJ0YWJzXCIpO1xyXG5cclxuICAvLyBjcmVhdGUgbGlzdCBpdGVtc1xyXG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG5cclxuICAvLyBhZGQgY29udGVudCBhbmQgYXR0cmlidXRlIHRvIGxpc3QgaXRlbXNcclxuICBob21lLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgaG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xyXG4gIG1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuICBjb250YWN0LnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XHJcblxyXG4gIC8vIEFwcGVuZCBsaSBlbGVtZW50cyBpbnRvIHRvIHVsIGVsZW1lbnRcclxuICB0YWJzLmFwcGVuZENoaWxkKGhvbWUpO1xyXG4gIHRhYnMuYXBwZW5kQ2hpbGQobWVudSk7XHJcbiAgdGFicy5hcHBlbmRDaGlsZChjb250YWN0KTtcclxuXHJcbiAgLy8gYXBwZW5kIFRhYnMgKGxpc3QpIGludG8gbmF2IGVsZW1lbnRcclxuICBuYXYuYXBwZW5kQ2hpbGQodGFicyk7XHJcblxyXG4gIC8vIEhlYWRlclxyXG4gIGhlYWRlci5hcHBlbmRDaGlsZChoMSk7XHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XHJcbiAgYm9keS5hcHBlbmQoaGVhZGVyKTtcclxuXHJcbiAgLy8gYXBwZW5kIG5hdiBlbGVtZW50IGludG8gYm9keSBlbGVtZW50XHJcblxyXG4gIC8vIHJlcGxhY2UgdGhlIHBvc2l0aW9uIG9mIHRoZSBjaGlsZHJlbiBvZiBib2R5IGVsZW1lbnRcclxuICBjb25zdCBjaGlsZDEgPSBib2R5LmNoaWxkcmVuWzBdOyAvLyB1bC50YWJzXHJcbiAgY29uc3QgY2hpbGQyID0gYm9keS5jaGlsZHJlblsxXTsgLy8gZGl2I2NvbnRlbnRcclxuICBib2R5Lmluc2VydEJlZm9yZShjaGlsZDIsIGNoaWxkMSk7XHJcblxyXG4gIC8vIEF0dGFjaCBhIGNsaWNrIGV2ZW50IGxpc3RlbmVyIHRvIGVhY2ggdGFiXHJcbiAgY29uc3QgdGFiSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYnMgbGlcIik7XHJcbiAgdGFiSXRlbXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgdGFiSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyAgQWRkIHRoZSBcImFjdGl2ZVwiIGNsYXNzIHRvIHRoZSBjbGlja2VkIGl0ZW1cclxuICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG5cclxuICAgICAgLy8gVXBkYXRlIHRoZSB0YWIgY29udGVudCBiYXNlZCBvbiB0aGUgY2xpY2tlZCB0YWIgaGVhZGVyXHJcbiAgICAgIHN3aXRjaCAoaW5kZXgpIHtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICBsb2FkSG9tZUNvbnRlbnQoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgIGxvYWRNZW51Q29udGVudCgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgbG9hZENvbnRhY3RDb250ZW50KCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgbG9hZEhvbWVDb250ZW50KCk7XHJcbn1cclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAtLWJsdWU6ICMxYTU5Yzg7XFxyXFxuICAtLWdyZXk6ICM2NjY7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbio6OnNlbGVjdGlvbiB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlKTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxyXFxufVxcclxcblxcclxcbmJvZHksXFxyXFxuaHRtbCB7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk51bml0byBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxudWwsXFxyXFxubGkge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiA0OHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIZWFkZXIgKi9cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgcGFkZGluZzogMnJlbSA5JTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDhweDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi50YWJzIGxpIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ncmV5KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhYnMgbGk6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLWJsdWUpO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaDEge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAzLjVyZW07XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG59XFxyXFxuLyogSGVhZGVyIGVuZHMgKi9cXHJcXG5cXHJcXG4vKiAgSG9tZSBDb250ZW50ICovXFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgcGFkZGluZzogMnJlbSA5JTtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4OiB3cmFwO1xcclxcbiAgZ2FwOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IC5ob21lIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleDogMSAxIDQwcmVtO1xcclxcbiAgcGFkZGluZzogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUgLmltYWdlIHtcXHJcXG4gIGZsZXg6IDEgMSAxNzByZW07XFxyXFxufVxcclxcblxcclxcbi5ob21lIGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5ob21lIGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogNC41cmVtO1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxufVxcclxcblxcclxcbi5ob21lIHAge1xcclxcbiAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxuICBjb2xvcjogIzY2NjtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXHJcXG4gIHdpZHRoOiA3MCU7XFxyXFxufVxcclxcblxcclxcbi5sb3ZlIHtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzcyMDlkNCwgIzI4MzJkNCAzMyUsICMwMGE1YjIpO1xcclxcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxyXFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcGFkZGluZzogMC44cmVtIDNyZW07XFxyXFxuICBib3JkZXI6IDAuMnJlbSBzb2xpZCB2YXIoLS1ibHVlKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHotaW5kZXg6IDA7XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHdpZHRoOiAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcyBsaW5lYXI7XFxyXFxuICB6LWluZGV4OiAtMTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjpob3Zlcjo6YmVmb3JlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjpob3ZlciB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLyogSG9tZSBFbmRzICovXFxyXFxuXFxyXFxuLyogbWVudSAqL1xcclxcblxcclxcbi5tZW51IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9fdGl0bGUge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIG1heC13aWR0aDogNzUwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfX2l0ZW0ge1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMS42cmVtO1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfX2l0ZW0gcCB7XFxyXFxuICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gIGNvbG9yOiAjNjY2O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9faXRlbSBoMyB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51X19pdGVtIGltZyB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpY2Uge1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBtZW51IGVuZHMgKi9cXHJcXG5cXHJcXG4vKiBjb250YWN0ICovXFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHBhZGRpbmc6IDVyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0IHtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgcGFkZGluZzogNHJlbTtcXHJcXG5cXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXgtd2lkdGg6IDc1MCU7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3RfX3RpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi40cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCBpbWcge1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0IHAge1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBjb2xvcjogIzY2NjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QgcCBzcGFuIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsc0NBQXNDO0FBQ3hDOztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQSxXQUFXOztBQUVYO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxzQkFBc0I7O0VBRXRCLGFBQWE7RUFDYixRQUFRO0VBQ1Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjtBQUNBLGdCQUFnQjs7QUFFaEIsa0JBQWtCOztBQUVsQjtFQUNFLGdCQUFnQjs7RUFFaEIsYUFBYTtFQUNiLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSx1RUFBdUU7RUFDdkUscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUEsY0FBYzs7QUFFZCxTQUFTOztBQUVUO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUEsY0FBYzs7QUFFZCxZQUFZOztBQUVaO0VBQ0UsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhOztFQUViLFVBQVU7RUFDVixlQUFlOztFQUVmLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS1ibHVlOiAjMWE1OWM4O1xcclxcbiAgLS1ncmV5OiAjNjY2O1xcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4qOjpzZWxlY3Rpb24ge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tYmx1ZSk7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBmb250LXNpemU6IDYyLjUlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LFxcclxcbmh0bWwge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJOdW5pdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbnVsLFxcclxcbmxpIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogNDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogSGVhZGVyICovXFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIHBhZGRpbmc6IDJyZW0gOSU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA4cHg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxufVxcclxcblxcclxcbi50YWJzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFicyBsaSB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tZ3JleSk7XFxyXFxufVxcclxcblxcclxcbi50YWJzIGxpOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGgxIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxufVxcclxcbi8qIEhlYWRlciBlbmRzICovXFxyXFxuXFxyXFxuLyogIEhvbWUgQ29udGVudCAqL1xcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gIHBhZGRpbmc6IDJyZW0gOSU7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleDogd3JhcDtcXHJcXG4gIGdhcDogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCAuaG9tZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZsZXg6IDEgMSA0MHJlbTtcXHJcXG4gIHBhZGRpbmc6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5ob21lIC5pbWFnZSB7XFxyXFxuICBmbGV4OiAxIDEgMTcwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSBoMiB7XFxyXFxuICBmb250LXNpemU6IDQuNXJlbTtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZSBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbiAgY29sb3I6ICM2NjY7XFxyXFxuICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxuICB3aWR0aDogNzAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubG92ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM3MjA5ZDQsICMyODMyZDQgMzMlLCAjMDBhNWIyKTtcXHJcXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcXHJcXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBhZGRpbmc6IDAuOHJlbSAzcmVtO1xcclxcbiAgYm9yZGVyOiAwLjJyZW0gc29saWQgdmFyKC0tYmx1ZSk7XFxyXFxuICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxyXFxuICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB6LWluZGV4OiAwO1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bjo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB3aWR0aDogMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3MgbGluZWFyO1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxufVxcclxcblxcclxcbi5idG46aG92ZXI6OmJlZm9yZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5idG46aG92ZXIge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi8qIEhvbWUgRW5kcyAqL1xcclxcblxcclxcbi8qIG1lbnUgKi9cXHJcXG5cXHJcXG4ubWVudSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfX3RpdGxlIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBtYXgtd2lkdGg6IDc1MHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5tZW51X19pdGVtIHtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEuNnJlbTtcXHJcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51X19pdGVtIHAge1xcclxcbiAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxuICBjb2xvcjogIzY2NjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVfX2l0ZW0gaDMge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudV9faXRlbSBpbWcge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaWNlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLyogbWVudSBlbmRzICovXFxyXFxuXFxyXFxuLyogY29udGFjdCAqL1xcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBwYWRkaW5nOiA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCB7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG4gIHBhZGRpbmc6IDRyZW07XFxyXFxuXFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgbWF4LXdpZHRoOiA3NTAlO1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0X190aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDIuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QgaW1nIHtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgY29sb3I6ICM2NjY7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0IHAgc3BhbiB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjA5NDI1NDE5MzU5MGU1Y2Y0YjQ3ZDZmOTIwZTUzM2UzLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3MDI2NTBlZGNlNDc2MTAzZDkyNzFiYWJkN2IzZTRkZi5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMWMwZjY4NTJlMDRmNzk0ZTg0MTc0YzJiNzg3NzliOGYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjhlNTZmNDk3OTA5ZmFiMzk4YjlmNzY5ZjgzMjg2YmVmLmpwZ1wiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBoYW5kbGVQYWdlT25Mb2FkIH0gZnJvbSBcIi4vcGFnZS1sb2FkLmpzXCI7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaGFuZGxlUGFnZU9uTG9hZCk7XHJcbiJdLCJuYW1lcyI6WyJsb2NhdGlvbiIsImxvYWRDb250YWN0Q29udGVudCIsImNvbnRlbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiY29uY2F0IiwicmVzdGF1cmFudCIsImxvYWRIb21lQ29udGVudCIsImpvaiIsImtvYiIsImxvYWRNZW51Q29udGVudCIsImhhbmRsZVBhZ2VPbkxvYWQiLCJib2R5IiwiaGVhZGVyIiwiY3JlYXRlRWxlbWVudCIsImgxIiwidGV4dENvbnRlbnQiLCJuYXYiLCJ0YWJzIiwiY2xhc3NMaXN0IiwiYWRkIiwiaG9tZSIsIm1lbnUiLCJjb250YWN0IiwiYXBwZW5kQ2hpbGQiLCJhcHBlbmQiLCJjaGlsZDEiLCJjaGlsZHJlbiIsImNoaWxkMiIsImluc2VydEJlZm9yZSIsInRhYkl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwiaW5kZXgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlIiwid2luZG93Il0sInNvdXJjZVJvb3QiOiIifQ==