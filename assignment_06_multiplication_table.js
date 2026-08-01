// Assignment 6: Multiplication Table Generator
// Display the multiplication table for a chosen number or a range from 1 to N.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function printSingleTable(num) {
  console.log(`\nMultiplication Table for ${num}:`);
  for (let i = 1; i <= 12; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}

function printTablesUpToN(n) {
  for (let num = 1; num <= n; num++) {
    printSingleTable(num);
    console.log('---------------------------');
  }
}

rl.question('Multiplication Table Generator\n1. Single Table\n2. Tables from 1 to N (Bonus)\nEnter your choice (1-2): ', (choice) => {
  if (choice === '1') {
    rl.question('Enter a number: ', (value) => {
      const number = parseInt(value, 10);
      if (number <= 0) {
        console.log('Error: Number must be positive.');
      } else {
        printSingleTable(number);
      }
      rl.close();
    });
  } else if (choice === '2') {
    rl.question('Enter N: ', (value) => {
      const n = parseInt(value, 10);
      if (n <= 0) {
        console.log('Error: N must be a positive integer.');
      } else {
        printTablesUpToN(n);
      }
      rl.close();
    });
  } else {
    console.log('Invalid choice.');
    rl.close();
  }
});
