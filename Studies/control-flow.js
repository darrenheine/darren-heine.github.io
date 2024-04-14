/*
Understanding JavaScript Control Flow

Control flow in JavaScript determines the order in which statements are executed in a script.
It allows you to make decisions, execute code conditionally, and handle different scenarios based on conditions.


1. If Statement:

The 'if' statement is used to execute a block of code if a condition is true.

Syntax:
if (condition) {
  // code block to be executed if condition is true
}

Example:
*/

let x = 10;
if (x > 5) {
  console.log("x is greater than 5"); // Output: x is greater than 5
}

/*
2. Else-If Statement:

The 'else if' statement allows you to check multiple conditions and execute a block of code
if the preceding 'if' condition is false and the 'else if' condition is true.

Syntax:
if (condition1) {
  // code block to be executed if condition1 is true
} else if (condition2) {
  // code block to be executed if condition2 is true
}

Example:
*/

let y = 7;
if (y > 10) {
  console.log("y is greater than 10");
} else if (y > 5) {
  console.log("y is greater than 5"); // Output: y is greater than 5
}

/*
3. Else Statement:

The 'else' statement is used with the 'if' statement to execute a block of code
if the 'if' condition is false.

Syntax:
if (condition) {
  // code block to be executed if condition is true
} else {
  // code block to be executed if condition is false
}

Example:
*/

let z = 2;
if (z > 5) {
  console.log("z is greater than 5");
} else {
  console.log("z is not greater than 5"); // Output: z is not greater than 5
}

/*
4. Switch Statement:

The 'switch' statement is used to perform different actions based on different conditions.

Syntax:
switch (expression) {
  case value1:
    // code block to be executed if expression equals value1
    break;
  case value2:
    // code block to be executed if expression equals value2
    break;
  default:
    // code block to be executed if expression doesn't match any case
}

Example:
*/

let fruit = "Banana";
switch (fruit) {
  case "Apple":
    console.log("Selected fruit is Apple");
    break;
  case "Banana":
    console.log("Selected fruit is Banana"); // Output: Selected fruit is Banana
    break;
  case "Orange":
    console.log("Selected fruit is Orange");
    break;
  default:
    console.log("Selected fruit is unknown");
}

/*
Summary:
- 'if' statements allow you to execute code based on a condition.
- 'else if' lets you check multiple conditions.
- 'else' executes code when all previous conditions are false.
- 'switch' is useful when you have multiple conditions to check against a single variable.
- Understanding control flow helps in writing dynamic and responsive code.
*/
