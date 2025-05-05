const convertToCelsius = function(f) {
  
  let temp = (f - 32) * 5 / 9;
  let rounded = Math.round(temp * 10) / 10;

  return rounded;
  
};

const convertToFahrenheit = function(c) {

  let temp = (c * 9 / 5) + 32;
  let rounded = Math.round(temp * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
