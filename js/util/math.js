function sum(...rest) {
  return rest.reduce((a, b) => a + b);
}

function minus(n1, n2) {
  return n1 - n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function plus(n1, n2) {
  return n1 + n2;
}

function divide(n1, n2) {
  return n1 / n2;
}

export { minus, multiply, plus, divide };
export default sum;
