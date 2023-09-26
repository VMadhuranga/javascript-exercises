const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((acc, item) => acc + item, 0);
};

const multiply = function(...args) {
	return args.reduce((acc, item) => acc * item, 1);
};

const power = function(num, power) {
	return num ** power;
};

const factorial = function(fact) {
  if (fact === 0) {
    return 1;
  }
  let result = 1;
  for (let i = 1; i <= fact; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
