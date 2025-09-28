export const description = 'What is the result of the expression?';

export const generateRound = () => {
  const operators = ['+', '-', '*'];
  const randomNumber1 = Math.floor(Math.random() * 100) + 1;
  const randomNumber2 = Math.floor(Math.random() * 100) + 1;
  const randomOperator = operators[Math.floor(Math.random() * operators.length)]; 
  const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  let correctAnswer;
  switch (randomOperator) {
  case '+':
    correctAnswer = randomNumber1 + randomNumber2;
    break;
  case '-':
    correctAnswer = randomNumber1 - randomNumber2;
    break;
  case '*':
    correctAnswer = randomNumber1 * randomNumber2;
    break;
  default:
      throw new Error(`Unknown operator: '${randomOperator}'!`);
  }

  return [question,String(correctAnswer)];
};
