import readlineSync from "readline-sync";

const getAnswer = (userName) => {
  let n = 0;
  let num = Math.round(Math.random() * 100);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (n < 3) {
    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question("Your answer:");
    const evenCheck = () => {
      if (num % 2 === 0) {
        return "yes";
      }
      return "no";
    };
    if (userAnswer === evenCheck()) {
      console.log("Correct!");
      n = n + 1;
    } else {
      console.log(
        `'${userAnswer}'is wrong answer ;(. Correct answer was '${evenCheck()}'`
      );
      return;
    }
    num = Math.round(Math.random() * 100);
  }
  console.log(`Congratulations, ${userName}!`);
};
export { getAnswer };
