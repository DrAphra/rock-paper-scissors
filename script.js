const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random()*options.length)];
    //console.log(choice);
    return (choice)
}

getComputerChoice();

function checkWinner (playerSelection, computerSelection){
    if(playerSelection == computerSelection) {
        return "tie";
    } else if ( 
        (playerSelection == "rock" && computerSelection == "scissors")||
        (playerSelection == "paper" && computerSelection == "rock")||
        (playerSelection == "scissors" && computerSelection == "paper")){
            return "player"
    } else{
            return "computer"
        }

}

function playRound(playerSelection, computerSelection) {
    
    if(checkWinner(playerSelection, computerSelection) == "tie"){
        return `It's a Tie!!!`;
    } else if (checkWinner(playerSelection, computerSelection) == "player"){
        return `You win!${playerSelection} beats ${computerSelection}`
    } else {
        return `You lose!${computerSelection} beats ${playerSelection}`
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));