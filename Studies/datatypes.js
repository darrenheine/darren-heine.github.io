/*
Understanding JavaScript Data Types

What are Data Types?

Definition: Data types in JavaScript refer to the kinds of values that can be represented and manipulated in a program.
  JavaScript has several primitive data types and complex data types.

Primitive Data Types:

1. Numbers:
   - Represents both integer and floating-point numbers.
   - Example: 42, 3.14, -10

2. Strings:
   - Represents sequences of characters, enclosed in single or double quotes.
   - Example: "Hello, World!", 'JavaScript'

3. Booleans:
   - Represents true or false values.
   - Example: true, false

4. Undefined:
   - Represents the absence of a value.
   - Example: let myVar;

5. Null:
   - Represents an intentional absence of any object value.
   - Example: let myVar = null;

Complex Data Types:

1. Objects:
   - Used to store collections of key-value pairs.
   - Example: { name: "John", age: 30 }

2. Arrays:
   - Used to store multiple values in a single variable.
   - Example: [1, 2, 3, 4, 5]

3. Functions:
   - Special type of object used for code reusability.
   - Example: function add(a, b) { return a + b; }

Why are They Important?

Data Handling: Different data types allow for different ways of storing and manipulating data.

Behavior: Each data type behaves differently when used in operations or passed as arguments to functions.

Memory Management: Understanding data types helps in efficient memory allocation and management.


Examples of JavaScript Data Types:

1. Number:
*/

let num = 42;
console.log(typeof num); // Output: number

/*
2. String:
*/

let str = "Hello, JavaScript!";
console.log(typeof str); // Output: string

/*
3. Boolean:
*/

let isTrue = true;
console.log(typeof isTrue); // Output: boolean

/*
4. Undefined:
*/

let undef;
console.log(typeof undef); // Output: undefined

/*
5. Null:
*/

let n = null;
console.log(typeof n); // Output: object (Note: This is an odd behavior in JavaScript)

/*
6. Object:
*/

let obj = { name: "John", age: 30 };
console.log(typeof obj); // Output: object

/*
7. Array:
*/

let arr = [1, 2, 3, 4, 5];
console.log(typeof arr); // Output: object

/*
8. Function:
*/

let add = function (a, b) {
  return a + b;
};
console.log(typeof add); // Output: function

/*
  Summary: JavaScript has various data types including numbers, strings, booleans, undefined, null, objects, arrays, and functions.
  Each type serves a different purpose and understanding them is crucial for working with data in JavaScript.
  Remember: Use typeof operator to determine the type of a variable or value.
  */
