import { getRandomColor } from "../../utils/randomColor.js";
export function Pentagon() {
  const pentagon = document.createElement("div");
  pentagon.classList.add("pentagon");
  pentagon.addEventListener("click", () => {
    // defining gerRandom color to pentagon's style
    pentagon.style.backgroundColor = getRandomColor();
  });
  return pentagon;
}
