// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 5
// =============================================================================
//
// TASK: Fibonacci Sequence Generator
//
// Write a JavaScript program with two parts:
// 1. Print the first N terms of the Fibonacci sequence.
// 2. Check whether a number belongs to the sequence.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use loops to generate the sequence.
// - N must be a positive integer.
// - Each part should be implemented as a separate function.
//
// =============================================================================
// YOUR CODE BELOW
// =============================================================================

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function printFibonacci(n) {
  if (n <= 0) {
    console.log('Error: N must be a positive integer.');
    return;
  }
  let a = 0, b = 1;
  const seq = [];
  for (let i = 0; i < n; i++) {
    seq.push(a);
    const next = a + b;
    a = b;
    b = next;
  }
  console.log(`Fibonacci sequence: ${seq.join(' ')}`);
}

function isFibonacci(num) {
  if (num < 0) return false;
  let a = 0, b = 1;
  while (a <= num) {
    if (a === num) return true;
    const next = a + b;
    a = b;
    b = next;
  }
  return false;
}

rl.question('How many terms? ', (answer) => {
  const n = parseInt(answer, 10);
  printFibonacci(n);

  rl.question('Enter a number to check: ', (value) => {
    const number = parseInt(value, 10);
    if (isFibonacci(number)) {
      console.log(`${number} is a Fibonacci number.`);
    } else {
      console.log(`${number} is NOT a Fibonacci number.`);
    }
    rl.close();
  });
});
