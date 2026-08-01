// Assignment 9: Simple Calculator
// Support basic arithmetic operations and handle division by zero safely.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return b === 0 ? null : a / b; }
function modulus(a, b) { return b === 0 ? null : a % b; }
function exponent(a, b) { return Math.pow(a, b); }

function showMenu() {
  console.log('\n============================');
  console.log('     SIMPLE CALCULATOR');
  console.log('============================');
  console.log('1. Addition');
  console.log('2. Subtraction');
  console.log('3. Multiplication');
  console.log('4. Division');
  console.log('5. Modulus');
  console.log('6. Exponentiation');
  console.log('7. Quit');
  rl.question('Select an operation (1-7): ', (choice) => {
    if (choice === '7') {
      console.log('Goodbye!');
      rl.close();
      return;
    }

    rl.question('Enter first number: ', (aInput) => {
      rl.question('Enter second number: ', (bInput) => {
        const a = parseFloat(aInput);
        const b = parseFloat(bInput);
        let result;
        if (choice === '1') result = add(a, b);
        else if (choice === '2') result = subtract(a, b);
        else if (choice === '3') result = multiply(a, b);
        else if (choice === '4') result = divide(a, b);
        else if (choice === '5') result = modulus(a, b);
        else if (choice === '6') result = exponent(a, b);
        else {
          console.log('Error: Invalid choice.');
          showMenu();
          return;
        }

        if (result === null) {
          console.log('Error: Cannot divide by zero.');
        } else {
          console.log(`Result: ${result.toFixed(2)}`);
        }
        showMenu();
      });
    });
  });
}

showMenu();
