/*
Understanding JavaScript Operators

Operators in JavaScript are symbols that perform operations on variables and values.

Assignment Operators:

1. '=' (Assignment):
   - Assigns a value to a variable.
   - Example:

*/

let x = 10;
console.log(x); // Output: 10

/*
Arithmetic Operators:

2. '+' (Addition):
   - Adds two operands.
   - Example:
*/

let additionResult = 5 + 3;
console.log(additionResult); // Output: 8

/*
3. '-' (Subtraction):
   - Subtracts the right operand from the left operand.
   - Example:
*/

let subtractionResult = 10 - 5;
console.log(subtractionResult); // Output: 5

/*
4. '*' (Multiplication):
   - Multiplies two operands.
   - Example:
*/

let multiplicationResult = 6 * 4;
console.log(multiplicationResult); // Output: 24

/*
5. '/' (Division):
   - Divides the left operand by the right operand.
   - Example:
*/

let divisionResult = 20 / 5;
console.log(divisionResult); // Output: 4

/*
6. '%' (Modulus):
   - Returns the remainder when the left operand is divided by the right operand.
   - Example:
*/

let modulusResult = 10 % 3;
console.log(modulusResult); // Output: 1

/*
Comparison Operators:

7. '==' (Equal to):
   - Compares two values for equality.
   - Example:
*/

console.log(5 == 5); // Output: true

/*
8. '!=' (Not equal to):
   - Compares two values for inequality.
   - Example:
*/

console.log(5 != 10); // Output: true

/*
9. '>' (Greater than):
   - Checks if the left operand is greater than the right operand.
   - Example:
*/

console.log(10 > 5); // Output: true

/*
10. '<' (Less than):
    - Checks if the left operand is less than the right operand.
    - Example:
*/

console.log(3 < 8); // Output: true

/*
11. '>=' (Greater than or equal to):
    - Checks if the left operand is greater than or equal to the right operand.
    - Example:
*/

console.log(7 >= 7); // Output: true

/*
12. '<=' (Less than or equal to):
    - Checks if the left operand is less than or equal to the right operand.
    - Example:
*/

console.log(5 <= 4); // Output: false

/*
Logical Operators:

13. '&&' (Logical AND):
    - Returns true if both operands are true.
    - Example:
*/

console.log(true && true); // Output: true

/*
14. '||' (Logical OR):
    - Returns true if at least one operand is true.
    - Example:
*/

console.log(true || false); // Output: true

/*
15. '!' (Logical NOT):
    - Returns the opposite of the operand's boolean value.
    - Example:
*/

console.log(!true); // Output: false

/*
Unary Operators:

16. '+' (Unary Plus):
    - Attempts to convert the operand into a number.
    - Example:
*/

let unaryPlusResult = +"5";
console.log(unaryPlusResult); // Output: 5 (number)

/*
17. '-' (Unary Negation):
    - Negates the operand.
    - Example:
*/

let unaryNegationResult = -10;
console.log(unaryNegationResult); // Output: -10

/*
Ternary Operator:

18. '?' (Ternary Operator):
    - An alternative to the 'if...else' statement.
    - Syntax: condition ? expr1 : expr2
    - If the condition is true, expr1 is returned; otherwise, expr2 is returned.
    - Example:
*/

let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // Output: Adult

/*
Summary:
JavaScript offers a wide range of operators for various operations:
- Assignment operators for assigning values.
- Arithmetic operators for mathematical calculations.
- Comparison operators for comparing values.
- Logical operators for logical operations.
- Unary operators for operations on a single operand.
- Ternary operator for conditional expressions.

Understanding these operators is crucial for writing effective JavaScript code.
*/
