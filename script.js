// arrow function game() to contain all the code
const game = () => {
    let playerScore= 0;
    let computerScore= 0;

    const startGame =() => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", ()=>{
            introScreen.classList.add("fadeOut");
        });
    };

    //call all the inner functions
    startGame();
};

//start the game function
game();