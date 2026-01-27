
const secretNumber = Math.floor(Math.random() * 100) + 1;
console.log("Testing number: " + secretNumber);

let playerGuess = 0;
let attempts = 0;

// while (playerGuess !== secretNumber) {
//   playerGuess = parseInt(prompt('Guess a number between 1 and 100'));
//   attempts++;
//   if(playerGuess > secretNumber) {
//     console.log("Too high!")
//   } else if (playerGuess < secretNumber) {
//     console.log("Too low!")
//   } else{
//     console.log("Congratulations! You guessed the correct number in " + attempts + "!");
//   }

// }

do {playerGuess = parseInt(prompt('Guess a number between 1 and 100'));
  attempts++;
  if(playerGuess > secretNumber) {
    console.log("Too high!")
  } else if (playerGuess < secretNumber) {
    console.log("Too low!")
  } else{
    console.log("Congratulations! You guessed the correct number in " + attempts + "!");
  }}
while (playerGuess !== secretNumber) 

