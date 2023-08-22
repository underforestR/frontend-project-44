import readlineSync from 'readline-sync';

const getGcd = (userName) => {
  let n = 0;
  console.log('Find the greatest common divisor of given numbers.');
  while (n < 3) {
    const num1 = Math.round(Math.random() * 1000);
    const num2 = Math.round(Math.random() * 1000);
    if (num1 !== 0 && num2 !== 0) {
      console.log(`Question: ${num1} ${num2}`);
      const userAnswer = readlineSync.question('Your answer: ');
      // eslint-disable-next-line no-shadow
      const divisorFinder = (num1) => {
        const num1Arr = [];
        for (let i = num1; i > 0; i -= 1) {
          if (num1 % i === 0) {
            num1Arr.push(i);
          }
        }
        return num1Arr;
      };
      // *Нахождение общих делителей*
      const commonDivisor = () => {
        const arrNum1 = divisorFinder(num1);
        const arrNum2 = divisorFinder(num2);
        const result = [];
        for (let i = 0; i < arrNum1.length; i += 1) {
          for (let j = 0; j < arrNum2.length; j += 1) {
            if (arrNum1[i] === arrNum2[j]) {
              result.push(arrNum1[i]);
            }
          }
        }
        return Math.max.apply(null, result);
      };
      if (Number(userAnswer) === commonDivisor()) {
        console.log('Correct!');
        n += 1;
      } else {
        console.log(
          // eslint-disable-next-line comma-dangle
          `'${userAnswer}' is wrong answer ;(. Correct answer was '${commonDivisor()}'\nLet's try again, ${userName}!`
        );
        return;
      }
    }
    console.log(`Congratulations, ${userName}!`);
  }
};
export default getGcd;
