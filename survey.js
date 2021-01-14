const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let finalAnswer = [];

rl.question('What\'s your name? ', (answerOne) => {
  finalAnswer.push(`${answerOne}`)
  rl.question('What\'s an activity you like doing? ', (answerOne) => {
    finalAnswer.push(`${answerOne}`)
    rl.question('What do you listen to while doing that? ', (answerOne) => {
      finalAnswer.push(`${answerOne}`)
      rl.question('Which meal is your favourite? ', (answerOne) => {
        finalAnswer.push(`${answerOne}`)
        rl.question('What is your favourite thing to eat for that meal? ', (answerOne) => {
          finalAnswer.push(`${answerOne}`)
          rl.question('Which sport is your absolute favourite? ', (answerOne) => {
            finalAnswer.push(`${answerOne}`)
            rl.question('What is your superpower?', (answerOne) => {
              finalAnswer.push(`${answerOne}`)
              rl.close();
              console.group(finalAnswer)
            });
          });
        });
      });
    });
  });
});