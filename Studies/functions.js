/*
Understanding JavaScript Functions

Introduction:
Functions are one of the fundamental building blocks of JavaScript. They are reusable blocks of code that perform a specific task when called.
Functions make code more organized, modular, and easier to maintain.

Two Phases of Using Functions:
First we must define or declare a function with a name and its implementation. This is called "function declaration" or "function definition".
Next, we can execute (or two other words for executing a function: invoke, call) a function by using its name followed by parentheses ().

Difference between Parameters and Arguments:
- Parameters are variables listed inside the parentheses of a function definition.
- Arguments are the values passed to the function when it is called.
*/

// Syntax for a Named Function:
function functionName(parameters) {
  // Function body
  return value; // Optional
}

// Assigning a Function to a Variable:
const add = function (a, b) {
  return a + b;
};

// Executing the function assigned to the 'add' variable
console.log(add(2, 3)); // Output: 5

/*

Specifying Inputs and Outputs:
- Functions can optionally take inputs by defining parameters inside the parentheses.
- Outputs can be specified by using the 'return' keyword followed by the value to return.

Scope:
- Functions can see and modify variables in their parent or global scopes.
- However, variables declared inside a function are not accessible outside of that function.
- The inverse is not true: variables declared outside of a function are accessible inside that function.

Closures:
- Functions form closures around the data they house.
- If an object returned from the function is held in memory (referenced), the closure stays alive.
- This allows data to continue to exist in these closures.

Examples:

*/

// Function with parameters and return statement
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice")); // Output: Hello, Alice!

// Function without parameters and return statement
function sayHello() {
  console.log("Hello!");
}

sayHello(); // Output: Hello!

// Function modifying variable in parent scope
let counter = 0;

function incrementCounter() {
  counter++;
}

incrementCounter();
console.log(counter); // Output: 1

// Closure example
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
console.log(double(5)); // Output: 10

/*

Summary:
JavaScript functions are essential for code organization and reusability.
- Define functions with 'function' keyword followed by a name and parameters.
- Assign functions to variables for reusability.
- Functions can take inputs (parameters) and return outputs using 'return'.
- Functions can see and modify variables in parent or global scopes.
- Closures keep data alive in functions, allowing for powerful patterns.

*/
