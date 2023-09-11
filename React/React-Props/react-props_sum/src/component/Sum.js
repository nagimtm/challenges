export function Sum({ valueA, valueB }) {
  const result = valueA + valueB;
  return (
    <div>
      <p>
        Sum of Two props is: <strong>{result}</strong>
      </p>
    </div>
  );
}
