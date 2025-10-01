export const description = 'What number is missing in the progression?';

export const generateRound = () => {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  const randomStep = Math.floor(Math.random() * 10) + 1;
  const progressionLength = 10;
  const progression = [];
  for (let i = 0; i < progressionLength; i++) { 
    progression.push(randomNumber);
    randomNumber += randomStep;
  };

  const randomIndex = Math.floor(Math.random() * progression.length);
  const correctAnswer = progression[randomIndex];
  progression[randomIndex] = '..';
  const question = progression.join(" ");

  return [question,String(correctAnswer)]; 
};
