/*
Understanding JavaScript Loops

Loops in JavaScript are used to execute a block of code repeatedly until a certain condition is met. There are several types of loops, each serving different purposes.

1. While Loop:
   - Executes a block of code as long as a specified condition is true.
   - Often used when the number of iterations is not known beforehand.

   Example: Looping forward from 1 to 5
*/
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
// Output:
// 1
// 2
// 3
// 4
// 5

/*
2. For Loop:
   - Executes a block of code a specified number of times.
   - The loop has three parts: initialization, condition, and iteration.

   Example: Looping backward from 5 to 1
*/
for (let j = 5; j >= 1; j--) {
  console.log(j);
}
// Output:
// 5
// 4
// 3
// 2
// 1

/*
3. For-In Loop (for objects):
   - Iterates over the enumerable properties of an object.
   - Useful for iterating over keys in an object.

   Example: Looping over an object's properties
*/
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}
// Output:
// name: John
// age: 30
// city: New York

/*
4. Looping over Arrays:
   - Arrays are commonly looped using for loops.
   - Allows iteration through each element in the array.

   Example: Looping forward and backward over an array
*/
const fruits = ["Apple", "Banana", "Cherry"];

// Forward loop
for (let k = 0; k < fruits.length; k++) {
  console.log(fruits[k]);
}
// Output:
// Apple
// Banana
// Cherry

// Backward loop
for (let l = fruits.length - 1; l >= 0; l--) {
  console.log(fruits[l]);
}
// Output:
// Cherry
// Banana
// Apple

/*
Summary:
- Loops in JavaScript are used to execute a block of code repeatedly.
- While loop executes as long as a condition is true.
- For loop executes a block of code a specified number of times.
- For-In loop is used for iterating over object properties.
- For arrays, use for loops to iterate through elements, either forwards or backwards.

Remember:
- Use a while loop when the number of iterations is not known beforehand.
- Use a for loop when the number of iterations is known.
- For-In loop is specifically for iterating over object properties.
- Arrays can be looped through using for loops, either forwards or backwards.
*/
