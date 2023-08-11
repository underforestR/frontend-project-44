import readlineSync from "readline-sync";
import { getUserName } from "../src/cli.js";

const getAnswer = () => {
  let num = Math.round(Math.random() * 100);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
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
    getAnswer();
  } else {
    console.log(
      `'${userAnswer}'is wrong answer ;(. Correct answer was '${evenCheck()}'`
    );
  }
  return;
};
export { getAnswer };
