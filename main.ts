#! /usr/bin/env node 

import inquirer  from "inquirer";
import chalk from "chalk";

 // Print colorful welcome message

 console.log(chalk.bold.bgCyanBright("\n \t\t Code With Ambreen - Word Counter \n"));


let user_ans = await inquirer.prompt([{
    type: "input",
    name: "sentence",
    message: "Please enter your sentence:"
}
])

let word_count = user_ans.sentence.trim().split(" ")
console.log(word_count);

console.log(`Your sentence has ${word_count.length} words.`);