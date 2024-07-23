function getComputerChoice(){
    let random, computerChoice;
    random = Math.floor(Math.random()*3);
    console.log(random);
    if(random == 0) computerChoice = "rock";
    else if(random == 1)    computerChoice = "paper";
    else if(random ==2) computerChoice = "scissors";
    return computerChoice;
}