console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');
let count = 1;
addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container

  const addToastMessage = document.createElement("li");
  count++;
  addToastMessage.innerHTML = `I'm ${count}' toast message.`;
  addToastMessage.classList.add("toas-container__message");
  return toastContainer.append(addToastMessage);
});

clearButton.addEventListener("click", () => {
  // toastContainer.remove()
  count = 0;

  toastContainer.innerHTML = "";
});
