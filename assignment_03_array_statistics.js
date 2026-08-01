// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 3
// =============================================================================
//
// TASK: Array Statistics Calculator
//
// Write a JavaScript program that reads a collection of numbers from the user
// and computes key statistical values using separate functions.
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT / OUTPUT EXAMPLE
// -----------------------------------------------------------------------------
//
//   How many numbers? 5
//   Enter number 1: 4
//   Enter number 2: 7
//   Enter number 3: 2
//   Enter number 4: 9
//   Enter number 5: 1
//
//   Results:
//   Sum:     23
//   Average: 4.6
//   Maximum: 9
//   Minimum: 1
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Implement each calculation in its own function.
// - N must be a positive integer.
// - If the user enters 0 or a negative number, print an error message.
//
// =============================================================================
// YOUR CODE BELOW
// =============================================================================

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function computeSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) sum += arr[i];
  return sum;
}

function computeAverage(arr) {
  return computeSum(arr) / arr.length;
}

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}

rl.question('How many numbers? ', (answer) => {
  const n = parseInt(answer, 10);
  if (n <= 0) {
    console.log('Error: N must be a positive integer.');
    rl.close();
    return;
  }

  const numbers = [];
  const askNumber = (index) => {
    rl.question(`Enter number ${index}: `, (value) => {
      numbers.push(parseInt(value, 10));
      if (numbers.length < n) {
        askNumber(numbers.length + 1);
      } else {
        console.log('\nResults:');
        console.log(`Sum:     ${computeSum(numbers)}`);
        console.log(`Average: ${computeAverage(numbers)}`);
        console.log(`Maximum: ${findMax(numbers)}`);
        console.log(`Minimum: ${findMin(numbers)}`);
        rl.close();
      }
    });
  };

  askNumber(1);
});
