/*
Understanding JavaScript Data Types

Introduction:
JavaScript is a dynamically typed language, which means variables can hold different types of data.
Understanding the various data types is crucial for writing effective and bug-free JavaScript code.

Data Types in JavaScript:

1. Number:
   - Represents numeric values.
   - Examples: 42, 3.14, -10, 0.12345, etc.
*/

let myNumber = 42;
console.log(myNumber); // Output: 42

/*
2. String:
   - Represents textual data.
   - Surrounded by single ('') or double ("") quotes.
   - Examples: "Hello, World!", 'JavaScript', "12345", etc.
*/

let myString = "Hello, World!";
console.log(myString); // Output: Hello, World!

/*
3. Boolean:
   - Represents true or false values.
   - Used for logical operations and conditions.
   - Examples: true, false.
*/

let isTrue = true;
console.log(isTrue); // Output: true

/*
4. Array:
   - Represents a collection of elements.
   - Ordered, indexed, and can hold multiple data types.
   - Examples: [1, 2, 3], ["apple", "banana", "cherry"], [true, false, true].
*/

let myArray = [1, 2, 3];
console.log(myArray); // Output: [1, 2, 3]

/*
5. Object:
   - Represents a collection of key-value pairs.
   - Key (property name) and Value (property value) pairs.
   - Examples:
*/

let myObject = {
  name: "John",
  age: 30,
  isStudent: false,
};
console.log(myObject); // Output: { name: 'John', age: 30, isStudent: false }

/*
6. Function:
   - Represents reusable blocks of code.
   - Can be called with arguments to perform a task.
   - Examples:
*/

function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice")); // Output: Hello, Alice!

/*
7. Undefined:
   - Represents a variable that has been declared but not assigned a value.
   - When a variable is declared but not initialized.
*/

let undefinedVariable;
console.log(undefinedVariable); // Output: undefined

/*
8. Null:
   - Represents the intentional absence of any object value.
   - It is a special value meaning "no value" or "empty".
*/

let nullVariable = null;
console.log(nullVariable); // Output: null

/*
9. NaN (Not-a-Number):
   - Represents a value that is not a legal number.
*/

let result = 10 / "Hello";
console.log(result); // Output: NaN

/*
10. Infinity and -Infinity:
   - Represent positive and negative infinity.
*/

let positiveInfinity = Infinity;
let negativeInfinity = -Infinity;

console.log(positiveInfinity); // Output: Infinity
console.log(negativeInfinity); // Output: -Infinity

/*
Difference between Primitive and Complex Data Types:
- Primitive data types are stored directly in the location the variable accesses.
  - When you manipulate a primitive value, you are working directly on the value itself.
  - Passed to a function by copy: When passed to a function, a new copy of the value is created.
    Any changes made inside the function do not affect the original value.

- Complex data types are stored as references.
  - When you manipulate a complex value, you are working with a reference (memory address) to the value.
  - Passed to a function by reference: When passed to a function, it is the reference to the object that is copied.
    Changes made to the object inside the function will affect the original object.
*/

let num1 = 10; // Primitive
let num2 = num1; // Copy of num1

num2 = 20;
console.log(num1); // Output: 10 (num1 remains unchanged)

let arr1 = [1, 2, 3]; // Complex
let arr2 = arr1; // Reference to arr1

arr2.push(4);
console.log(arr1); // Output: [1, 2, 3, 4] (arr1 is modified because arr2 is pointing to the same array)

/*
Summary:
JavaScript offers a variety of data types, each with its own characteristics:
- Numbers, Strings, and Booleans for basic data storage.
- Arrays and Objects for storing collections of data.
- Functions for reusable blocks of code.
- Undefined and Null for representing absence of values.
- NaN, Infinity, and -Infinity for special numerical cases.
Primitive data types are passed by copy, while complex data types are passed by reference.
Understanding these distinctions is essential for writing efficient and effective JavaScript code.
*/
