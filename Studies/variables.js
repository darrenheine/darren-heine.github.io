/*
Understanding JavaScript Variables

What are Variables?

Definition: Variables in JavaScript are containers for storing data values.
  They are like symbolic names for values that allow you to refer to those values by name.

In JavaScript, variables can hold different types of data:
  -Numbers
  -Strings
  -Booleans
  -Arrays
  -Objects
  -Functions
  -...and more

Why are They Useful?

Dynamic Typing: JavaScript variables do not have a fixed type. The same variable can hold different types of values.

Data Storage: Variables are essential for storing and manipulating data in programs.

Flexibility: They allow us to write flexible and reusable code by storing values that can change during the execution of a script.


A variable declaration with 'let' keyword.
The 'let' keyword allows you to declare a variable that can be reassigned.
*/

let myVariable = "Hello, JavaScript!";

console.log(myVariable); // Output: Hello, JavaScript!

/*
  Variable Scope: 'let' variables are block-scoped.
  They are accessible only within the block or function where they are defined.
*/

{
  let blockVariable = "I'm inside a block!";
  console.log(blockVariable); // Output: I'm inside a block!
}

// console.log(blockVariable); // This will throw an error because 'blockVariable' is not defined here

/*
  A constant variable declaration with 'const' keyword.
  The 'const' keyword declares a constant variable that cannot be reassigned.
*/

const pi = 3.14159;

console.log(pi); // Output: 3.14159

// pi = 3; // This will throw an error because you cannot reassign a constant variable

/*
  Variable Hoisting: Variable declarations are hoisted to the top of their scope during compilation.
  However, the assignment does not get hoisted, so variables are initialized with 'undefined' before they are assigned a value.
*/

console.log(hoistedVar); // Output: undefined
var hoistedVar = "I was hoisted!";

/*
  Summary: Variables in JavaScript are containers for storing data values.
  'let' allows reassignment and is block-scoped, while 'const' creates constants that cannot be reassigned.
  Remember: Use 'let' for variables that will change, 'const' for constants, and be aware of variable hoisting.
  */
