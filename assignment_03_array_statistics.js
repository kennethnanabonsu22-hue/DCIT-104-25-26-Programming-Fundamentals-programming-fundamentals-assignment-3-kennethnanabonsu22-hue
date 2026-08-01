// Assignment 3: Array Statistics Calculator
// Read a list of numbers and compute the sum, average, maximum, and minimum.

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
