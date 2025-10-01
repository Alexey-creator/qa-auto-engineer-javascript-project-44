export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  let divider = 2;

  while (divider <= number / 2) {
    if (number % divider === 0) {
      return false; 
    }
    divider += 1;
  }
  
  return true;
};

export const generateRound = () => {
  const question = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = (isPrime(question) === true) ? 'yes' : 'no';
  
  return [question,correctAnswer];
};
