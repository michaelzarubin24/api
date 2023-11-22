import { Component } from "../core/component";

const root = document.querySelector("body");

const overlay = new Component({
  tagName: "div",
  className: "overlay",
  events: {
    click: () => {
      document.querySelector(".overlay")?.classList.remove("active");
      document.querySelector(".popup")?.classList.remove("active");
    },
  },
});

const modal = new Component({
  tagName: "button",
  id: "modal-btn",
  textContent: "NEW GAME",
  events: {
    click: () => {
      document.querySelector(".popup")?.classList.add("active");
      document.querySelector(".overlay")?.classList.add("active");
    },
  },
});

const closeBtn = new Component({
  tagName: "div",
  className: "close-btn",
  textContent: "\u00D7",
  events: {
    click: () => {
      document.querySelector(".popup")?.classList.remove("active");
      document.querySelector(".overlay")?.classList.remove("active");
    },
  },
});

const button = [
  {
    id: "here",
    textContent: "Here",
  },
  {
    id: "login",
    textContent: "login",
  },
];

const buttonElements = button.map((btn) => {
  return new Component({
    tagName: "button",
    id: btn.id,
    textContent: btn.textContent,
  });
});

// Create the form component
const form = new Component({
  tagName: "div",
  className: "form",
  children: [...buttonElements],
});

// Create a popup component with close button and form
export const popup = new Component({
  tagName: "div",
  className: "popup",
  children: [closeBtn, form],
});

const app = new Component({
  tagName: "div",
  id: "app",
  children: [modal, popup, overlay],
});

const App = app.toHTML();
if (root) {
  root.appendChild(App);
}
