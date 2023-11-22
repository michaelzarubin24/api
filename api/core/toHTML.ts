import { Component } from "./component";

export const toHTMLFunction = (instance: Component): HTMLElement => {
  if (instance instanceof Component) {
    const { tagName, className, children, html, textContent, events, attrs } =
      instance;
    const element = document.createElement(tagName);

    if (className) {
      element.className = className;
    }
    if (textContent) {
      element.textContent = textContent;
    }
    if (events) {
      for (let key in events) {
        element.addEventListener(key, events[key]);
      }
    }

    if (!children) return element;

    if (html) element.insertAdjacentHTML("afterbegin", html);

    if (attrs) {
      for (const attr in attrs) {
        element.setAttribute(attr, attrs[attr]);
      }
    }
    const childrenArray = Array.isArray(children) ? children : [children];
    for (const child of childrenArray) {
      if (child instanceof Component) element.append(child.toHTML());
    }

    return element;
  }

  return null;
};
