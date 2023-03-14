// const startGameBtn = document.getElementById('start-game-btn');

// const ROCK = 'ROCK';
// const PAPER = 'PAPER';
// const SCISSORS = 'SCISSORS';
// const DEFAULT_CHOICE = ROCK;
// const COMPUTER_CHOICE = [ROCK, PAPER, SCISSORS];

// const WIN = 'You win!';
// const LOSE = 'You lose!';
// const DRAW = 'It\'s a draw!';

// let currentlyPlaying = false;

// const getPlayerChoice = () => {
//   const choice = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
//   if (
//     choice !== ROCK &&
//     choice !== PAPER &&
//     choice !== SCISSORS
//   ) {
//     alert(`Invalid input! We returned ${DEFAULT_CHOICE} as your choice.`)
//     return DEFAULT_CHOICE;
//   }
//   return choice;
// }

// const getComputerChoice = () => COMPUTER_CHOICE[Math.floor(Math.random() * COMPUTER_CHOICE.length)]


// const compareChoices = (player, computer) => {
//   if (
//     player === ROCK && computer === SCISSORS ||
//     player === SCISSORS && computer === PAPER ||
//     player === PAPER && computer === ROCK
//   ) {
//     return WIN;
//   } else if (
//     computer === ROCK && player === SCISSORS ||
//     computer === SCISSORS & player === PAPER ||
//     computer === PAPER && player === ROCK
//   ) {
//     return LOSE;
//   } else {
//     return DRAW;
//   }
// }

// const showResult = (result, player, computer) => {
//   alert(`${result}`);
//   switch (result) {
//     case DRAW:
//       console.log(`${result} Both chose ${player}.`);
//       break;
//     case WIN:
//       console.log(`${result} ${player} beats ${computer}!`);
//       break;
//     case LOSE:
//       console.log(`${result} ${computer} beats ${player}!`);
//       break;
//     default:
//       return;
//   }
//   currentlyPlaying = false;
// }

// startGameBtn.addEventListener('click', function start() {
//   if (currentlyPlaying) {
//     return;
//   }
//   console.log("Game is starting...");
//   currentlyPlaying = true;
//   const playerChoice = getPlayerChoice();
//   const compChoice = getComputerChoice();
//   console.log(`You chose ${playerChoice}`);
//   console.log(`Computer chose ${compChoice}`);
//   const result = compareChoices(playerChoice, compChoice);
//   showResult(result, playerChoice, compChoice);
// }); //Indirect execution








const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_CHOICE = ROCK;

const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let currentlyPlaying = false;

const getPlayerChoice = function () {
  const choice = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
  if (
    choice !== ROCK &&
    choice !== PAPER &&
    choice !== SCISSORS
  ) {
    alert(`Invalid input! We returned ${DEFAULT_CHOICE} as your choice.`)
    return; //getPlayerChoice will return undefined
  }
  return choice;
}

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice = DEFAULT_CHOICE) => cChoice === pChoice
  ? RESULT_DRAW
  : pChoice === ROCK && cChoice === SCISSORS ||
    pChoice === SCISSORS && cChoice === PAPER ||
    pChoice === PAPER && cChoice === ROCK
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

const showResult = (result, player, computer) => {
  switch (result) {
    case RESULT_DRAW:
      return `${result} Both chose ${player}.`;
    case RESULT_PLAYER_WINS:
      return `${result} Your ${player} beats computer's ${computer}!`;
    case RESULT_COMPUTER_WINS:
      return `${result} Computer's ${computer} beats your ${player}!`;
    default:
      return;
  }
}

startGameBtn.addEventListener('click', () => {
  if (currentlyPlaying) {
    return;
  }
  currentlyPlaying = true;
  console.log("Game is starting...");
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
  }
  const result = showResult(winner, playerChoice || DEFAULT_CHOICE, computerChoice);
  alert(result);
  currentlyPlaying = false;
}); //Indirect execution