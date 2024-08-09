function getComputerChoice(){
    let random, computerChoice;
    random = Math.floor(Math.random()*3);
    if(random == 0) computerChoice = "rock";
    else if(random == 1)    computerChoice = "paper";
    else if(random ==2) computerChoice = "scissors";
    return computerChoice;
}

function getHumanChoice(){
    let humanChoice;
    humanChoice= prompt("Enter your choice:");
    humanChoice=humanChoice.toLowerCase();
    if(humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors"){
        console.error("Invalid choice");
    }
    return humanChoice;
}

let divResult = document.querySelector("#results");
    
let computerScore=0;
let humanScore=0;

function playRound(humanChoice, computerChoice){
    if(humanChoice=="rock"){
        if(computerChoice=="scissors"){
            divResult.textContent = "You win! "+humanChoice+" beats "+computerChoice;
            humanScore++;
        }
        else if(computerChoice=="paper"){
            divResult.textContent = "You lose! "+computerChoice+" beats "+humanChoice;
            computerScore++;
        }
        else if(computerChoice=="rock"){
            divResult.textContent = "Draw! "+humanChoice+" and "+computerChoice;
        }
    }
    else if(humanChoice=="paper"){
        if(computerChoice=="rock"){
            divResult.textContent = "You win "+humanChoice+" beats "+computerChoice;
            humanScore++;
        }
        else if(computerChoice=="scissors"){
            divResult.textContent = "You lose! "+computerChoice+" beats "+humanChoice;
            computerScore++;
        }
        else if(computerChoice=="paper"){
            divResult.textContent = "Draw! "+humanChoice+" and "+computerChoice;
        }
    }
    else if(humanChoice=="scissors"){
        if(computerChoice=="paper"){
            divResult.textContent = "You win "+humanChoice+" beats "+computerChoice;
            humanScore++;
        }
        else if(computerChoice=="rock"){
            divResult.textContent = "You lose! "+computerChoice+" beats "+humanChoice;
            computerScore++;
        }
        else if(computerChoice=="scissors"){
            divResult.textContent = "Draw! "+humanChoice+" and "+computerChoice;
        }
    }
}
    // if(humanScore>computerScore){
    //     divResult.textContent = "You won the game!");
    // }
    // else if(computerScore>humanScore){
    //     divResult.textContent = "You lose the game!");
    // }
    // else{
    //     divResult.textContent = "Game ended as draw!");
    // }
    // divResult.textContent = "Your score:"+humanScore+" Computer score: "+computerScore);

let btnRock = document.querySelector("#rock");
let btnPaper = document.querySelector("#paper");
let btnScissors = document.querySelector("#scissors");

btnRock.addEventListener("click", () => playRound("rock", getComputerChoice()));
btnPaper.addEventListener("click", () => playRound("paper", getComputerChoice()));
btnScissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));