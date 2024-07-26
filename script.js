let computerScore=0;
let humanScore=0;

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