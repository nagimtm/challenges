import { loadPayload } from "./core/load.js";
import { fuel } from "./core/fuel.js";
import { countdown } from "./core/countdown.js";
import { liftoff } from "./core/liftoff.js";
import { deployPayload } from "./core/deploy.js";
import { NFSAT, FISHSAT } from "./payload/satellites.js";
// Implement the launch sequence function here and export it as the default export.
export default function launchSequence() {
  loadPayload(NFSAT);
  loadPayload(FISHSAT);
  fuel();

  const func = () => countdown();
  const times = 5;

  Array.from({ length: times }, () => func());

  liftoff();

  deployPayload();
}
