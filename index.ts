#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// 1) Computer will generate a random number.

// 2) User input for guessing number.

// 3) Compare user input with computer generated number and show result.


const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
{
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess a number between 1-6:",
}
]);

if (answers.userGuessedNumber === randomNumber) {

    console.log(chalk.underline.bggreen.italic("Congratulations! You guessed right number"));
    
}else {
    console.log(chalk.red.bold("Sorry! You guessed wrong number"));
    
}
