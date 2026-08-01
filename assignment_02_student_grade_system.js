const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getGrade(score) {
  if (score < 0 || score > 100) return '\0';
  if (score >= 80) return 'A';
  if (score >= 70) return 'B';
  if (score >= 60) return 'C';
  if (score >= 50) return 'D';
  return 'F';
}

rl.question('Enter student score (0-100): ', (answer) => {
  const score = parseInt(answer, 10);
  const grade = getGrade(score);

  if (grade === '\0') {
    console.log('Error: Score must be between 0 and 100.');
  } else {
    console.log(`Grade: ${grade}`);
  }
  rl.close();
});
