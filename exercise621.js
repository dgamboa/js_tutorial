// Exercise 6.2.1
// Write two filter functions that return the Dakotas: one using String#includes (Section 2.5) to test for the presence of the string “Dakota” and one using a regex that tests for the length of the split array being 2

let states = ["Kansas", "Nebraska", "South Dakota", "North Dakota"]

// **Return the Dakotas**

// Filter function using String#includes
function includesDakotas(elements) {
  return elements.filter(element => element.includes("Dakota"));
}

console.log(includesDakotas(states));

// Filter function using regex testing the length of the array being 2
function regexDakotas(elements) {
  return elements.filter(element => element.split(/\s+/).length === 2);
}

console.log(regexDakotas(states));
