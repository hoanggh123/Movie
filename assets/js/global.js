"use strict";
const addEventOnElements = function (elements, eventType, callback) {
  for (const elem of elements) elem.addEventListener(eventType, callback);
};

const searchBox = document.querySelector("[search-box]");

const searchTogglers = document.querySelectorAll("[search-toggler]");
const searchClosers = document.querySelectorAll("[search-close]");

addEventOnElements(searchTogglers, "click", () => {
  searchBox.classList.add("active");
});

addEventOnElements(searchClosers, "click", () => {
  searchBox.classList.remove("active");
});

