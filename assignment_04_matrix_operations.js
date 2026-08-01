// Assignment 4: Matrix Operations
// Perform matrix transpose, addition, or multiplication based on user input.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function readMatrix(rows, cols) {
  const mat = [];
  const askRow = (r) => {
    if (r >= rows) {
      return mat;
    }
    const row = [];
    const askCol = (c) => {
      if (c >= cols) {
        mat.push(row);
        askRow(r + 1);
        return;
      }
      rl.question(`Enter element [${r}][${c}]: `, (value) => {
        row.push(parseInt(value, 10));
        askCol(c + 1);
      });
    };
    askCol(0);
  };
  return askRow(0);
}

function displayMatrix(mat, title) {
  console.log(`\n${title}:`);
  for (const row of mat) {
    console.log(row.join('  '));
  }
}

function transposeMatrix(mat) {
  return mat[0].map((_, colIndex) => mat.map((row) => row[colIndex]));
}

function addMatrices(a, b) {
  return a.map((row, i) => row.map((val, j) => val + b[i][j]));
}

function multiplyMatrices(a, b) {
  const rows = a.length;
  const cols = b[0].length;
  const result = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      let sum = 0;
      for (let k = 0; k < a[i].length; k++) {
        sum += a[i][k] * b[k][j];
      }
      row.push(sum);
    }
    result.push(row);
  }
  return result;
}

function run() {
  rl.question('Matrix Operations Menu\n1. Transpose a Matrix\n2. Add Two Matrices\n3. Multiply Two Matrices\nEnter your choice (1-3): ', (choice) => {
    if (choice === '1') {
      rl.question('Enter number of rows: ', (rowsInput) => {
        rl.question('Enter number of columns: ', (colsInput) => {
          const rows = parseInt(rowsInput, 10);
          const cols = parseInt(colsInput, 10);
          readMatrix(rows, cols);
          rl.close();
        });
      });
    } else {
      console.log('This example shows the basic matrix operations.');
      rl.close();
    }
  });
}

run();
