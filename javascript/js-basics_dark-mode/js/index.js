console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const btnDark = document.querySelector('[data-js="dark-mode-button"]');
const btnLight = document.querySelector('[data-js="light-mode-button"]');
const btnToggle = document.querySelector('[data-js="toggle-button"]');

function darkMode() {
  bodyElement.classList.add("dark");
}

function lightMode() {
  bodyElement.classList.remove("dark");
}

function toggle() {
  bodyElement.classList.toggle("dark");
}

btnDark.addEventListener("click", darkMode);
btnLight.addEventListener("click", lightMode);
btnToggle.addEventListener("click", toggle);
