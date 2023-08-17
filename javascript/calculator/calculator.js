// Calculator App

// Defining and assigning meal amount.
let mealAmount = 82.0;

// Defining and assigning tip percentage.
let tipPercentage = 5;

// Defining and assigning tip amount.
let tipAmount = (mealAmount / 100) * tipPercentage;

//calculating total cost.
let totalCost = mealAmount + tipAmount;

const text = "The total cost of your bill is: ";
const currency = " euros.";

// Printing total cost with printing text.
console.log(text + totalCost + currency);
