// Assignment 1: Prime Number Checker
// Prompt the user to enter a number and print whether it is prime.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

rl.question('Enter a number: ', (answer) => {
  const number = parseInt(answer, 10);
  if (isPrime(number)) {
    console.log(`${number} is a prime number.`);
  } else {
    console.log(`${number} is NOT a prime number.`);
  }
  rl.close();
});
