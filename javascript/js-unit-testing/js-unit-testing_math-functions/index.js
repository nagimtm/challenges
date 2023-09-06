export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  if (a < 0) {
    return a * b;
  }
  if (b < 0) {
    return a * b;
  }
  if (a < 0 && b < 0) {
    return a * b;
  }
  return a * b;
}

export function divide(a, b) {
  if (b === 0) {
    return "You should not do this!";
  }

  return a / b;
}
