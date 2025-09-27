export const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export const generateRound = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const isEven = randomNumber % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no';
  const question = String(randomNumber);
  return [question, correctAnswer];
};
