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

function playGame(){
    
    let computerScore=0;
    let humanScore=0;

    function playRound(humanChoice, computerChoice){
        if(humanChoice=="rock"){
            if(computerChoice=="scissors"){
                console.log("You win! "+humanChoice+" beats "+computerChoice);
                humanScore++;
            }
            else if(computerChoice=="paper"){
                console.log("You lose! "+computerChoice+" beats "+humanChoice);
                computerScore++;
            }
            else if(computerChoice=="rock"){
                console.log("Draw! "+humanChoice+" and "+computerChoice);
            }
        }
        else if(humanChoice=="paper"){
            if(computerChoice=="rock"){
                console.log("You win "+humanChoice+" beats "+computerChoice);
                humanScore++;
            }
            else if(computerChoice=="scissors"){
                console.log("You lose! "+computerChoice+" beats "+humanChoice);
                computerScore++;
            }
            else if(computerChoice=="paper"){
                console.log("Draw! "+humanChoice+" and "+computerChoice);
            }
        }
        else if(humanChoice=="scissors"){
            if(computerChoice=="paper"){
                console.log("You win "+humanChoice+" beats "+computerChoice);
                humanScore++;
            }
            else if(computerChoice=="rock"){
                console.log("You lose! "+computerChoice+" beats "+humanChoice);
                computerScore++;
            }
            else if(computerChoice=="scissors"){
                console.log("Draw! "+humanChoice+" and "+computerChoice);
            }
        }
    }
    for(var i=0; i<5; i++){
        playRound(getHumanChoice(),getComputerChoice());
    }
    if(humanScore>computerScore){
        console.log("You won the game!");
    }
    else if(computerScore>humanScore){
        console.log("You lose the game!");
    }
    else{
        console.log("Game ended as draw!");
    }
    console.log("Your score:"+humanScore+" Computer score: "+computerScore);
}

playGame();