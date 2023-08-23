/*

Important: Create a fork for each sub challenge!
Implement the following functionality:

1. On button click: The value of the first input field is 
copied into the second input field

2. On button click: The value of the first input field is 
copied in uppercase into the second input field

3. On button click: The values of the two input fields switch.

*/

const firstInput = document.querySelector("[data-js=first-input]");
const secondInput = document.querySelector("[data-js=second-input]");
const button = document.querySelector("[data-js=button]");
let count = 0;
button.addEventListener("click", () => {
  console.log(count);
  if (count === 0) {
    secondInput.value = firstInput.value;
    count++;
  } else if (count === 1) {
    let upperFirstInput = firstInput.value.toUpperCase();
    secondInput.value = upperFirstInput;
    count++;
  } else if (count === 2) {
    let valFirst = firstInput.value;
    let valSecond = secondInput.value;
    firstInput.value = valSecond;
    secondInput.value = valFirst;
    count = 0;
  }
});
