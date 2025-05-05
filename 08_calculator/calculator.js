const add = function(a, b) {
	let result = a + b;
  return result;
};

const subtract = function(a, b) {
  let result = a - b;
	return result;
};

const sum = function(numbers) {
  let sumUsingMap = numbers.map(num => num).reduce((acc, curr) => acc + curr, 0);
	return sumUsingMap;
};

const multiply = function(numbers) {
  let sumUsingMap = numbers.map(num => num).reduce((acc, curr) => acc * curr);
	return sumUsingMap;
};

const power = function(number, power) {
  result = number ** power;
  return result;
	
};

const factorial = function(n) {
	let res = 1;
  for (let i = 1; i <= n; i++) {
    res *= i;
  }
  return res;
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
