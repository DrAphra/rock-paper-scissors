// arrow function game() to contain all the code
const game = () => {
    let playerScore= 0;
    let computerScore= 0;

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

        const computerNumber = Math.floor(Math.random() * computerOptions.length);
        
    };

    //call all the inner functions
    startGame();
    playMatch();
};

//start the game function
game();