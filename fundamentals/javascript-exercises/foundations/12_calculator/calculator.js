const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((total, num) => total + num, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, num) => total * num, 1);
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
  let num = 1;
  for (let i=1 ; i<(a+1) ; i++) {
    num *= i;
  }
  return num;
};

// npm test calculator.spec.js

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
