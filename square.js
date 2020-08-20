// Standard function notation:
function squareFunctionA(number) {
  return number * number;
}

function squareFunctionB(number) {
  return number ** 2;
}

// ES6 (aka fat arrow) function notation:
let altSquareFunctionA = (number) => {
  return number * number;
}

let altSquareFunctionB = (number) => {
  return number ** 2;
}

// More compact arrow functions:
let compactSquareA = number => number * number;
let compactSquareB = number => number ** 2;

console.log(squareFunctionA(5));
console.log(squareFunctionB(5));
console.log(altSquareFunctionA(5));
console.log(altSquareFunctionB(5));
console.log(compactSquareA(5));
console.log(compactSquareB(5));
