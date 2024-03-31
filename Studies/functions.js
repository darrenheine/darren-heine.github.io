/**
 *
 * Functions:
 *
 * 1. The two phases of using function: first, we must ___? Next, we can execute (or two other
 * words for executing a function?) a function by?
 *
 * 2. What's the difference between a functions parameters and arguments Passed to a function?
 *
 * 3. What's the syntax for a named function?
 *
 * 4. How do we assign to a function to a variable?
 *
 * 5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we
 * specify inputs, and how do we specify outputs?
 *
 * 6. Scope: Functions can see and modify variables in parent or global scopes. The inverse
 * is not true.
 *
 * 7. Closures: Functions form closures around data they house. If an object returned from the
 * function and is held in memory somewhere (referenced), that closure stays alive, and
 * data can continue to exist in these closures.
 */


/**
 * 
 * 
 * 1. Two Phases:
First, we must create a function. This means we're telling the computer the steps it should remember for later.

Next, we can call (or run or execute) a function by using its name followed by parentheses (). It's like asking the function to do its job.

2. Parameters vs. Arguments:
Think of a function as a recipe, and parameters are like the ingredients the recipe needs.

When we call or run the function, we give it actual arguments, which are the real ingredients we have at that moment.

3. Syntax for Named Function:
To create a named function, we use the function keyword, give it a name, add parameters inside parentheses (if needed), and then 
curly braces {} for the steps or actions it should do.
 */

function sayHello(name) {
    console.log("Hello, " + name + "!");
  }

  /**
4. Assigning a Function to a Variable:
We can also save a function in a variable, just like you might save a cookie in a jar for later. This way, we can use it whenever we want by calling the variable.
   */

let greet = function(name) {
    console.log("Hello, " + name + "!");
  };

  /**
   * 5. Inputs (Parameters) and Outputs:
Functions can take inputs (parameters) by putting them inside the parentheses when we create the function.

They can also give us back a result, which we call the output. We do this using the return keyword.
   */

function add(a, b) {
    return a + b;
  }

  /**
   * 6. Scope:
Functions can see and use variables that are outside of them, in what we call their parent scope or even in the global scope (like the whole kitchen).

But, variables inside a function are like ingredients only the function can see. Other parts of the code can't peek inside the function to see them.

7. Closures:
When a function creates something and returns it (like a burger chef making a burger and giving it to you), it forms a little bubble around that thing called a closure.

This bubble keeps the thing safe, even if the function is done running. It's like putting the burger in a container, and it stays good until you eat it!

So, in a nutshell, functions are like recipes you create to do tasks for you. You give them inputs (ingredients), they do some work, and sometimes they give you back an output (result). 
They can use stuff from outside (parent scope), but their inside stuff (variables) are private unless they decide to share (like giving you a burger). And that's JavaScript functions for you!
   */

function createCounter() {
    let count = 0; // This variable is "closed over" by the inner function
    
    function increment() {
      count++; // This inner function can access and modify count
      console.log("Count is now: " + count);
    }
  
    return increment; // We're returning the inner function
  }
  
  // Now let's use the createCounter function
  let counter = createCounter();
  
  // Each time we call counter(), it will increment the count
  counter(); // Count is now: 1
  counter(); // Count is now: 2
  counter(); // Count is now: 3

  /**
   * Here's what's happening:

createCounter() defines a variable count that is only accessible within the createCounter function. This variable count is captured or closed over by the increment function.

createCounter() returns the increment function. This means that counter now holds a reference to the increment function.

When we call counter(), it executes the increment function. Since increment was created inside createCounter, it remembers the count variable from its parent scope.

So, each time we call counter(), it remembers and increments the count variable that was "closed over" by the increment function. This way, the count variable is not 
accessible from outside createCounter, but it's still being modified and remembered by the increment function due to the closure.
   */