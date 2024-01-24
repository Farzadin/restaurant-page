/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components.js":
/*!***************************!*\
  !*** ./src/components.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFooter: () => (/* binding */ createFooter),
/* harmony export */   createHeaderWithNavigation: () => (/* binding */ createHeaderWithNavigation),
/* harmony export */   createHomeContentWithMain: () => (/* binding */ createHomeContentWithMain),
/* harmony export */   createHomeContentWithoutMain: () => (/* binding */ createHomeContentWithoutMain)
/* harmony export */ });
/* harmony import */ var _hypertext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hypertext.js */ "./src/hypertext.js");
/* harmony import */ var _textContent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textContent.js */ "./src/textContent.js");
/* harmony import */ var _restaurant_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./restaurant.jpg */ "./src/restaurant.jpg");



function createFooter() {
  const myFooter = (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.footer)({
    class: "footer"
  }, (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.div)({
    class: "container"
  }, (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.p)(null, "© Farzad DianatKhah 2023", (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.a)({
    href: "https://github.com/Farzadin"
  }, (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.i)({
    class: "fab fa-github"
  })))));
  return myFooter;
}
function createNavigation() {
  const myNav = (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.nav)({
    class: "nav"
  }, (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.ul)({
    class: "nav-list"
  }, (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.li)(null, (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.a)({
    class: "home"
  }, "خانه")), (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.li)(null, (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.a)({
    class: "menu"
  }, "منو")), (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.li)(null, (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.a)({
    class: "contact"
  }, "تماس"))));
  return myNav;
}
function createHeaderWithNavigation(title) {
  const myHeader = (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.header)({
    class: "header"
  }, (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.div)({
    class: "container"
  }, (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.h1)({
    class: "page-title"
  }, title), createNavigation()));
  return myHeader;
}
function createHomeContentWithoutMain() {
  const homeContents = (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.div)({
    class: "container"
  }, (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.section)({
    class: "home-content"
  }, (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.p)({
    class: "intro"
  }, _textContent_js__WEBPACK_IMPORTED_MODULE_1__.myIntro), (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.img)({
    src: _restaurant_jpg__WEBPACK_IMPORTED_MODULE_2__,
    class: "restaurant-img"
  })));
  return homeContents;
}
function createHomeContentWithMain() {
  const homeContents = (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.main)({
    class: "main"
  }, (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.div)({
    class: "container"
  }, (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.section)({
    class: "home-content"
  }, (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.p)({
    class: "intro"
  }, _textContent_js__WEBPACK_IMPORTED_MODULE_1__.myIntro), (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.img)({
    src: _restaurant_jpg__WEBPACK_IMPORTED_MODULE_2__,
    class: "restaurant-img"
  }))));
  return homeContents;
}


/***/ }),

/***/ "./src/contacts.js":
/*!*************************!*\
  !*** ./src/contacts.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createContacts)
/* harmony export */ });
/* harmony import */ var _hypertext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hypertext.js */ "./src/hypertext.js");

function createContacts() {
  const contactsContent = (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.div)({
    class: "container"
  }, (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.h2)({
    class: "contact-title"
  }, "تماس"), (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.p)({
    class: "manager-name"
  }, "ممد بوقی"), (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.p)({
    class: "manager-title"
  }, "مدیریت"), (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.p)({
    class: "manager-phone-number"
  }, "555-222-333"));
  return contactsContent;
}

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHomePage)
/* harmony export */ });
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components.js */ "./src/components.js");

function createHomePage() {
  const content = document.getElementById("content");
  content.appendChild((0,_components_js__WEBPACK_IMPORTED_MODULE_0__.createHeaderWithNavigation)("رستوران من"));
  content.appendChild((0,_components_js__WEBPACK_IMPORTED_MODULE_0__.createHomeContentWithMain)());
  content.appendChild((0,_components_js__WEBPACK_IMPORTED_MODULE_0__.createFooter)());
}

/***/ }),

