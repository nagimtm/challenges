console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

showTosError();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  if (!tosError) {
    showTosError();
    return;
  }

  // --^-- write your code here --^--
  hideTosError();
  // eslint-disable-next-line no-alert
  alert("Form submitted");
});
