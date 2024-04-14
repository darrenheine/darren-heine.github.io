/*
Understanding JavaScript Operators

Operators in JavaScript are symbols that perform operations on operands.
  - Operands can be values, variables, or expressions.
  - Operators allow you to perform calculations, manipulate values, and more.

JavaScript has various types of operators:
  - Assignment Operators
  - Arithmetic Operators
  - Comparison Operators
  - Logical Operators
  - Ternary Operator (Conditional Operator)

Assignment Operators:

Used to assign values to variables.

Operator: =
Purpose: Assigns the value on the right to the variable on the left.

*/

let x = 5;
let y = 3;

/*
Arithmetic Operators:

Used to perform mathematical calculations.

Operators: + (addition), - (subtraction), * (multiplication), / (division), % (modulo), ** (exponentiation)

*/

let additionResult = x + y;
let subtractionResult = x - y;
let multiplicationResult = x * y;
let divisionResult = x / y;
let moduloResult = x % y;
let exponentiationResult = x ** y;

console.log(additionResult); // Output: 8
console.log(subtractionResult); // Output: 2
console.log(multiplicationResult); // Output: 15
console.log(divisionResult); // Output: 1.6666666666666667
console.log(moduloResult); // Output: 2
console.log(exponentiationResult); // Output: 125

/*
Comparison Operators:

Used to compare values and return a boolean result.

Operators: == (equal to), === (strict equal to), != (not equal to), !== (strict not equal to),
           > (greater than), < (less than), >= (greater than or equal to), <= (less than or equal to)

*/

let isEqual = x == y;
let isStrictEqual = x === y;
let isNotEqual = x != y;
let isStrictNotEqual = x !== y;
let isGreaterThan = x > y;
let isLessThan = x < y;
let isGreaterOrEqual = x >= y;
let isLessOrEqual = x <= y;

console.log(isEqual); // Output: false
console.log(isStrictEqual); // Output: false
console.log(isNotEqual); // Output: true
console.log(isStrictNotEqual); // Output: true
console.log(isGreaterThan); // Output: true
console.log(isLessThan); // Output: false
console.log(isGreaterOrEqual); // Output: true
console.log(isLessOrEqual); // Output: false

/*
Logical Operators:

Used to combine or manipulate boolean values.

Operators: && (logical AND), || (logical OR), ! (logical NOT)

*/

let isTrue = true;
let isFalse = false;

let logicalAnd = isTrue && isFalse;
let logicalOr = isTrue || isFalse;
let logicalNot = !isTrue;

console.log(logicalAnd); // Output: false
console.log(logicalOr); // Output: true
console.log(logicalNot); // Output: false

/*
Ternary Operator (Conditional Operator):

A shorthand for an if-else statement.

Syntax: condition ? value1 : value2
  - If 'condition' is true, returns 'value1'.
  - If 'condition' is false, returns 'value2'.

*/

let age = 20;
let isAdult = age >= 18 ? "Yes" : "No";

console.log(isAdult); // Output: Yes

/*
  Summary: JavaScript provides a variety of operators for different purposes.
  - Assignment operators are used to assign values.
  - Arithmetic operators perform mathematical calculations.
  - Comparison operators compare values.
  - Logical operators manipulate boolean values.
  - Ternary operator provides a shorthand for conditional expressions.
  Remember: Each operator has its own specific use case and behavior.
*/
