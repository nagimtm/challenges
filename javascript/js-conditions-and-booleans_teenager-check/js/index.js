const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
const output = document.querySelector('[data-js="age-output"]');

button.addEventListener("click", () => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!
  const age = Number(input.value);

  // Exercise:
  // Use conditions and the logical AND operator to write
  // "You are a teen." or "You are not a teen." into the output.
  // if (age > 12 && age < 19) {
  //   // let message = "You are a teen.";
  //   output.innerHTML = "You are a teen.";
  // } else {
  //   // let message = "You are not a teen.";
  //   output.innerHTML = "You are not a teen.";
  // }

  output.textContent =
    age > 12 && age < 19 ? "You are a teen." : "You are not a teen.";
});
