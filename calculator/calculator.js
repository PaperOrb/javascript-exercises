function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function sum(arr) {
  if (arr.length === 0) return 0;
  return arr.reduce(function (acc = 0, n) {
    return acc + n;
  });
}

function multiply(arr) {
  return arr.reduce((product, current) => {
    return product * current;
  });
}

function power(n, exponent) {
  return n ** exponent;
}

function factorial(n) {
  if (n === 0) return 1;
  for (let i = n - 1; i !== 0; --i) {
    n *= i;
  }
  return n;
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
