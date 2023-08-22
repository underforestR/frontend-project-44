import readlineSync from 'readline-sync';

const makeArrayProgression = () => {
  const array = [];
  const step = Math.round(Math.random() * 10);
  array[0] = Math.round(Math.random() * 100);
  for (let i = 1; i < 10; i += 1) {
    array[i] = array[i - 1] + step;
  }
  return array;
};

const getProgression = (userName) => {
  let n = 0;
  let x = 0;
  const arrayHint = () => {
    const newArray = makeArrayProgression();
    const value = Math.round(Math.random() * 9);
    x = newArray[value];
    newArray[value] = '..';
    return newArray.join(' ');
  };
  console.log('What number is missing in the progression?');
  while (n < 3) {
    console.log(`Question: ${arrayHint()}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) === x) {
      console.log('Correct!');
      n += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${x}'\nLet's try again, ${userName}!`
      );
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default getProgression;
