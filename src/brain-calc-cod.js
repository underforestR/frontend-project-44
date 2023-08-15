import readlineSync from 'readline-sync';

const getCalc = (userName) => {
  let result = 0;
  let n = 0;
  console.log('What is the result of the expression?');
  while (n < 3) {
    let num1 = Math.round(Math.random() * 100);
    let num2 = Math.round(Math.random() * 100);
    const operators = ['+', '-', '*'];
    let operator = operators[Math.floor(Math.random() * operators.length)];
    result = `${num1} ${operator} ${num2}`;
    console.log(`Question: ${result}`);
    const userAnswer = readlineSync.question('Your answer:');
    const calc = () => {
      if (operator === '+') {
        return num1 + num2;
      } else if (operator === '-') {
        return num1 - num2;
      } else {
        return num1 * num2;
      }
    };
    if (Number(userAnswer) === calc()) {
      console.log('Correct!');
      n += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${calc()}'`
      );
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default getCalc;
