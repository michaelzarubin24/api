import { Component } from "./component";

export const toHTMLFunction = (
  instance: Component | null
): HTMLElement | null => {
  if (instance instanceof Component && instance.getTagName()) {
    const {
      getTagName,
      getClassName,
      getChildren,
      getHtml,
      getTextContent,
      getEvents,
      getAttributes,
    } = instance;

    const element = document.createElement(getTagName()!);

    if (getClassName()) {
      element.className = getClassName()!;
    }
    if (getTextContent()) {
      element.textContent = getTextContent()!;
    }
    if (getEvents()) {
      Object.entries(getEvents()!).forEach(([key, listener]) => {
        element.addEventListener(key, listener);
      });
    }

    if (getHtml()) element.insertAdjacentHTML("afterbegin", getHtml()!);

    if (getAttributes()) {
      for (const attr in getAttributes()!) {
        element.setAttribute(attr, getAttributes()![attr]);
      }
    }

    const childrenArray = getChildren();
    for (const child of childrenArray) {
      const childElement = child instanceof Component ? child.toHTML() : null;
      if (childElement) {
        element.appendChild(childElement);
      }
    }

    return element;
  }

  return null;
};
