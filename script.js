//function for generating rock paper or scissors for computer.
function computerPlay(){
  let randomNumberGenerator = (number) =>  {return Math.floor(Math.random()*number)};
  randomNumber = randomNumberGenerator(3)
  switch(randomNumber){
    case 0: 
      return "Rock"
    case 1: 
      return "Paper"
    case 2: 
      return "Scissors"
  }
}

let playerScore = 0,
    computerScore = 0;

function playRound(playerSelection,computerSelection){
  let scoreBoard = document.querySelector(".score-board");
  let finalResult = document.createElement("p");

  if (playerScore == 5){
    finalResult.textContent = "You have won 5 games!";
    scoreBoard.appendChild(finalResult);

    return // stop the function
  }
  else if (computerScore == 5){
    finalResult.textContent = "Computer has won 5 games. You Lost!";
    scoreBoard.appendChild(finalResult);

    return // stop the function
  }

  // lowering the cases to prevent errors.
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  let resultBoard = document.querySelector(".result-board");
  let results = document.createElement("p");
  switch (playerSelection){
    // if playerSelection is Rock
    case "rock":
      if (computerSelection == "rock"){
        results.textContent = "Draw. Computer is also Rock.";
        resultBoard.appendChild(results);

        break
      }
      else if (computerSelection == "paper"){
        results.textContent = "Lose. Computer is Paper.";
        resultBoard.appendChild(results);
        computerScore++;

        break
      }
      else if (computerSelection == "scissors"){
        results.textContent = "Win. Computer is Scissors.";
        resultBoard.appendChild(results);
        playerScore++;

        break
      }
    // if playerSelection is Paper
    case "paper":
      if (computerSelection == "rock"){
        results.textContent = "Win. Computer is Rock.";
        resultBoard.appendChild(results);
        playerScore++;

        break
      }
      else if (computerSelection == "paper"){
        results.textContent = "Draw. Computer is also Paper.";
        resultBoard.appendChild(results);

        break
      }
      else if (computerSelection == "scissors"){
        results.textContent = "Lose. Computer is Scissors.";
        resultBoard.appendChild(results);
        computerScore++;

        break
      }
    // if playerSelection is Scissors
    case "scissors":
      if (computerSelection == "rock"){
        results.textContent = "Lose. Computer is Rock.";
        resultBoard.appendChild(results);
        computerScore++;

        break
      }
      else if (computerSelection == "paper"){
        results.textContent = "Win. Computer is Paper.";
        resultBoard.appendChild(results);
        playerScore++;

        break
      }
      else if (computerSelection == "scissors"){
        results.textContent = "Draw. Computer is also Scissors.";
        resultBoard.appendChild(results);

        break
      }
  }
  if (document.querySelector("#player-score")){
    scoreBoard.removeChild(document.querySelector("#player-score"));
  }
  if (document.querySelector("#computer-score")){
    scoreBoard.removeChild(document.querySelector("#computer-score"));
  }

  const playerScoreBoard = document.createElement("p");
  const computerScoreBoard = document.createElement("p");
  playerScoreBoard.setAttribute("id","player-score");
  computerScoreBoard.setAttribute("id","computer-score");

  playerScoreBoard.textContent = "Player Score = " + playerScore;
  computerScoreBoard.textContent = "Computer Score = " + computerScore;
  scoreBoard.appendChild(playerScoreBoard);
  scoreBoard.appendChild(computerScoreBoard);
}


const rock = document.querySelector("#rock"),
      paper = document.querySelector("#paper"),
      scissors = document.querySelector("#scissors");

rock.addEventListener("click",() => {
  let playerChoice = "rock";
  let computerChoice = computerPlay();

  playRound(playerChoice,computerChoice);
});

paper.addEventListener("click",() => {
  let playerChoice = "paper";
  let computerChoice = computerPlay();

  playRound(playerChoice,computerChoice);
});

scissors.addEventListener("click",() => {
  let playerChoice = "scissors";
  let computerChoice = computerPlay();

  playRound(playerChoice,computerChoice);
});
