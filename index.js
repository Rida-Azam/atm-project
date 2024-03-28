#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //Dollar
let myPin = 3344;
let pinAns = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin number:",
    },
]);
if (pinAns.pin === myPin) {
    console.log("Correct Pin Code !!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Select an option you want:",
            type: "list",
            choices: [
                "Add Money",
                "Withdraw Cash",
                "Check Balance",
                "Fast Cash",
                "Exit",
            ],
        },
    ]);
    if (operationAns.operation === "Add Money") {
        let addAmount = await inquirer.prompt([
            {
                type: "number",
                name: "amountadd",
                message: "Enter the amount to add:",
            },
        ]);
        if (addAmount.amountadd > 0) {
            let add = myBalance + addAmount.amountadd;
            console.log(`Successfully added ${add}`);
        }
        else {
            console.log(`Invalid Amount`);
        }
    }
    else if (operationAns.operation === "Withdraw Cash") {
        let amountAns = await inquirer.prompt([
            {
                name: "amountAns",
                message: "Enter Your Amount:",
                type: "number",
            },
        ]);
        if (amountAns.amountAns > 0 && amountAns.amountAns <= myBalance) {
            let sub = myBalance - amountAns.amountAns;
            console.log(`Successfully withdrawn your remaining balance is:  ${sub}`);
        }
        else {
            console.log(`Invalid amouny or insufficient funds.`);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your Current Balance is: ${myBalance}`);
    }
    else if (operationAns.operation === "Fast Cash") {
        let fastCash = await inquirer.prompt({
            name: "cash",
            type: "list",
            message: "Select a Fast Cash Option:",
            choices: ["100", "500", "1000", "5000"],
        });
        if (fastCash.cash == 100 ||
            fastCash.cash == 500 ||
            fastCash.cash == 1000 ||
            fastCash.cash == 5000) {
            let min = myBalance - fastCash.cash;
            console.log(`Successfully withdrawn your remaining balance is: ${min}`);
        }
        else {
            console.log("Insufficient funds.");
        }
    }
    else if (operationAns.operation === "Exit") {
        console.log(`Thanks you for using the ATM.Goodbye!`);
    }
}
else {
    console.log("Incorrect Pin Code Try Again");
}
