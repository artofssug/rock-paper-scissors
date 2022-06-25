// creates a fuction that determine computer's decision
function computerPlay() {
    const avaibleChoices = ['pedra', 'papel', 'tesoura'];
    return avaibleChoices[Math.floor(Math.random() * avaibleChoices.length)];
};

// creates variables to store both player and computer scores
let playerScore = 0;
let computerScore = 0;

// select the div element in the html so we can change it later
const resultText = document.querySelector('#result');

// this code will store in the playerSelection variable the button id(#pedra, #papel or #tesoura);
let playerSelection;
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', (e) => {
    button.classList.add('selected'); 
    playerSelection = (e.srcElement.id); 
    playRound();
    buttons.forEach(button => button.addEventListener('transitionend', removeTransition));
}));


function removeTransition(e) {
    if(e.propertyName === 'transform') {
        this.classList.remove('selected');
    }

}

const playerScoreText = document.querySelector('#playerScore');
const computerScoreText = document.querySelector('#computerScore');
const theWinner = document.querySelector('#winner');

//creates a function to play a round and determine wich one is the winner
function playRound() {

    theWinner.textContent = ''
    let computerSelection = computerPlay()
    
    if (playerSelection.toLowerCase() !== 'tesoura' && playerSelection.toLowerCase() !== 'pedra' && playerSelection.toLowerCase() !== 'papel') {
        resultText.textContent = `Jogo cancelado. Você deve escolher entre pedra, papel e tesoura`;
    } else if (playerSelection.toLowerCase() === 'pedra' && computerSelection === 'papel') {
        computerScore++;
        resultText.textContent = `Você escolheu ${playerSelection} e o computador ${computerSelection}. Você perdeu: papel ganha de pedra!`;
    } else if (playerSelection.toLowerCase() === 'papel' && computerSelection === 'tesoura') {
        computerScore++;
        resultText.textContent = `Você escolheu ${playerSelection} e o computador ${computerSelection}. Você perdeu: tesoura ganha de papel!`;
    } else if (playerSelection.toLowerCase() === 'tesoura' && computerSelection === 'pedra') {
        computerScore++;
        resultText.textContent = `Você escolheu ${playerSelection} e o computador ${computerSelection}. Você perdeu: pedra ganha de tesoura!`;
    } else if (playerSelection.toLowerCase() === computerSelection) {
        resultText.textContent = `É um empate! Vocês dois escolheram ${computerSelection}!`;
    }   else {
        playerScore++;
        resultText.textContent = `Você escolheu ${playerSelection} e o computador ${computerSelection}. Você ganhou: ${playerSelection} ganha de ${computerSelection}!`;
    }

    playerScoreText.textContent = `${playerScore}`;
    computerScoreText.textContent = `${computerScore}`;

    if (playerScore === 5) {
        theWinner.textContent = `Você marcou ${playerScore} pontos! Você ganhou a partida!`;
        // reset both player and computer score so the 5 round match can be running again
        playerScore = 0;
        computerScore = 0;
        playerScoreText.textContent = `${playerScore}`;
        computerScoreText.textContent = `${computerScore}`;
    } else if (computerScore === 5) {
        theWinner.textContent = `O computador marcou ${computerScore} pontos! Você perdeu, mas não fique chateado: tente novamente!`;
        // reset both player and computer score so the 5 round match can be running again
        playerScore = 0;
        computerScore = 0;
        playerScoreText.textContent = `${playerScore}`;
        computerScoreText.textContent = `${computerScore}`;
    }
};