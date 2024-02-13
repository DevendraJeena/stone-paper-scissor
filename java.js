let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options =["stone" , "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

}

const drawGame = () =>{
    console.log("game is draw");
    msg.innerText= "Game was draw. Play again" ;
    msg.style.backgroundColor ="grey";
}

const showWinner = (userWin,userchoice ,compChoice) => {
    if(userWin){
        userscore++;
        userScorePara.innerText = userscore;
        console.log("you win");
        msg.innerText= `You win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    }else {console.log("you lose ");
         compscore++;
         compScorePara.innerText = compscore;
    msg.innerText= `You lose ${compChoice} beats Your ${userchoice}`;
    msg.style.backgroundColor ="red";
}
}

const playGame = (userchoice) =>{
    console.log("user choice =" ,userchoice);
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if(userchoice===compChoice){
        drawGame();
    }else {
        let userWin = true;
        if(userchoice==="stone"){
            userWin = compChoice=== "paper" ? false : true;
        }else if (userchoice=== "paper"){
            userWin = compChoice==="scissor" ? true : false;
        }else{
            userWin = compChoice==="stone" ? false : true;
        }
        showWinner(userWin ,userchoice ,compChoice);
    }
    

}

choices.forEach( (choice) =>{
    console.log(choice);
    choice.addEventListener( "click" ,() =>{
      const userchoice=  choice.getAttribute("id");
    playGame(userchoice);
  })
})  