/***/ "./src/hypertext.js":
/*!**************************!*\
  !*** ./src/hypertext.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ a),
/* harmony export */   div: () => (/* binding */ div),
/* harmony export */   footer: () => (/* binding */ footer),
/* harmony export */   h1: () => (/* binding */ h1),
/* harmony export */   h2: () => (/* binding */ h2),
/* harmony export */   h3: () => (/* binding */ h3),
/* harmony export */   header: () => (/* binding */ header),
/* harmony export */   i: () => (/* binding */ i),
/* harmony export */   img: () => (/* binding */ img),
/* harmony export */   li: () => (/* binding */ li),
/* harmony export */   main: () => (/* binding */ main),
/* harmony export */   nav: () => (/* binding */ nav),
/* harmony export */   p: () => (/* binding */ p),
/* harmony export */   section: () => (/* binding */ section),
/* harmony export */   span: () => (/* binding */ span),
/* harmony export */   ul: () => (/* binding */ ul)
/* harmony export */ });
function createElement(tag) {
  let attributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const element = document.createElement(tag);
  for (const key in attributes) {
    if (attributes.hasOwnProperty(key)) {
      element.setAttribute(key, attributes[key]);
    }
  }
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }
  children.forEach(child => {
    if (typeof child === "string") {
      element.appendChild(document.createTextNode(child));
    } else {
      element.appendChild(child);
    }
  });
  return element;
}
function header() {
  let attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  for (var _len2 = arguments.length, children = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    children[_key2 - 1] = arguments[_key2];
  }
  return createElement("header", attributes, ...children);
}
function div() {
  let attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  for (var _len3 = arguments.length, children = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    children[_key3 - 1] = arguments[_key3];
  }
  return createElement("div", attributes, ...children);
}
function h1() {
  let attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  for (var _len4 = arguments.length, children = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    children[_key4 - 1] = arguments[_key4];
  }
  return createElement("h1", attributes, ...children);
}
function h2() {
  let attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  for (var _len5 = arguments.length, children = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    children[_key5 - 1] = arguments[_key5];
  }
  return createElement("h2", attributes, ...children);
}
function h3() {
  let attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  for (var _len6 = arguments.length, children = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
    children[_key6 - 1] = arguments[_key6];
  }
  return createElement("h3", attributes, ...children);
}
function nav() {
  let attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  for (var _len7 = arguments.length, children = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
    children[_key7 - 1] = arguments[_key7];
  }
  return createElement("nav", attributes, ...children);
}
function ul() {
  let attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  for (var _len8 = arguments.length, children = new Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
    children[_key8 - 1] = arguments[_key8];
  }
  return createElement("ul", attributes, ...children);
}
function li() {
  let attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  for (var _len9 = arguments.length, children = new Array(_len9 > 1 ? _len9 - 1 : 0), _key9 = 1; _key9 < _len9; _key9++) {
    children[_key9 - 1] = arguments[_key9];
  }
  return createElement("li", attributes, ...children);
}
function a() {
  let attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  for (var _len10 = arguments.length, children = new Array(_len10 > 1 ? _len10 - 1 : 0), _key10 = 1; _key10 < _len10; _key10++) {
    children[_key10 - 1] = arguments[_key10];
  }
  return createElement("a", attributes, ...children);
}
function main() {
  let attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  for (var _len11 = arguments.length, children = new Array(_len11 > 1 ? _len11 - 1 : 0), _key11 = 1; _key11 < _len11; _key11++) {
    children[_key11 - 1] = arguments[_key11];
  }
  return createElement("main", attributes, ...children);
}
function section() {
  let attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  for (var _len12 = arguments.length, children = new Array(_len12 > 1 ? _len12 - 1 : 0), _key12 = 1; _key12 < _len12; _key12++) {
    children[_key12 - 1] = arguments[_key12];
  }
  return createElement("section", attributes, ...children);
}
function footer() {
  let attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  for (var _len13 = arguments.length, children = new Array(_len13 > 1 ? _len13 - 1 : 0), _key13 = 1; _key13 < _len13; _key13++) {
    children[_key13 - 1] = arguments[_key13];
  }
  return createElement("footer", attributes, ...children);
}
function img() {
  let attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  for (var _len14 = arguments.length, children = new Array(_len14 > 1 ? _len14 - 1 : 0), _key14 = 1; _key14 < _len14; _key14++) {
    children[_key14 - 1] = arguments[_key14];
  }
  return createElement("img", attributes, ...children);
}
function p() {
  let attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  for (var _len15 = arguments.length, children = new Array(_len15 > 1 ? _len15 - 1 : 0), _key15 = 1; _key15 < _len15; _key15++) {
    children[_key15 - 1] = arguments[_key15];
  }
  return createElement("p", attributes, ...children);
}
function span() {
  let attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  for (var _len16 = arguments.length, children = new Array(_len16 > 1 ? _len16 - 1 : 0), _key16 = 1; _key16 < _len16; _key16++) {
    children[_key16 - 1] = arguments[_key16];
  }
  return createElement("span", attributes, ...children);
}
function i() {
  let attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  for (var _len17 = arguments.length, children = new Array(_len17 > 1 ? _len17 - 1 : 0), _key17 = 1; _key17 < _len17; _key17++) {
    children[_key17 - 1] = arguments[_key17];
  }
  return createElement("i", attributes, ...children);
}


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMenu)
/* harmony export */ });
/* harmony import */ var _hypertext_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hypertext.js */ "./src/hypertext.js");

