function createElement(tag, attributes = {}, ...children) {
  const element = document.createElement(tag);

  for (const key in attributes) {
    if (attributes.hasOwnProperty(key)) {
      element.setAttribute(key, attributes[key]);
    }
  }

  children.forEach((child) => {
    if (typeof child === "string") {
      element.appendChild(document.createTextNode(child));
    } else {
      element.appendChild(child);
    }
  });

  return element;
}

function header(attributes = {}, ...children) {
  return createElement("header", attributes, ...children);
}

function div(attributes = {}, ...children) {
  return createElement("div", attributes, ...children);
}

function h1(attributes = {}, ...children) {
  return createElement("h1", attributes, ...children);
}

function h2(attributes = {}, ...children) {
  return createElement("h2", attributes, ...children);
}

function h3(attributes = {}, ...children) {
  return createElement("h3", attributes, ...children);
}

function nav(attributes = {}, ...children) {
  return createElement("nav", attributes, ...children);
}

function ul(attributes = {}, ...children) {
  return createElement("ul", attributes, ...children);
}

function li(attributes = {}, ...children) {
  return createElement("li", attributes, ...children);
}

function a(attributes = {}, ...children) {
  return createElement("a", attributes, ...children);
}

function main(attributes = {}, ...children) {
  return createElement("main", attributes, ...children);
}

function section(attributes = {}, ...children) {
  return createElement("section", attributes, ...children);
}

function footer(attributes = {}, ...children) {
  return createElement("footer", attributes, ...children);
}

function img(attributes = {}, ...children) {
  return createElement("img", attributes, ...children);
}

function p(attributes = {}, ...children) {
  return createElement("p", attributes, ...children);
}

function span(attributes = {}, ...children) {
  return createElement("span", attributes, ...children);
}

function i(attributes = {}, ...children) {
  return createElement("i", attributes, ...children);
}

export {
  header,
  nav,
  h1,
  h2,
  h3,
  div,
  ul,
  li,
  a,
  main,
  section,
  p,
  img,
  footer,
  i,
  span,
};
