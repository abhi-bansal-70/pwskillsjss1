let n = 50; // number of rows
let string = ""; // empty string to store the pattern

// outer loop for the rows
for (let i = 1; i <= n; i++) {
  // inner loop for the columns
  for (let j = 1; j <= i; j++) {
    // append a star to the string
    string += "*";
  }
  // append a newline to the string
  string += "\n";
}

// print the string
console.log(string);
