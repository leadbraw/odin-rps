function getComputerChoice() {
    const choice = Math.floor(Math.random() * (3 - 0) + 0);
    let result;
    switch (choice) {
        case 0:
            result = 'rock';
            break;
        case 1:
            result = 'paper';
            break;
        case 2:
            result = 'scissors';
            break;
    }
    return result;
}

function getHumanChoice() {
    const choice = prompt('Please choose r, p, or s for rock, paper, or scissors respectively.');
    let result;
    switch (choice) {
        case 'r':
            result = 'rock';
            break;
        case 'p':
            result = 'paper';
            break;
        case 's':
            result = 'scissors';
            break;
        // Get random choice if user input is malformed.
        default:
            getComputerChoice();
    }
    return result;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both picked ${humanChoice}.`);
    } else if (
        humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'scissors' && computerChoice === 'paper' ||
        humanChoice === 'paper' && computerChoice === 'rock'
    ) {
        console.log(`You win! You chose ${humanChoice} and the computer chose ${computerChoice}.`)
        humanScore++;
    } else {
        console.log(`You lose :( You chose ${humanChoice} and the computer chose ${computerChoice}.`)
        computerScore++;
    }
}


let mainDiv = document.createElement('div');
let rockButton = document.createElement('button');
let paperButton = document.createElement('button');
let scissorsButton = document.createElement('button');
let textDiv = document.createElement('div');
let buttonDiv = document.createElement('div');

rockButton.style.cssText = "border-radius: 25px; background:rgb(137, 180, 250); padding: 20px; width: 200px; height: 150px; font-family: sans-serif; font-size: 40px;";
paperButton.style.cssText = "border-radius: 25px; background:rgb(137, 180, 250); padding: 20px; width: 200px; height: 150px; font-family: sans-serif; font-size: 40px;";
scissorsButton.style.cssText = "border-radius: 25px; background:rgb(137, 180, 250); padding: 20px; width: 200px; height: 150px; font-family: sans-serif; font-size: 40px;";
mainDiv.style.cssText = "border-radius: 20px; border: 2px solid rgb(137, 180, 250); background: rgb(49, 50, 68); display: flex; flex-direction: column; justify-content: center; padding: 20px; font-size: 40px; font-family: sans-serif; font-weight: bold; color: rgb(137, 180, 250);";
textDiv.style.cssText = "display: flex; justify-content: center; align-content: center; margin-bottom: 20px;"
buttonDiv.style.cssText = "display: flex; justify-content: space-between;"
textDiv.textContent = "Rock Paper Scissors";

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";

mainDiv.appendChild(textDiv);
buttonDiv.appendChild(rockButton);
buttonDiv.appendChild(paperButton);
buttonDiv.appendChild(scissorsButton);
mainDiv.appendChild(buttonDiv);

document.body.appendChild(mainDiv);
