import runGreeting from './cli.js';
import readlineSync from 'readline-sync';

const runEngine = (description, generateRound) => {  
  const userName = runGreeting();
  console.log(description);
  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i++) {
    const [question, correctAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const  userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
     console.log('Correct!');
    } else {
     console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
     console.log(`Let's try again, ${userName}!`)
     return;
    }
  }
  console.log(`Congratulations, ${userName}!`)
};

export default runEngine;
