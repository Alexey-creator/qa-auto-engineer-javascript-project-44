export const description = 'Find the greatest common divisor of given numbers.';

function findGcd(a, b) {
  if (b === 0) {
    return a;
  }
  return findGcd(b, a % b);
}

export const generateRound = () => {
  const randomNumber1 = Math.floor(Math.random() * 100) + 1;
  const randomNumber2 = Math.floor(Math.random() * 100) + 1;
  const question = `${randomNumber1} ${randomNumber2}`;
  const correctAnswer = findGcd(randomNumber1, randomNumber2);

  return [question,String(correctAnswer)];
};
