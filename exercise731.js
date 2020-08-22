// Adds last method to Array that returns the last element by slicing.
Array.prototype.last = function last() {
  return this.slice(-1)[0];
}

// Adds last method to Array that returns the last element by direct indexing.
Array.prototype.lastIndex = function lastIndex() {
  return this[this.length - 1];
}

// Adds blank method to the String object prototype that returns true if empty.
String.prototype.blank = function blank() {
  return !!this.match(/^\s*$/g);
}

// Adds 'reverse' to all strings.
String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.content.toLowerCase();
  }

  // Returns true for a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}
