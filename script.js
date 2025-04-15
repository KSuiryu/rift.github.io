// script.js

function toggleMenu() {
  const menu = document.querySelector("nav ul");
  menu.classList.toggle("active");

  // Optional enhancement for accessibility:
  const hamburger = document.querySelector(".hamburger");
  const expanded = hamburger.getAttribute("aria-expanded") === "true" || false;
  hamburger.setAttribute("aria-expanded", !expanded);
}
