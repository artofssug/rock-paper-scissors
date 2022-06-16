//creates a fuction that determine computer's decision
function computerPlay() {
    const avaibleChoices = ['rock', 'paper', 'scissors'];
    return avaibleChoices[Math.floor(Math.random() * avaibleChoices.length)];
}

//creates variables to store both player and computer decision
let playerSelection = prompt('What do you choose?', '');
let computerSelection;

//creates variables to store both player and computer scores
let playerScore = 0;
let computerScore = 0;

//creates a function to play a round and determine wich one is the winner
function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();

    console.log(`${playerScore} vs ${computerScore}`);
    
    if (playerSelection === null || playerSelection === '' || playerSelection === undefined) {
        return 'Game canceled. You must pick Rock, Paper or Scisssors'
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        computerScore++
        return 'You lose! Paper beats Rock'
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
        computerScore++
        return 'You lose! Scissors beats Paper'
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
        computerScore++
        return 'You lose! Rock beats Scissors'
    } else if (playerSelection.toLowerCase() === computerSelection) {
        playerScore++
        computerScore++
        return `Its a tie! You both picked ${computerSelection}`
    }   else {
        playerScore++
        return `You win! ${playerSelection} beats ${computerSelection}`
    }

}

//creates a function that play 5 rounds of the game, store players score and shows the winner
function game() {

    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
    }
    
    if (playerScore > computerScore) {
        console.log(`You win! You scored ${playerScore} points, while the computer scored only ${computerScore}`)
    } else if (playerScore === computerScore) {
        console.log(`It's a tie! You both scored ${computerScore} points`) 
    } else {
        console.log(`You lose. The computer scored ${computerScore} points while you scored only ${playerScore}`)
    }
}

game()