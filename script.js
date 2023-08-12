let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 9);
}

const getAbsoluteDistance = (humanDifference, computerDifference) => {
  if(humanDifference <= computerDifference) {
      return true;
  } else if(humanDifference > computerDifference) {
    return false;
  } 
}

const compareGuesses = (human, computer, target) => {
  if(human >= 0 && human < 10) {
    const humanDifference = Math.abs(target - human);
    const computerDifference = Math.abs(target - computer);
    const distance = getAbsoluteDistance(humanDifference, computerDifference);
    return distance;
  } else {
    alert("The number is out of range");
  }
} 

const updateScore = (winner) => {
  if(winner === 'human') {
    humanScore++;
  } else if(winner === 'computer') {
    computerScore++;
  } else {
    console.log('Entered wrong string');
  }
}

const advanceRound = () => currentRoundNumber++;

