/*
Understanding JavaScript Variables

Introduction:
Variables in JavaScript are used to store data values. They provide a way to name and refer to data that can change during the execution of a script. There are different ways to declare variables, each with its scope and behavior.

Declaration and Assignment:

1. Declaration: Creating a variable using var, let, or const.
2. Assignment: Giving a variable a value.

var, let, and const:

1. var:
   - Historically used in JavaScript for variable declaration.
   - Has function scope, meaning it is only available within the function it is declared in.
   - Can be reassigned and updated.
*/

var myVar = "Hello, JavaScript!";
console.log(myVar); // Output: Hello, JavaScript!

/*
   - var variables can be redeclared.
   - Variables are hoisted to the top of their scope during compilation.
*/

console.log(hoistedVar); // Output: undefined
var hoistedVar = "I was hoisted!";

/*
2. let:
   - Introduced in ES6 (ECMAScript 2015) for block-scoped variables.
   - Limited to the block ({ }) in which it is declared.
   - Can be reassigned but not redeclared.
*/

let myLet = "Hello, let!";
console.log(myLet); // Output: Hello, let!

// console.log(letVariable); // This will throw an error because 'letVariable' is not defined here

/*
3. const:
   - Also introduced in ES6 for constants.
   - Has block scope like let.
   - Cannot be reassigned or redeclared.
   - Should be used for variables that should not change.
*/

const myConst = "Hello, const!";
console.log(myConst); // Output: Hello, const!

// myConst = "New Value"; // This will throw an error because you cannot reassign a constant variable

/*
Hoisting:

- Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during compilation.
- Declarations are hoisted, but assignments are not.
- Variables declared with var are hoisted to the top of their function scope.
- Variables declared with let and const are hoisted, but they are not initialized. Accessing them before the declaration will result in a ReferenceError.
*/

console.log(hoistedVar); // Output: undefined (hoisted, but not yet assigned)

var hoistedVar = "I was hoisted!";

/*
Summary:
JavaScript variables can be declared using var, let, or const.
- var has function scope and can be redeclared.
- let has block scope and can be reassigned but not redeclared.
- const has block scope and cannot be reassigned or redeclared.
- Variables declared with var are hoisted and can be accessed before the declaration.
- Variables declared with let and const are hoisted but not initialized, leading to a ReferenceError if accessed before the declaration.
*/
