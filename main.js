#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgCyanBright.bold("WELCOME TO MY ATM MACHINE"));
console.log(chalk.bgGreen.bold("*****MY PINCODE IS 123*****"));
let myBalance = 20000;
let myPin = 123;
let condition = true;
let answers = await inquirer.prompt([{
        name: "pin",
        type: "number",
        message: "Enter your pin"
    }]);
if (answers.pin === myPin) {
    console.log(chalk.greenBright("CORRECT PIN CODE!!!"));
    do {
        let operationAnswer = await inquirer.prompt([{
                name: "operators",
                type: "list",
                message: "Select an option",
                choices: ["Withdraw", "Fast Cash", "Check Balance", "Deposit", "Exit"]
            }]);
        if (operationAnswer.operators === "Withdraw") {
            let amountAnswer = await inquirer.prompt([{
                    name: "amount",
                    type: "number",
                    message: "Enter your amount"
                }]);
            if (amountAnswer.amount <= myBalance) {
                let balance = myBalance -= amountAnswer.amount;
                console.log(chalk.blueBright(`The remaining balance is ${balance}`));
            }
            else {
                console.log(chalk.redBright("INSUFFICIENT BALANCE"));
            }
        }
        else if (operationAnswer.operators === "Fast Cash") {
            let fastCashAnswer = await inquirer.prompt([{
                    name: "amount",
                    type: "list",
                    message: "Select an option",
                    choices: ["5000", "10000", "15000", "20000", "25000", "30000"]
                }]);
            if (fastCashAnswer.amount <= myBalance) {
                let balance = myBalance -= fastCashAnswer.amount;
                console.log(chalk.yellowBright(`The remaining balance is ${balance}`));
            }
            else {
                console.log("INSUFFICIENT BALANCE");
            }
        }
        else if (operationAnswer.operators === "Check Balance") {
            console.log(chalk.cyanBright(`Your balance is ${myBalance}`));
        }
        else if (operationAnswer.operators === "Deposit") {
            let depositAmount = await inquirer.prompt([{
                    name: "amount",
                    type: "number",
                    message: "Enter your amount"
                }]);
            let balance = myBalance += depositAmount.amount;
            console.log(chalk.blueBright(`Now your balance is ${balance}`));
        }
        else if (operationAnswer.operators === "Exit") {
            console.log(chalk.gray.italic.bold("Exiting..."));
            process.exit(0);
        }
    } while (condition);
}
else {
    console.log(chalk.red("INCORRECT PIN CODE!!!"));
}
