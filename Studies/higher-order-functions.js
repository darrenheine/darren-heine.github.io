/*
Understanding Higher-Order Functions in JavaScript

What is a Higher-Order Function?

Definition: A higher-order function is a function that can take other functions as arguments or return functions as results.
  It treats functions as first-class citizens, just like any other data type.

In JavaScript, functions are first-class citizens, meaning they can be:
  -Passed as arguments to other functions.
  -Assigned as values to variables.
  -Returned from other functions.

Why are They Useful?

Code Reusability: Higher-order functions promote code reuse by allowing you to define general functions
  that can be customized with specific behavior.
 
Abstraction: They help in abstracting common patterns, making code more readable and maintainable.

Functional Programming: Enables functional programming paradigms, like map, filter, and reduce, which we'll see shortly.


A higher-order function that creates a multiplier function.
Here, multiplyBy is a higher-order function that takes a factor as an argument and returns a new function.
The returned function (double and triple) takes a number and returns the result of multiplying that number by the factor.
*/

function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15

/*
  Methods that are examples of built-in higher-order functions.
  
  .map()
  .filter()
  .reduce()
  */

/*
  Example - .map() applies a function to each element of an array and returns a new array with the results.
   * 
  The map() method of Array instances creates a new array populated with the results of calling a provided function
   on every element in the calling array.
  */

const numbers1 = [1, 2, 3, 4, 5];
const doubled = numbers1.map((num) => num * 2);
// annonymous function that takes a single parameter and returns

console.log(doubled); // [2, 4, 6, 8, 10]

/* 
  Example - .filter() creates a new array with elements that pass a test defined by the provided function.
  
  The filter() method is an iterative method. It calls a provided callbackFn function once for each element in an array, 
    and constructs a new array of all the values for which callbackFn returns a truthy value. 
    Array elements which do not pass the callbackFn test are not included in the new array.
  
  Usage: filter creates a new array with elements that pass a test defined by the provided function.
  */

const scores = [80, 92, 65, 88, 72];
const passed = scores.filter((score) => score >= 75);

console.log(passed); // [80, 92, 88]

/* 
  Example - .reduce() applies a function to each element of an array and returns a single value.
  
  The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array,
   in order, passing in the return value from the calculation on the preceding element. The final result of running the
   reducer across all elements of the array is a single value.
  
  Usage: reduce applies a function against an accumulator and each element in the array to reduce it to a single value.
  */

const arrayOfNumbers = [1, 2, 3, 4];

const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(sum); // 10

/*
  Summary: Higher-order functions are powerful tools in JavaScript that allow for flexible and concise code.
  Use Cases: Use them for code reusability, abstraction, and to enable functional programming paradigms.
  Remember: Functions as first-class citizens mean they can be passed around just like any other value.
  */
