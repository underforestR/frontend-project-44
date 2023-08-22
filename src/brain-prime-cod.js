import readlineSync from 'readline-sync';

const getEazyNumber = (userName) => {
  let n = 0;

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  while (n < 3) {
    const num = Math.round(Math.random() * 1000);
    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question('Your answer:');
    const easyCheck = () => {
      let result = 0;
      for (let i = 0; i <= num / 2; i += 1) {
        if (num % i === 0) {
          result += 1;
        }
      }
      if (result === 1) {
        return 'yes';
      }
      return 'no';
    };
    if (userAnswer === easyCheck()) {
      console.log('Correct!');
      n += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${easyCheck()}'\nLet's try again, ${userName}!`
      );
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default getEazyNumber;
