function play(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result;

  if (playerChoice === computerChoice) {
      result = "Draw Match, go again";
  } else if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
          result = "Rock beats scissors! You win";
      } else {
          result = "Paper beats rock, Computer wins";
      }
  } else if (playerChoice === "paper") {
      if (computerChoice === "rock") {
          result = "Paper beats rock, You win";
      } else {
          result = "Scissors beat paper, Computer wins";
      }
  } else if (playerChoice === "scissors") {
      if (computerChoice === "paper") {
          result = "Scissors beat paper! You win";
      } else {
          result = "Rock beats scissors, Computer wins";
      }
  }

  document.getElementById('result').innerText = 
      `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
}
