console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const dataForm = new FormData(event.target);
  const data = Object.fromEntries(dataForm);
  console.log(data.headline, data.task);

  const list = document.createElement("li");
  list.textContent = data.headline;
  const toDoTask = document.createElement("p");
  toDoTask.textContent = data.task;
  list.append(toDoTask);
  todoList.append(list);
  form.reset();
  form.elements.headline.focus();
  console.log(form.elements);
});
