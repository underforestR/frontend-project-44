import readlineSync from 'readline-sync';

const getAnswer = (userName) => {
  let n = 0;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (n < 3) {
    const num = Math.round(Math.random() * 100);
    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question('Your answer:');
    const evenCheck = () => {
      if (num % 2 === 0) {
        return 'yes';
      }
      return 'no';
    };
    if (userAnswer === evenCheck()) {
      console.log('Correct!');
      n += 1;
    } else {
      console.log(
        // eslint-disable-next-line comma-dangle
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${evenCheck()}'\nLet's try again, ${userName}!`
      );
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default getAnswer;
