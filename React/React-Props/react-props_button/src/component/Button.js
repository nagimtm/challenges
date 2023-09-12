export function Button({ color, disabled, text, onClick }) {
  return (
    <button
      style={{
        height: "40px",
        width: "70px",
        backgroundColor: color,
        color: "white",
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
