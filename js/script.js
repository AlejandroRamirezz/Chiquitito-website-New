"use strict";

// ---- TAB BEHAVIOR (Bookmark style) ----
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

function onTabClick(e) {
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(
      "border-softRed",
      "border-b-4",
      "md:border-b-0"
    );
  });
  panels.forEach((panel) => panel.classList.add("hidden"));

  e.target.classList.add("border-softRed", "border-b-4");
  const classString = e.target.getAttribute("data-target");

  document
    .getElementById("panels")
    .getElementsByClassName(classString)[0]
    .classList.remove("hidden");
}

// ---- HAMBURGER (adapted for Chiquitito) ----
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");
const logo = document.querySelector("img[alt='Logo Chiquitito']");

btn.addEventListener("click", navToggle);

function navToggle() {
  const open = menu.classList.contains("hidden");
  menu.classList.toggle("hidden", !open);
  document.body.classList.toggle("overflow-hidden", open);

  // Animate burger lines if desired
  btn.classList.toggle("open", open);

  // Optional logo swap (if you have dark/light versions)
  if (logo) {
    logo.setAttribute(
      "src",
      open ? "imagenes/logo_dark.webp" : "imagenes/logo.webp"
    );
  }
}

// ---- Close menu on link click ----
const menuLinks = menu.querySelectorAll("a");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
    btn.classList.remove("open");
    if (logo) logo.setAttribute("src", "imagenes/logo.webp");
  });
});
