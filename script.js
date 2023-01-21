const options= ['rock', 'paper', 'scissors']; // arrays of options

function getComputerChoice(){ //I declare the function
    const choice = options[Math.floor(Math.random()*options.length)];
    //console.log(choice) shows the choice in the console
    return(choice)
} 

getComputerChoice(); //I recall the function to let it work

function checkWinner(playerSelection, computerSelection){ // this function compares the two choices and declares the result
    if (playerSelection == computerSelection) {
        return 'tie';
    } else if (
        (playerSelection == 'rock' && computerSelection == 'scissors')||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')){
            return 'Player'
    } else{
            return 'Computer'
        }

}

function playRound (playerSelection, computerSelection){ //this function plays 1 round, I need a function to check who the winner is (function right above)
    const result = checkWinner(playerSelection, computerSelection) //I declare the variable result that is equal to the function checkWinner
    if (result == 'tie') { 
        return "it's a tie!"
    } else if (result == 'Player') {
        return `You win!${playerSelection} beats ${computerSelection}`
    } else {
        return `You lose!${computerSelection} beats ${playerSelection}`
    }
}


//I use this to test if the function is working
// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection)); 

function getPlayerChoice(){ //in this function I use loop to keep asking the player for an input, if it's mistaken keeps asking
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt ("rock paper scissors");
        if (choice == null){
            continue;
        } 
        const choiceInLower = choice.toLowerCase(); //then the function has to check if the input are among the possible choices, for that purpose we use JS Arrays includes() method
        if(options.includes(choiceInLower)){
            validatedInput = true; //stops the loop and returns the choice in lowercase
            return choiceInLower;
        }
    }
}

function game(){
    let scorePlayer = 0; // use let not const because the value changes; //we need to keep the score and report a winner or loser at the end
    let scoreComputer = 0;
    console.log("Welcome!")
    /*for (let i = 0; i < 5; i++)*/ {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("--------")
        if(checkWinner(playerSelection, computerSelection)== "Player"){
            scorePlayer++;
        } else if (checkWinner(playerSelection, computerSelection)== "Computer"){
            scoreComputer++
        }
    }
    console.log("Game Over!")
    if (scorePlayer > scoreComputer){
        console.log("Player is the winner!");
    } else if(scorePlayer < scoreComputer) {
        console.log("Computer is the winner!")
    } else {
        console.log("It's a tie!")
    }
}

game();

//we need to keep the score and report a winner or loser at the end