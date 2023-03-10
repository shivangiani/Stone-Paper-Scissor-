let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = (Math.floor(Math.random()*3));
    return choices[randomNumber];
}

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

function wins(u,c){
    userScore++;
    userScore_span.innerHTML = userScore; 
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(u)} (user)   beats   ${convertToWord(c)} (comp) .  You Win! 🔥`;
    document.getElementById(u).classList.add('green-glow'); 
    setTimeout(() => document.getElementById(u).classList.remove('green-glow') , 300);
}


function lose(u,c){
    computerScore++;
    userScore_span.innerHTML = userScore; 
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(u)} (user)   loses to    ${convertToWord(c)} (comp) . Oh NOOO!!  You Lost! 💩 `;
    document.getElementById(u).classList.add('red-glow'); 
    setTimeout(() => document.getElementById(u).classList.remove('red-glow') , 300);
}

function draw(u,c){
   
    result_p.innerHTML = `${convertToWord(u)} (user)   equals   ${convertToWord(c)} (comp) .  It's a DRAW. `;
    document.getElementById(u).classList.add('gray-glow'); 
    setTimeout(() => document.getElementById(u).classList.remove('gray-glow') , 300);
    
}

function game(userChoice){
    const computerChoice= getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            wins(userChoice,computerChoice);
            break;
        
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            break;
    }

}

function main(){
    rock_div.addEventListener('click',function(){
        game("r");
        
    })
    
    paper_div.addEventListener('click',function(){
        game("p");
    })
    
    scissors_div.addEventListener('click',function(){
        game("s");
    })
}

main();

