const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((acc, i) => acc + i, 0);
};

const multiply = function (arr) {
  return arr.reduce((acc, i) => acc * i, 1);
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
