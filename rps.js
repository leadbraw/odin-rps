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

console.log(getHumanChoice())