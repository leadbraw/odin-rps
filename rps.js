function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
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
        feedDiv.textContent = `It's a tie! You both picked ${humanChoice}.`;
    } else if (
        humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'scissors' && computerChoice === 'paper' ||
        humanChoice === 'paper' && computerChoice === 'rock'
    ) {
        feedDiv.textContent = `You win! You chose ${humanChoice} and the computer chose ${computerChoice}.`;
        humanScore++;
        scoreDiv.textContent = `human: ${humanScore} computer: ${computerScore}`;
    } else {
        feedDiv.textContent = `You lose :( You chose ${humanChoice} and the computer chose ${computerChoice}.`;
        computerScore++;
        scoreDiv.textContent = `human: ${humanScore} computer: ${computerScore}`;
    }
}
let humanScore = 0;
let computerScore = 0;

// I'm just making everything here in the script file
let mainDiv = document.createElement('div');
let rockButton = document.createElement('button');
let paperButton = document.createElement('button');
let scissorsButton = document.createElement('button');
let textDiv = document.createElement('div');
let buttonDiv = document.createElement('div');
let scoreDiv = document.createElement('div');
let feedDiv = document.createElement('div');

// Add event listeners. I'm not bothering with just making one listener for all clicks. Too bad!
rockButton.addEventListener("click", () => {
    playRound('rock', getComputerChoice());
});
paperButton.addEventListener("click", () => {
    playRound('paper', getComputerChoice());
});
scissorsButton.addEventListener("click", () => {
    playRound('scissors', getComputerChoice());
});

// Allow the user to do r, p, or s instead of clicking buttons
document.addEventListener('keypress', (e) => {
    switch (e.code) {
        case 'KeyR':
            playRound('rock', getComputerChoice());
            break;
        case 'KeyP':
            playRound('paper', getComputerChoice());
            break;
        case 'KeyS':
            playRound('scissors', getComputerChoice());
            break;
    }
});

rockButton.style.cssText = "border-radius: 25px; background:rgb(137, 180, 250); padding: 20px; width: 200px; height: 150px; font-family: sans-serif; font-size: 40px;";
paperButton.style.cssText = "border-radius: 25px; background:rgb(137, 180, 250); padding: 20px; width: 200px; height: 150px; font-family: sans-serif; font-size: 40px;";
scissorsButton.style.cssText = "border-radius: 25px; background:rgb(137, 180, 250); padding: 20px; width: 200px; height: 150px; font-family: sans-serif; font-size: 40px;";

scoreDiv.style.cssText = `border-radius: 20px; border: 2px solid rgb(137, 180, 250); background: rgb(17, 17, 27); display: flex; flex-direction: column;
                          justify-content: center; margin: 50px 150px 40px 150px; padding: 20px; font-size: 40px; font-family: sans-serif; font-weight: bold; color: rgb(243, 139, 168);
                          text-align: center;`;
mainDiv.style.cssText = `border-radius: 20px; border: 2px solid rgb(137, 180, 250); background: rgb(24, 24, 37); display: flex; flex-direction: column;
                        justify-content: center; padding: 20px; font-size: 40px; font-family: sans-serif; font-weight: bold; color: rgb(137, 180, 250); margin: 50px;`;
textDiv.style.cssText = "display: flex; justify-content: center; align-content: center; margin-bottom: 20px; font-size: 70px";
buttonDiv.style.cssText = "display: flex; justify-content: space-evenly;";
feedDiv.style.cssText = `border-radius: 20px; border: 2px solid rgb(137, 180, 250); background: rgb(17, 17, 27); display: flex; flex-direction: column;
                          justify-content: center; margin: auto; padding: 20px; font-size: 40px; font-family: sans-serif; font-weight: 10; color: rgb(243, 139, 168);
                          text-align: center;`;

scoreDiv.textContent = `human: ${humanScore} computer: ${computerScore}`;
feedDiv.textContent = `Welcome to the Rock Paper Scissors game!`;
textDiv.textContent = "Rock Paper Scissors";

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";

mainDiv.appendChild(textDiv);
buttonDiv.appendChild(rockButton);
buttonDiv.appendChild(paperButton);
buttonDiv.appendChild(scissorsButton);
mainDiv.appendChild(buttonDiv);
mainDiv.appendChild(scoreDiv);
mainDiv.appendChild(feedDiv);

document.body.style.cssText = "background: rgb(17, 17, 27);";
document.body.appendChild(mainDiv);
