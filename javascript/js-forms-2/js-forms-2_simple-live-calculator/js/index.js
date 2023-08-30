console.clear();

const firstInput = document.querySelector('[data-js="firstValue"]');
const secondInput = document.querySelector('[data-js="secondValue"]');
const result = document.querySelector('[data-js="result"]');
result.textContent = 0;
firstInput.addEventListener("input", (event) => {
  event.preventDefault();
  return (result.textContent = `${
    Number(firstInput.value) * Number(secondInput.value)
  }`);
});

secondInput.addEventListener("input", (event) => {
  event.preventDefault();
  return (result.textContent = `${
    Number(firstInput.value) * Number(secondInput.value)
  }`);
});