function createMenu() {
  const menuContents = (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.div)({
    class: "container"
  }, (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.section)({
    class: "menu-content"
  }, (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.ul)({
    class: "menu-list"
  }, (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.li)({
    class: "menu-item"
  }, (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.img)({
    class: "menu-item-img"
  }), (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.div)({
    class: "menu-item-text"
  }, (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.h3)({
    class: "menu-item-heading"
  }, (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.span)({
    class: "menu-item-name"
  }, "خوراک کباب کوبیده"), (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.span)({
    class: "menu-item-price"
  }, "240T"))), (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.p)({
    class: "menu-item-desc"
  }, "کباب کوبیده یک غذای ایرانی محبوب است که از گوشت چرخ‌کرده، پیاز و ادویه‌های خاص تهیه می‌شود. این کباب به شکل استیک بلند و باریک درست و در نارنجی یا گاز پخته می‌شود.")), (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.li)({
    class: "menu-item"
  }, (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.img)({
    class: "menu-item-img"
  }), (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.div)({
    class: "menu-item-text"
  }, (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.h3)({
    class: "menu-item-heading"
  }, (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.span)({
    class: "menu-item-name"
  }, "خوراک جوجه کباب"), (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.span)({
    class: "menu-item-price"
  }, "240T"))), (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.p)({
    class: "menu-item-desc"
  }, "جوجه کباب، گوشت مرغ با ادویه‌ها، بر روی سیخ پخته شده، طعمی خوشمزه و معطر از غذاهای محبوب ایرانی")), (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.li)({
    class: "menu-item"
  }, (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.img)({
    class: "menu-item-img"
  }), (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.div)({
    class: "menu-item-text"
  }, (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.h3)({
    class: "menu-item-heading"
  }, (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.span)({
    class: "menu-item-name"
  }, "خوراک کباب برگ"), (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.span)({
    class: "menu-item-price"
  }, "370T"))), (0,_hypertext_js__WEBPACK_IMPORTED_MODULE_0__.p)({
    class: "menu-item-desc"
  }, "کباب برگ، یک غذای ایرانی سنتی است که از تکه‌های نازک گوشت (معمولاً گوشت گوسفند یا گوساله)، به همراه ریزه‌های پنیر و ادویه‌های خاص، بین برگ‌های تره تهیه می‌شود. سپس بر روی آتش یا گاز پخته می‌شود")))));
  return menuContents;
}

/***/ }),

/***/ "./src/textContent.js":
/*!****************************!*\
  !*** ./src/textContent.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   myIntro: () => (/* binding */ myIntro)
/* harmony export */ });
const myIntro = "این رستوران در مکانی شگفت‌آور و دلپذیر واقع شده است. با اتمسفر دوستانه و آشپزان بااستعداد، اینجا غذاهای خوشمزه از مواد محلی تهیه می‌شود. خدمات عالی و منوی با دقت انتخاب شده، تجربه معنی‌داری را ارائه می‌دهند. این رستوران به عنوان مقصدی برای لذت بردن از غذاهای خاص و یک تجربه غذایی شگفت‌انگیز شناخته می‌شود";


/***/ }),

/***/ "./src/restaurant.jpg":
/*!****************************!*\
  !*** ./src/restaurant.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "231d5502d76685f53a9a.jpg";

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.js */ "./src/homepage.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contacts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacts.js */ "./src/contacts.js");
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components.js */ "./src/components.js");




