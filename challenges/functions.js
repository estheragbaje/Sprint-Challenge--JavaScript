// ==== Callbacks ====

/* Step 1: Create a higher-order function that accepts a callback
 * Create a higher-order function named consume that can take 3 parameters.
 * The first two parameters can accept any argument
 * The last parameter accepts a callback
 * In the body of the function return the callback with the two parameters that you created
 */

function consume(a, b, cb) {
  return cb(a, b);
}

/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers
 * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
 */

//funtion add
function add(a, b) {
  const added = a + b;
  return added;
}

//funtion multiply
function multiply(a, b) {
  const multiplied = a * b;
  return multiplied;
}

//function greeting
function greeting(firstName, lastName, cb) {
  const greetingStr = `Hello ${firstName}, ${lastName}, nice to meet you!`;
  return greetingStr;
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
const consumeAdd = consume(2, 2, add); // 4
console.log(consumeAdd);

const consumeMultiply = consume(10, 16, multiply); // 160
console.log(consumeMultiply);

const consumeGreeting = consume("Mary", "Poppins", greeting); // Hello Mary Poppins, nice to meet you!
console.log(consumeGreeting);

// ==== Closures ====

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation:  This is because of closure. Closure is observed when an inner function is
//returned outside of it's lexical scope but still maintains a connection to its
//lexical environment. With closures, the internal state of the outer function's execution context gets
//preserved but with nested functions, the outer function's execution context goes away.

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();
