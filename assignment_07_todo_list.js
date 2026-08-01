// Assignment 7: Console-Based To-Do List
// Let the user add, view, delete, and quit from a simple task list.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tasks = [];

function addTask() {
  rl.question('Enter task: ', (task) => {
    tasks.push(task);
    console.log(`Task added: "${task}"`);
    showMenu();
  });
}

function viewTasks() {
  if (tasks.length === 0) {
    console.log('Your task list is empty.');
  } else {
    console.log('Your Tasks:');
    tasks.forEach((task, index) => console.log(`${index + 1}. ${task}`));
  }
  showMenu();
}

function deleteTask() {
  if (tasks.length === 0) {
    console.log('Your task list is empty.');
    showMenu();
    return;
  }
  rl.question('Enter task number to delete: ', (answer) => {
    const index = parseInt(answer, 10) - 1;
    if (index < 0 || index >= tasks.length) {
      console.log('Error: Invalid task number.');
    } else {
      const removed = tasks.splice(index, 1)[0];
      console.log(`Task "${removed}" has been removed.`);
    }
    showMenu();
  });
}

function showMenu() {
  console.log('\n============================');
  console.log('     TO-DO LIST MENU');
  console.log('============================');
  console.log('1. Add task');
  console.log('2. View tasks');
  console.log('3. Delete task');
  console.log('4. Quit');
  rl.question('Enter your choice (1-4): ', (choice) => {
    if (choice === '1') addTask();
    else if (choice === '2') viewTasks();
    else if (choice === '3') deleteTask();
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
