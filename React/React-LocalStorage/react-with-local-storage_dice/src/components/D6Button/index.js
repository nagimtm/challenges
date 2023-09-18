import D6 from "../D6";
import "./D6Button.css";

export function D6Button({ value, onRole }) {
  return (
    <button className="d6-button" type="button" onClick={onRole}>
      <D6 value={value} />
    </button>
  );
}
