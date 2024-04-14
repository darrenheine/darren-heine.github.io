/*
Mastering JavaScript String Manipulation

What are Strings?

Definition: Strings are sequences of characters, such as "hello" or "JavaScript".
  They are used to represent text and are one of the most commonly used data types in JavaScript.

In JavaScript, strings are immutable, meaning once they are created, they cannot be changed.
  However, you can create new strings based on existing ones using various string manipulation methods.


String Concatenation with the '+' Operator

The '+' operator is used to concatenate (join) two or more strings together.
*/

let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;

console.log(fullName); // Output: John Doe

/*
  String Length with '.length' property
  
  The '.length' property of a string returns the number of characters in the string.
*/

let message = "Hello, World!";
let messageLength = message.length;

console.log(messageLength); // Output: 13

/*
  Accessing Characters with Bracket Notation
  
  Individual characters in a string can be accessed using bracket notation [ ].
  Remember: JavaScript uses zero-based indexing, so the first character is at index 0.
*/

let greeting = "Hello, JavaScript!";
let firstLetter = greeting[0]; // 'H'
let thirdLetter = greeting[2]; // 'l'

console.log(firstLetter, thirdLetter); // Output: H l

/*
  Changing Case with '.toUpperCase()' and '.toLowerCase()'
  
  JavaScript provides methods to change the case of a string.
  '.toUpperCase()' converts all characters to uppercase, while '.toLowerCase()' converts to lowercase.
*/

let text = "Hello, JavaScript!";
let upperCaseText = text.toUpperCase();
let lowerCaseText = text.toLowerCase();

console.log(upperCaseText); // Output: HELLO, JAVASCRIPT!
console.log(lowerCaseText); // Output: hello, javascript!

/*
  Finding Substrings with '.indexOf()' and '.substring()'
  
  '.indexOf()' returns the index of the first occurrence of a specified substring within a string.
  '.substring()' extracts a part of the string and returns it as a new string.
*/

let sentence = "JavaScript is awesome!";
let indexOfIs = sentence.indexOf("is"); // 11
let subString = sentence.substring(11, 18); // "is awes"

console.log(indexOfIs); // Output: 11
console.log(subString); // Output: is awes

/*
  Summary: String manipulation in JavaScript involves various methods and operators.
  Use '+' for concatenation, '.length' for length, bracket notation for access, and methods like '.toUpperCase()' and '.substring()'.
  Remember: Strings are immutable, so methods return new strings rather than modifying the original.
  */
x;
