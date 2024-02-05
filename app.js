let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice =() =>{
    const options =["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};


const drawGame =()=>{
    
    msg.innerText = 'Draw . Play Again.';
    msg.style.backgroundColor ='#023047 '
};


const showWinner =(userWin , userChoice, compChoice) =>{
    if(userWin == true ){
        userScore++;
        userScorePara.innerText = userScore;
        
        msg.innerText = `You Win!!  Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = '#780000';
    }
    else{
        
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText =`You Lose. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = '#005f73';

    }
};


const playGame = (userChoice)=>{
    console.log("user choice = ",userChoice);
    //generate comp choice
    const compChoice = genCompChoice();
    console.log("comp choice = ",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice == "rock"){
            //scissors, paper
            userWin = compChoice =="paper" ? false :true ;
        }
        else if(userChoice == "paper"){
            //scissors,rock
            userWin = compChoice =="scissors" ? false : true ;
        }
        else{
            //rock, paper
            userWin = compChoice == "rock" ? false : true ;
        }

        showWinner(userWin , userChoice , compChoice);
    }
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        console.log("choice is clicked",userChoice);
        playGame(userChoice);
    });

});











