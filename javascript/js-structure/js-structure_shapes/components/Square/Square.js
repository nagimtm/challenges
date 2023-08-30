import { getRandomColor } from "../../utils/randomColor.js";
export function Square() {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("click", () => {
    // defining gerRandom color to square's style
    square.style.backgroundColor = getRandomColor();
  });
  return square;
}
