// arrow function game() to contain all the code
const game = () => {
    let pScore= 0;
    let cScore= 0;

    //start the game
    const startGame =() => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", ()=>{
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    //play match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        //this gets the computer options
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(options=>{
            options.addEventListener("click", function(){ //use a normal function here, if use an arrow function the keyword "this" doesn't bind to option
                //Computer choice
                const computerNumber = Math.floor(Math.random() * computerOptions.length);
                const computerChoice = computerOptions[computerNumber];
                //we compare the results and declare the round winner
                compareResults(this.textContent, computerChoice);
                
            });
        });
    };

    //update score function. It must be before the function return below, otherwise it won't work
    const updateScore = () =>{
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    //we need a function that compares results to declare a winner

    const compareResults = (playerChoice, computerChoice) => {

        //update text
        const winner = document.querySelector(".winner");

        //check for a tie
        if (playerChoice === computerChoice){
            winner.textContent = "It is a tie!";
            return;
        }
        //check for rock
        if (playerChoice === "rock"){
            if(computerChoice === "scissors"){
                winner.textContent = "Player wins";
                pScore++;
                updateScore();
                return;
            } else{
                winner.textContent = "Computer wins";
                cScore++;
                updateScore();
                return;
            }
        }
        // check for paper
        if (playerChoice === "paper"){
            if(computerChoice === "rock"){
                winner.textContent = "Player wins";
                pScore++;
                updateScore();
                return;
            } else{
                winner.textContent = "Computer wins";
                cScore++;
                updateScore();
                return;
            }
        }
        //check for scissors
        if (playerChoice === "scissors"){
            if(computerChoice === "paper"){
                winner.textContent = "Player wins";
                pScore++;
                updateScore();
                return;
            } else{
                winner.textContent = "Computer wins";
                cScore++;
                updateScore();
                return;
            }
        }
        
    }


    //call all the inner functions
    startGame();
    playMatch();
};

//start the game function
game();