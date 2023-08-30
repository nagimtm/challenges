// importing getRandomColor function form utils folder
import { getRandomColor } from "./utils/randomColor.js";
import { Circle } from "./components/Circle/Circle.js";

const root = document.getElementById("root");

// console.log(Circle);
const circleElement = Circle();
// console.log(circle);
// const circle = document.createElement("div");
// circle.classList.add("circle");
// circle.addEventListener("click", () => {
//   // defining gerRandom color to circle's style
//   circle.style.backgroundColor = getRandomColor();
// });

const square = document.createElement("div");
square.classList.add("square");
square.addEventListener("click", () => {
  // defining gerRandom color to square's style
  square.style.backgroundColor = getRandomColor();
});

const pentagon = document.createElement("div");
pentagon.classList.add("pentagon");
pentagon.addEventListener("click", () => {
  // defining gerRandom color to pentagon's style
  pentagon.style.backgroundColor = getRandomColor();
});

root.append(circleElement, square, pentagon);
