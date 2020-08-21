// Exercise 6.3.4
// (1) Using reduce, write a function that returns the product of all the elements in an array. Hint: Where += adds, *= multiplies.

// product: Functional solution
let numbers = [1, 2, 3, 4];

function arrayProduct(elements) {
  return elements.reduce((total, n) => { return total *= n });
}

console.log(arrayProduct(numbers));

// (2) Remove the newlines in the reduce solution from Listing 6.9 to turn it into a single long line. Does it still give the right answer? How long is the resulting line of code?

// lengths: Functional solution in one line
let states = ["Kansas", "Nebraska", "South Dakota", "North Dakota"]

function functionalLengths(elements) {
  return elements.reduce((lengths, element) => { lengths[element] = element.length; return lengths; }, {});
}

console.log(functionalLengths(states));
