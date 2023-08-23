console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  const dataForm = new FormData(event.target);
  const data = Object.fromEntries(dataForm);
  if (data.operator == "addition") {
    result = add(data.numberA * 1, data.numberB * 1);
  } else if (data.operator == "subtraction") {
    result = subtract(data.numberA, data.numberB);
  } else if (data.operator == "multiplication") {
    result = multiply(data.numberA, data.numberB);
  } else if (data.operator == "division") {
    result = divide(data.numberA, data.numberB);
  }

  // --^-- write your code here --^--
  return (resultOutput.textContent = result);
});
