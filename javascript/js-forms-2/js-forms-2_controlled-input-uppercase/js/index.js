console.clear();

const input = document.querySelector('[data-js="toUpperCase"]');

input.addEventListener("input", (event) => {
  const inputValue = event.target.value.toUpperCase();
  return (input.value = inputValue);
});
