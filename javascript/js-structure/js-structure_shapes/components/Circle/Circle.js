import { getRandomColor } from "../../utils/randomColor.js";
export function Circle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.addEventListener("click", () => {
    // defining gerRandom color to circle's style
    circle.style.backgroundColor = getRandomColor();
  });
  return circle;
}
