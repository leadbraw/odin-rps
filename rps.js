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

let humanScore = 0, computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);