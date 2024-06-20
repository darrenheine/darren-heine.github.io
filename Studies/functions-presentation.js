/*
Function: A set of statements that perform a task or calculate a value.
Think of it as a reusable block of code that you can call whenever you need it.
*/

// Synatx of a fuunction
function greet() {
  console.log("Hello, World!");
}

/*
  function: Keyword to declare a function.
  greet: Name of the function.
  (): Parentheses for any parameters (we'll cover this later).
  {}: Curly braces for the function body.
  */

// Calling a function
greet(); // Outputs: Hello, World!

/*
  Use the function name followed by parentheses to call it.
  This executes the code inside the function.
  */

// Parameters and Arguments
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Darren"); // Outputs: Hello, Darren!
greet("John"); // Outputs: Hello, John!

/*
  name is a parameter: a placeholder for a value.
  "Darren" and "John" are arguments: actual values passed to the function.
  */

// Return statement
function add(a, b) {
  return a + b;
}

var result = add(3, 5); // result = 8
console.log(result); // Outputs: 8

/*
  return: Keyword to send back a value from the function.
  Allows you to store or use the result of the function call.
  */

// Function Expression
var greet = function () {
  console.log("Hello, from a function expression!");
};

greet(); // Outputs: Hello, from a function expression!

/*
  Functions can be assigned to a variable.
  Useful for creating anonymous functions.

  Functions are building blocks of Javascript.
  They allow you to write reusable code!
  */
