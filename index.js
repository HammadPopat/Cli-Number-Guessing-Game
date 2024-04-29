import inquirer from "inquirer";
async function main() {
    let nameInput = await inquirer.prompt([
        {
            name: "Input",
            type: "input",
            message: "Please Enter Your name:"
        }
    ]);
    let name = nameInput.Input;
    let randomNumber = Math.floor(Math.random() * 2);
    // let console.log("Welcomce to the Number Guessing Game");
    let answer = await inquirer.prompt([
        {
            name: "userGuessNumber",
            type: "number",
            message: "Please enter the number you guess between 1-10:",
        },
    ]);
    if (name) {
        console.log(`Welcome, Mr. ${name}, to our game`);
    }
    if (answer.userGuessNumber == randomNumber) {
        console.log(`Congratulations ${name}, you win the game!`);
    }
    else {
        console.log(`Sorry, Mr. ${name}, better luck next time.`);
    }
}
main();
