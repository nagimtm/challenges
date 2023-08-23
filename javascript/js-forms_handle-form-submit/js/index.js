console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  const dataForm = new FormData(event.target);
  const data = Object.fromEntries(dataForm);
  console.log(data);
  let ageBadness = data.age * 1 + data.badness * 1;
  console.log(ageBadness);
  event.preventDefault();
});
