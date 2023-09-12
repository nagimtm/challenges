// Implement the launch sequence function here and export it as the default export.
import { countdown } from "./core/countdown.js";
import { deployPayload } from "./core/deploy.js";
import { fuel } from "./core/fuel.js ";
import { liftoff } from "./core/liftoff.js";
import { loadPayload } from "./core/load.js";
import { NFSAT, FISHSAT } from "./payload/satellites.js";

export default function launchSequence() {
  loadPayload(NFSAT);
  loadPayload(FISHSAT);
  fuel();
  const countdowns = () => countdown();
  const times = 5;
  Array.from({ length: times }, () => countdowns());
  liftoff();
  deployPayload();
}
