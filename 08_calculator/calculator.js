const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
   //compute sum of an array with only one number
   let total = arr.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
   }, 0);
	
   return total;
};

const multiply = function(arr) {
   
   let result = arr.reduce((accumulator, currentValue) => {
      return accumulator * currentValue
   });

   return result;
};

const power = function() {
	
};

const factorial = function() {
	
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
