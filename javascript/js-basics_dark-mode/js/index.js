console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const btnDark = document.querySelector('[data-js="dark-mode-button"]');
const btnLight = document.querySelector('[data-js="light-mode-button"]');
const btnToggle = document.querySelector('[data-js="toggle-button"]');

<<<<<<< HEAD
// console.log(bodyElement);
// console.log(btnDark);

btnDark.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

btnLight.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

btnToggle.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
=======
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
>>>>>>> 203ec8841d973d90bf71699aaa8748da1e543749
