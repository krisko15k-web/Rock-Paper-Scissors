let playerScore = 0;
let computerScore = 0;

const getRandChoice = () => {
  const randChoice = ["Rock", "Paper", "Scissors"];
  return randChoice[Math.floor(Math.random() * randChoice.length)];
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection == computerSelection) {
    return `Draw! ${playerSelection} = ${computerSelection}`;
  } else if (playerSelection == "Rock" && computerSelection == "Paper") {
    computerScore++;
    return "You Lose! Paper beats Rock";
  } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    playerScore++;
    return "You Win! Rock beats Scissors";
  } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    computerScore++;
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    playerScore++;
    return "You Win! Paper beats Rock";
  } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    computerScore++;
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    playerScore++;
    return "You Win! Scissors beats Paper";
  }
};

const game = () => {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(getRandChoice(), getRandChoice()));
  }
  console.log(`Player score: ${playerScore}`);
  console.log(`Computer score: ${computerScore}`);
  if (playerScore > computerScore) {
    console.log("Player Wins");
  } else if (playerScore < computerScore) {
    console.log("Computer Wins");
  } else {
    console.log("Draw");
  }
};
game();