window.addEventListener("DOMContentLoaded", () => {
  (0,_homepage_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const main = document.querySelector("main");
  const menu = document.querySelector(".menu");
  const home = document.querySelector(".home");
  const contact = document.querySelector(".contact");
  function updateMainContent(content) {
    while (main.firstChild) {
      main.removeChild(main.firstChild);
    }
    main.appendChild(content);
  }
  menu.addEventListener("click", () => {
    updateMainContent((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])());
  });
  home.addEventListener("click", () => {
    updateMainContent((0,_components_js__WEBPACK_IMPORTED_MODULE_3__.createHomeContentWithoutMain)());
  });
  contact.addEventListener("click", () => {
    updateMainContent((0,_contacts_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9oeXBlcnRleHQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3RleHRDb250ZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBoZWFkZXIsXHJcbiAgZGl2LFxyXG4gIGgxLFxyXG4gIG5hdixcclxuICB1bCxcclxuICBsaSxcclxuICBhLFxyXG4gIG1haW4sXHJcbiAgc2VjdGlvbixcclxuICBwLFxyXG4gIGltZyxcclxuICBmb290ZXIsXHJcbiAgaSxcclxufSBmcm9tIFwiLi9oeXBlcnRleHQuanNcIjtcclxuaW1wb3J0IHsgbXlJbnRybyB9IGZyb20gXCIuL3RleHRDb250ZW50LmpzXCI7XHJcbmltcG9ydCByZXN0YXVyYW50IGZyb20gXCIuL3Jlc3RhdXJhbnQuanBnXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XHJcbiAgY29uc3QgbXlGb290ZXIgPSBmb290ZXIoXHJcbiAgICB7IGNsYXNzOiBcImZvb3RlclwiIH0sXHJcbiAgICBkaXYoXHJcbiAgICAgIHsgY2xhc3M6IFwiY29udGFpbmVyXCIgfSxcclxuICAgICAgcChcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIFwiwqkgRmFyemFkIERpYW5hdEtoYWggMjAyM1wiLFxyXG4gICAgICAgIGEoXHJcbiAgICAgICAgICB7IGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL0ZhcnphZGluXCIgfSxcclxuICAgICAgICAgIGkoeyBjbGFzczogXCJmYWIgZmEtZ2l0aHViXCIgfSlcclxuICAgICAgICApXHJcbiAgICAgIClcclxuICAgIClcclxuICApO1xyXG4gIHJldHVybiBteUZvb3RlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmF2aWdhdGlvbigpIHtcclxuICBjb25zdCBteU5hdiA9IG5hdihcclxuICAgIHsgY2xhc3M6IFwibmF2XCIgfSxcclxuICAgIHVsKFxyXG4gICAgICB7IGNsYXNzOiBcIm5hdi1saXN0XCIgfSxcclxuICAgICAgbGkobnVsbCwgYSh7IGNsYXNzOiBcImhvbWVcIiB9LCBcItiu2KfZhtmHXCIpKSxcclxuICAgICAgbGkobnVsbCwgYSh7IGNsYXNzOiBcIm1lbnVcIiB9LCBcItmF2YbZiFwiKSksXHJcbiAgICAgIGxpKG51bGwsIGEoeyBjbGFzczogXCJjb250YWN0XCIgfSwgXCLYqtmF2KfYs1wiKSlcclxuICAgIClcclxuICApO1xyXG5cclxuICByZXR1cm4gbXlOYXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcldpdGhOYXZpZ2F0aW9uKHRpdGxlKSB7XHJcbiAgY29uc3QgbXlIZWFkZXIgPSBoZWFkZXIoXHJcbiAgICB7IGNsYXNzOiBcImhlYWRlclwiIH0sXHJcbiAgICBkaXYoXHJcbiAgICAgIHsgY2xhc3M6IFwiY29udGFpbmVyXCIgfSxcclxuICAgICAgaDEoeyBjbGFzczogXCJwYWdlLXRpdGxlXCIgfSwgdGl0bGUpLFxyXG4gICAgICBjcmVhdGVOYXZpZ2F0aW9uKClcclxuICAgIClcclxuICApO1xyXG5cclxuICByZXR1cm4gbXlIZWFkZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhvbWVDb250ZW50V2l0aG91dE1haW4oKSB7XHJcbiAgY29uc3QgaG9tZUNvbnRlbnRzID0gZGl2KFxyXG4gICAgeyBjbGFzczogXCJjb250YWluZXJcIiB9LFxyXG4gICAgc2VjdGlvbihcclxuICAgICAgeyBjbGFzczogXCJob21lLWNvbnRlbnRcIiB9LFxyXG4gICAgICBwKHsgY2xhc3M6IFwiaW50cm9cIiB9LCBteUludHJvKSxcclxuICAgICAgaW1nKHsgc3JjOiByZXN0YXVyYW50LCBjbGFzczogXCJyZXN0YXVyYW50LWltZ1wiIH0pXHJcbiAgICApXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIGhvbWVDb250ZW50cztcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSG9tZUNvbnRlbnRXaXRoTWFpbigpIHtcclxuICBjb25zdCBob21lQ29udGVudHMgPSBtYWluKFxyXG4gICAgeyBjbGFzczogXCJtYWluXCIgfSxcclxuICAgIGRpdihcclxuICAgICAgeyBjbGFzczogXCJjb250YWluZXJcIiB9LFxyXG4gICAgICBzZWN0aW9uKFxyXG4gICAgICAgIHsgY2xhc3M6IFwiaG9tZS1jb250ZW50XCIgfSxcclxuICAgICAgICBwKHsgY2xhc3M6IFwiaW50cm9cIiB9LCBteUludHJvKSxcclxuICAgICAgICBpbWcoeyBzcmM6IHJlc3RhdXJhbnQsIGNsYXNzOiBcInJlc3RhdXJhbnQtaW1nXCIgfSlcclxuICAgICAgKVxyXG4gICAgKVxyXG4gICk7XHJcblxyXG4gIHJldHVybiBob21lQ29udGVudHM7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgY3JlYXRlRm9vdGVyLFxyXG4gIGNyZWF0ZUhlYWRlcldpdGhOYXZpZ2F0aW9uLFxyXG4gIGNyZWF0ZUhvbWVDb250ZW50V2l0aE1haW4sXHJcbiAgY3JlYXRlSG9tZUNvbnRlbnRXaXRob3V0TWFpbixcclxufTtcclxuIiwiaW1wb3J0IHsgZGl2LCBwLCBoMiB9IGZyb20gXCIuL2h5cGVydGV4dC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ29udGFjdHMoKSB7XHJcbiAgY29uc3QgY29udGFjdHNDb250ZW50ID0gZGl2KFxyXG4gICAgeyBjbGFzczogXCJjb250YWluZXJcIiB9LFxyXG4gICAgaDIoeyBjbGFzczogXCJjb250YWN0LXRpdGxlXCIgfSwgXCLYqtmF2KfYs1wiKSxcclxuICAgIHAoeyBjbGFzczogXCJtYW5hZ2VyLW5hbWVcIiB9LCBcItmF2YXYryDYqNmI2YLbjFwiKSxcclxuICAgIHAoeyBjbGFzczogXCJtYW5hZ2VyLXRpdGxlXCIgfSwgXCLZhdiv24zYsduM2KpcIiksXHJcbiAgICBwKHsgY2xhc3M6IFwibWFuYWdlci1waG9uZS1udW1iZXJcIiB9LCBcIjU1NS0yMjItMzMzXCIpXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIGNvbnRhY3RzQ29udGVudDtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIGNyZWF0ZUhlYWRlcldpdGhOYXZpZ2F0aW9uLFxyXG4gIGNyZWF0ZUZvb3RlcixcclxuICBjcmVhdGVIb21lQ29udGVudFdpdGhNYWluLFxyXG59IGZyb20gXCIuL2NvbXBvbmVudHMuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUhvbWVQYWdlKCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcblxyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyV2l0aE5hdmlnYXRpb24oXCLYsdiz2KrZiNix2KfZhiDZhdmGXCIpKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhvbWVDb250ZW50V2l0aE1haW4oKSk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XHJcbn1cclxuIiwiZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWcsIGF0dHJpYnV0ZXMgPSB7fSwgLi4uY2hpbGRyZW4pIHtcclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG5cclxuICBmb3IgKGNvbnN0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XHJcbiAgICBpZiAoYXR0cmlidXRlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIGNoaWxkID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2hpbGQpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gaGVhZGVyKGF0dHJpYnV0ZXMgPSB7fSwgLi4uY2hpbGRyZW4pIHtcclxuICByZXR1cm4gY3JlYXRlRWxlbWVudChcImhlYWRlclwiLCBhdHRyaWJ1dGVzLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpdihhdHRyaWJ1dGVzID0ge30sIC4uLmNoaWxkcmVuKSB7XHJcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgYXR0cmlidXRlcywgLi4uY2hpbGRyZW4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoMShhdHRyaWJ1dGVzID0ge30sIC4uLmNoaWxkcmVuKSB7XHJcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBhdHRyaWJ1dGVzLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGgyKGF0dHJpYnV0ZXMgPSB7fSwgLi4uY2hpbGRyZW4pIHtcclxuICByZXR1cm4gY3JlYXRlRWxlbWVudChcImgyXCIsIGF0dHJpYnV0ZXMsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaDMoYXR0cmlidXRlcyA9IHt9LCAuLi5jaGlsZHJlbikge1xyXG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFwiaDNcIiwgYXR0cmlidXRlcywgLi4uY2hpbGRyZW4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuYXYoYXR0cmlidXRlcyA9IHt9LCAuLi5jaGlsZHJlbikge1xyXG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFwibmF2XCIsIGF0dHJpYnV0ZXMsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdWwoYXR0cmlidXRlcyA9IHt9LCAuLi5jaGlsZHJlbikge1xyXG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFwidWxcIiwgYXR0cmlidXRlcywgLi4uY2hpbGRyZW4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsaShhdHRyaWJ1dGVzID0ge30sIC4uLmNoaWxkcmVuKSB7XHJcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBhdHRyaWJ1dGVzLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGEoYXR0cmlidXRlcyA9IHt9LCAuLi5jaGlsZHJlbikge1xyXG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFwiYVwiLCBhdHRyaWJ1dGVzLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1haW4oYXR0cmlidXRlcyA9IHt9LCAuLi5jaGlsZHJlbikge1xyXG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFwibWFpblwiLCBhdHRyaWJ1dGVzLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlY3Rpb24oYXR0cmlidXRlcyA9IHt9LCAuLi5jaGlsZHJlbikge1xyXG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFwic2VjdGlvblwiLCBhdHRyaWJ1dGVzLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvb3RlcihhdHRyaWJ1dGVzID0ge30sIC4uLmNoaWxkcmVuKSB7XHJcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIiwgYXR0cmlidXRlcywgLi4uY2hpbGRyZW4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbWcoYXR0cmlidXRlcyA9IHt9LCAuLi5jaGlsZHJlbikge1xyXG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFwiaW1nXCIsIGF0dHJpYnV0ZXMsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcChhdHRyaWJ1dGVzID0ge30sIC4uLmNoaWxkcmVuKSB7XHJcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXCJwXCIsIGF0dHJpYnV0ZXMsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3BhbihhdHRyaWJ1dGVzID0ge30sIC4uLmNoaWxkcmVuKSB7XHJcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIGF0dHJpYnV0ZXMsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaShhdHRyaWJ1dGVzID0ge30sIC4uLmNoaWxkcmVuKSB7XHJcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoXCJpXCIsIGF0dHJpYnV0ZXMsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBoZWFkZXIsXHJcbiAgbmF2LFxyXG4gIGgxLFxyXG4gIGgyLFxyXG4gIGgzLFxyXG4gIGRpdixcclxuICB1bCxcclxuICBsaSxcclxuICBhLFxyXG4gIG1haW4sXHJcbiAgc2VjdGlvbixcclxuICBwLFxyXG4gIGltZyxcclxuICBmb290ZXIsXHJcbiAgaSxcclxuICBzcGFuLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBkaXYsIHNlY3Rpb24sIGxpLCB1bCwgcCwgaDMsIHNwYW4sIGltZyB9IGZyb20gXCIuL2h5cGVydGV4dC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcclxuICBjb25zdCBtZW51Q29udGVudHMgPSBkaXYoXHJcbiAgICB7IGNsYXNzOiBcImNvbnRhaW5lclwiIH0sXHJcbiAgICBzZWN0aW9uKFxyXG4gICAgICB7IGNsYXNzOiBcIm1lbnUtY29udGVudFwiIH0sXHJcbiAgICAgIHVsKFxyXG4gICAgICAgIHsgY2xhc3M6IFwibWVudS1saXN0XCIgfSxcclxuICAgICAgICBsaShcclxuICAgICAgICAgIHsgY2xhc3M6IFwibWVudS1pdGVtXCIgfSxcclxuICAgICAgICAgIGltZyh7IGNsYXNzOiBcIm1lbnUtaXRlbS1pbWdcIiB9KSxcclxuICAgICAgICAgIGRpdihcclxuICAgICAgICAgICAgeyBjbGFzczogXCJtZW51LWl0ZW0tdGV4dFwiIH0sXHJcbiAgICAgICAgICAgIGgzKFxyXG4gICAgICAgICAgICAgIHsgY2xhc3M6IFwibWVudS1pdGVtLWhlYWRpbmdcIiB9LFxyXG4gICAgICAgICAgICAgIHNwYW4oeyBjbGFzczogXCJtZW51LWl0ZW0tbmFtZVwiIH0sIFwi2K7ZiNix2KfaqSDaqdio2KfYqCDaqdmI2KjbjNiv2YdcIiksXHJcbiAgICAgICAgICAgICAgc3Bhbih7IGNsYXNzOiBcIm1lbnUtaXRlbS1wcmljZVwiIH0sIFwiMjQwVFwiKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICAgcChcclxuICAgICAgICAgICAgeyBjbGFzczogXCJtZW51LWl0ZW0tZGVzY1wiIH0sXHJcbiAgICAgICAgICAgIFwi2qnYqNin2Kgg2qnZiNio24zYr9mHINuM2qkg2LrYsNin24wg2KfbjNix2KfZhtuMINmF2K3YqNmI2Kgg2KfYs9iqINqp2Ycg2KfYsiDar9mI2LTYqiDahtix2K7igIzaqdix2K/Zh9iMINm+24zYp9iyINmIINin2K/ZiNuM2YfigIzZh9in24wg2K7Yp9i1INiq2YfbjNmHINmF24zigIzYtNmI2K8uINin24zZhiDaqdio2KfYqCDYqNmHINi02qnZhCDYp9iz2KrbjNqpINio2YTZhtivINmIINio2KfYsduM2qkg2K/Ysdiz2Kog2Ygg2K/YsSDZhtin2LHZhtis24wg24zYpyDar9in2LIg2b7Yrtiq2Ycg2YXbjOKAjNi02YjYry5cIlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICksXHJcbiAgICAgICAgbGkoXHJcbiAgICAgICAgICB7IGNsYXNzOiBcIm1lbnUtaXRlbVwiIH0sXHJcbiAgICAgICAgICBpbWcoeyBjbGFzczogXCJtZW51LWl0ZW0taW1nXCIgfSksXHJcbiAgICAgICAgICBkaXYoXHJcbiAgICAgICAgICAgIHsgY2xhc3M6IFwibWVudS1pdGVtLXRleHRcIiB9LFxyXG4gICAgICAgICAgICBoMyhcclxuICAgICAgICAgICAgICB7IGNsYXNzOiBcIm1lbnUtaXRlbS1oZWFkaW5nXCIgfSxcclxuICAgICAgICAgICAgICBzcGFuKHsgY2xhc3M6IFwibWVudS1pdGVtLW5hbWVcIiB9LCBcItiu2YjYsdin2qkg2KzZiNis2Ycg2qnYqNin2KhcIiksXHJcbiAgICAgICAgICAgICAgc3Bhbih7IGNsYXNzOiBcIm1lbnUtaXRlbS1wcmljZVwiIH0sIFwiMjQwVFwiKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICAgcChcclxuICAgICAgICAgICAgeyBjbGFzczogXCJtZW51LWl0ZW0tZGVzY1wiIH0sXHJcbiAgICAgICAgICAgIFwi2KzZiNis2Ycg2qnYqNin2KjYjCDar9mI2LTYqiDZhdix2Log2KjYpyDYp9iv2YjbjNmH4oCM2YfYp9iMINio2LEg2LHZiNuMINiz24zYriDZvtiu2KrZhyDYtNiv2YfYjCDYt9i52YXbjCDYrtmI2LTZhdiy2Ycg2Ygg2YXYudi32LEg2KfYsiDYutiw2KfZh9in24wg2YXYrdio2YjYqCDYp9uM2LHYp9mG24xcIlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICksXHJcbiAgICAgICAgbGkoXHJcbiAgICAgICAgICB7IGNsYXNzOiBcIm1lbnUtaXRlbVwiIH0sXHJcbiAgICAgICAgICBpbWcoeyBjbGFzczogXCJtZW51LWl0ZW0taW1nXCIgfSksXHJcbiAgICAgICAgICBkaXYoXHJcbiAgICAgICAgICAgIHsgY2xhc3M6IFwibWVudS1pdGVtLXRleHRcIiB9LFxyXG4gICAgICAgICAgICBoMyhcclxuICAgICAgICAgICAgICB7IGNsYXNzOiBcIm1lbnUtaXRlbS1oZWFkaW5nXCIgfSxcclxuICAgICAgICAgICAgICBzcGFuKHsgY2xhc3M6IFwibWVudS1pdGVtLW5hbWVcIiB9LCBcItiu2YjYsdin2qkg2qnYqNin2Kgg2KjYsdqvXCIpLFxyXG4gICAgICAgICAgICAgIHNwYW4oeyBjbGFzczogXCJtZW51LWl0ZW0tcHJpY2VcIiB9LCBcIjM3MFRcIilcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgKSxcclxuICAgICAgICAgIHAoXHJcbiAgICAgICAgICAgIHsgY2xhc3M6IFwibWVudS1pdGVtLWRlc2NcIiB9LFxyXG4gICAgICAgICAgICBcItqp2KjYp9ioINio2LHar9iMINuM2qkg2LrYsNin24wg2KfbjNix2KfZhtuMINiz2YbYqtuMINin2LPYqiDaqdmHINin2LIg2KraqdmH4oCM2YfYp9uMINmG2KfYstqpINqv2YjYtNiqICjZhdi52YXZiNmE2KfZiyDar9mI2LTYqiDar9mI2LPZgdmG2K8g24zYpyDar9mI2LPYp9mE2Ycp2Iwg2KjZhyDZh9mF2LHYp9mHINix24zYstmH4oCM2YfYp9uMINm+2YbbjNixINmIINin2K/ZiNuM2YfigIzZh9in24wg2K7Yp9i12Iwg2KjbjNmGINio2LHar+KAjNmH2KfbjCDYqtix2Ycg2KrZh9uM2Ycg2YXbjOKAjNi02YjYry4g2LPZvtizINio2LEg2LHZiNuMINii2KrYtCDbjNinINqv2KfYsiDZvtiu2KrZhyDZhduM4oCM2LTZiNivXCJcclxuICAgICAgICAgIClcclxuICAgICAgICApXHJcbiAgICAgIClcclxuICAgIClcclxuICApO1xyXG5cclxuICByZXR1cm4gbWVudUNvbnRlbnRzO1xyXG59XHJcbiIsImNvbnN0IG15SW50cm8gPVxyXG4gIFwi2KfbjNmGINix2LPYqtmI2LHYp9mGINiv2LEg2YXaqdin2YbbjCDYtNqv2YHYquKAjNii2YjYsSDZiCDYr9mE2b7YsNuM2LEg2YjYp9mC2Lkg2LTYr9mHINin2LPYqi4g2KjYpyDYp9iq2YXYs9mB2LEg2K/ZiNiz2KrYp9mG2Ycg2Ygg2KLYtNm+2LLYp9mGINio2KfYp9iz2KrYudiv2KfYr9iMINin24zZhtis2Kcg2LrYsNin2YfYp9uMINiu2YjYtNmF2LLZhyDYp9iyINmF2YjYp9ivINmF2K3ZhNuMINiq2YfbjNmHINmF24zigIzYtNmI2K8uINiu2K/Zhdin2Kog2LnYp9mE24wg2Ygg2YXZhtmI24wg2KjYpyDYr9mC2Kog2KfZhtiq2K7Yp9ioINi02K/Zh9iMINiq2KzYsdio2Ycg2YXYudmG24zigIzYr9in2LHbjCDYsdinINin2LHYp9im2Ycg2YXbjOKAjNiv2YfZhtivLiDYp9uM2YYg2LHYs9iq2YjYsdin2YYg2KjZhyDYudmG2YjYp9mGINmF2YLYtdiv24wg2KjYsdin24wg2YTYsNiqINio2LHYr9mGINin2LIg2LrYsNin2YfYp9uMINiu2KfYtSDZiCDbjNqpINiq2KzYsdio2Ycg2LrYsNin24zbjCDYtNqv2YHYquKAjNin2Ybar9uM2LIg2LTZhtin2K7YqtmHINmF24zigIzYtNmI2K9cIjtcclxuXHJcbmV4cG9ydCB7IG15SW50cm8gfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBjcmVhdGVIb21lUGFnZSBmcm9tIFwiLi9ob21lcGFnZS5qc1wiO1xyXG5pbXBvcnQgY3JlYXRlTWVudSBmcm9tIFwiLi9tZW51LmpzXCI7XHJcbmltcG9ydCBjcmVhdGVDb250YWN0cyBmcm9tIFwiLi9jb250YWN0cy5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVIb21lQ29udGVudFdpdGhvdXRNYWluIH0gZnJvbSBcIi4vY29tcG9uZW50cy5qc1wiO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICBjcmVhdGVIb21lUGFnZSgpO1xyXG5cclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKTtcclxuICBjb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lXCIpO1xyXG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhY3RcIik7XHJcblxyXG4gIGZ1bmN0aW9uIHVwZGF0ZU1haW5Db250ZW50KGNvbnRlbnQpIHtcclxuICAgIHdoaWxlIChtYWluLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgbWFpbi5yZW1vdmVDaGlsZChtYWluLmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcbiAgfVxyXG5cclxuICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICB1cGRhdGVNYWluQ29udGVudChjcmVhdGVNZW51KCkpO1xyXG4gIH0pO1xyXG5cclxuICBob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICB1cGRhdGVNYWluQ29udGVudChjcmVhdGVIb21lQ29udGVudFdpdGhvdXRNYWluKCkpO1xyXG4gIH0pO1xyXG5cclxuICBjb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICB1cGRhdGVNYWluQ29udGVudChjcmVhdGVDb250YWN0cygpKTtcclxuICB9KTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJoZWFkZXIiLCJkaXYiLCJoMSIsIm5hdiIsInVsIiwibGkiLCJhIiwibWFpbiIsInNlY3Rpb24iLCJwIiwiaW1nIiwiZm9vdGVyIiwiaSIsIm15SW50cm8iLCJyZXN0YXVyYW50IiwiY3JlYXRlRm9vdGVyIiwibXlGb290ZXIiLCJjbGFzcyIsImhyZWYiLCJjcmVhdGVOYXZpZ2F0aW9uIiwibXlOYXYiLCJjcmVhdGVIZWFkZXJXaXRoTmF2aWdhdGlvbiIsInRpdGxlIiwibXlIZWFkZXIiLCJjcmVhdGVIb21lQ29udGVudFdpdGhvdXRNYWluIiwiaG9tZUNvbnRlbnRzIiwic3JjIiwiY3JlYXRlSG9tZUNvbnRlbnRXaXRoTWFpbiIsImgyIiwiY3JlYXRlQ29udGFjdHMiLCJjb250YWN0c0NvbnRlbnQiLCJjcmVhdGVIb21lUGFnZSIsImNvbnRlbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVFbGVtZW50IiwidGFnIiwiYXR0cmlidXRlcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImVsZW1lbnQiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsInNldEF0dHJpYnV0ZSIsIl9sZW4iLCJjaGlsZHJlbiIsIkFycmF5IiwiX2tleSIsImZvckVhY2giLCJjaGlsZCIsImNyZWF0ZVRleHROb2RlIiwiX2xlbjIiLCJfa2V5MiIsIl9sZW4zIiwiX2tleTMiLCJfbGVuNCIsIl9rZXk0IiwiX2xlbjUiLCJfa2V5NSIsImgzIiwiX2xlbjYiLCJfa2V5NiIsIl9sZW43IiwiX2tleTciLCJfbGVuOCIsIl9rZXk4IiwiX2xlbjkiLCJfa2V5OSIsIl9sZW4xMCIsIl9rZXkxMCIsIl9sZW4xMSIsIl9rZXkxMSIsIl9sZW4xMiIsIl9rZXkxMiIsIl9sZW4xMyIsIl9rZXkxMyIsIl9sZW4xNCIsIl9rZXkxNCIsIl9sZW4xNSIsIl9rZXkxNSIsInNwYW4iLCJfbGVuMTYiLCJfa2V5MTYiLCJfbGVuMTciLCJfa2V5MTciLCJjcmVhdGVNZW51IiwibWVudUNvbnRlbnRzIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJtZW51IiwiaG9tZSIsImNvbnRhY3QiLCJ1cGRhdGVNYWluQ29udGVudCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=