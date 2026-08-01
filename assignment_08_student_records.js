// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 8
// =============================================================================
//
// TASK: Student Record Management System
//
// Build a console-based program that stores and manages student information.
// Use an object to represent each student record containing a name, ID, and scores.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Store all records in an array.
// - Display each student's information and average score.
// - Handle invalid student IDs gracefully.
//
// =============================================================================
// YOUR CODE BELOW
// =============================================================================

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const students = [];

function calculateAverage(scores) {
  if (scores.length === 0) return 0;
  return scores.reduce((sum, score) => sum + score, 0) / scores.length;
}

function addStudent() {
  rl.question('Student name: ', (name) => {
    rl.question('Student ID: ', (idInput) => {
      const id = parseInt(idInput, 10);
      rl.question('How many scores? ', (countInput) => {
        const count = parseInt(countInput, 10);
        const scores = [];
        const askScore = (index) => {
          if (index >= count) {
            students.push({ name, id, scores });
            console.log(`Student "${name}" added successfully.`);
            showMenu();
            return;
          }
          rl.question(`Enter score ${index + 1}: `, (value) => {
            scores.push(parseFloat(value));
            askScore(index + 1);
          });
        };
        askScore(0);
      });
    });
  });
}

function displayAllStudents() {
  if (students.length === 0) {
    console.log('No students have been added yet.');
  } else {
    students.forEach((student) => {
      console.log(`\nName: ${student.name}`);
      console.log(`ID: ${student.id}`);
      console.log(`Scores: ${student.scores.join(' ')}`);
      console.log(`Average: ${calculateAverage(student.scores).toFixed(2)}`);
    });
  }
  showMenu();
}

function findAverageById() {
  rl.question('Enter student ID: ', (idInput) => {
    const id = parseInt(idInput, 10);
    const student = students.find((s) => s.id === id);
    if (!student) {
      console.log('Error: Student ID not found.');
    } else {
      console.log(`${student.name}'s average score: ${calculateAverage(student.scores).toFixed(2)}`);
    }
    showMenu();
  });
}

function showMenu() {
  console.log('\n================================');
  console.log('   STUDENT RECORD SYSTEM MENU');
  console.log('================================');
  console.log('1. Add student');
  console.log('2. Display all students');
  console.log('3. Calculate average score');
  console.log('4. Quit');
  rl.question('Enter your choice (1-4): ', (choice) => {
    if (choice === '1') addStudent();
    else if (choice === '2') displayAllStudents();
    else if (choice === '3') findAverageById();
    else if (choice === '4') {
      console.log('Goodbye!');
      rl.close();
    } else {
      console.log('Error: Invalid choice. Please enter 1-4.');
      showMenu();
    }
  });
}

showMenu();
