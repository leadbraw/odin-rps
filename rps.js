function getComputerChoice() {
    const choice = Math.floor(Math.random() * (2 - 0) + 0);
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