let states = ["Kansas", "Nebraska", "South Dakota", "North Dakota"]

// Returns a URL-friendly version of a string.
//   Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-")
}

// Exercise 6.1.1
//   Function that takes in the states variable and returns array of URLs
function expandUrls(string) {
  return `https://example.com/${urlify(string)}`
}

function fullUrls(elements) {
  return elements.map(element => expandUrls(element));
}

console.log(fullUrls(states));
