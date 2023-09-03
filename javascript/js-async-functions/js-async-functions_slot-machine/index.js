import { Wheel } from "./components/Wheel/Wheel.js";
import { SpinButton } from "./components/SpinButton/SpinButton.js";
import { Machine } from "./components/Machine/Machine.js";
import { Result } from "./components/Result/Result.js";
import { getMaxCount } from "./utils/symbols.js";

console.clear();

const root = document.body;

// Assemble the machine… (nothing to change here)
const machine = Machine();
const wheel1 = Wheel();
const wheel2 = Wheel();
const wheel3 = Wheel();
machine.append(wheel1, wheel2, wheel3);
const spinButton = SpinButton();
const result = Result();
root.append(machine, spinButton, result);

// Spin the machine on button click…
// This time the function is already defined as an async function. 🫡
//                                      ↙️
spinButton.addEventListener("click", async () => {
  spinButton.disabled = true;
  try {
    result.setSpinning();

    const spins = await Promise.all(
      [wheel1, wheel2, wheel3].map((wheel) => wheel.spin())
    );

    if (getMaxCount(spins) === 3) result.setResult(100);
    if (getMaxCount(spins) === 2) result.setResult(10);
  } catch {
    result.setMachineChoked();
  } finally {
    spinButton.disabled = false;
  }
});
