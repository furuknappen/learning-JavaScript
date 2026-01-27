console.log("The script.js file has started running.");
console.log("This is the first check-in.");
console.log("This is the second check-in.");
console.log("The script has finished.");

// console.log(myMessage);

console.log("My name is Camilla.");
console.log("I am learning JavaScript.");
console.log("This is my first console task.");

// this is a syntax error: Unexpected string
console.log("This is an error");

const nameTs = "Camillalala";
console.log(nameTs);

const reguiredAge = 18;
let userAge = 20;

const isOldEnough = userAge >= reguiredAge;
console.log(isOldEnough);

const winningScore = 100;
let playerScore = 100;

const hasWonGame = playerScore === winningScore;
console.log(hasWonGame);

// Made aaalll by myself actually
const votingAge = 18;
const yourAge = 18;

if (yourAge >= votingAge) {
  console.log("You're old enough to vote");
} else {
  let yearsUntilVotingAge = votingAge - yourAge;
  if (yearsUntilVotingAge === 1) {
    console.log(
      "You can't vote yet, you can vote in " + yearsUntilVotingAge + " year."
    );
  } else {
    if (yearsUntilVotingAge > 1) {
      console.log(
        "You can't vote yet, you can vote in " + yearsUntilVotingAge + " years."
      );
    }
  }
}

let temperature = 15;

if (temperature <= 0) {
  console.log("its freezing");
} else if (temperature <= 15) {
  console.log("its cold");
} else if (temperature <= 25) {
  console.log("its pleasant");
} else {
  console.log("its hot");
}

let userRole = "user";

switch (userRole) {
  case "admin":
     console.log("Welcome, Admin!")
    break;
  case "moderator":
    console.log("Welcome, Moderator!")
    break;  
  case "user":
    console.log("Welcome, User!")
    break;
  default:
    console.log("you are not welcome here!")
}
for (let i = 0; i <= 5; i++) {
    console.log(i);
}

const number = 7;

console.log('Multiplication Table for ' + number);

for (let i = 1; i <= 10; i++) {
    const result = number * i;
    console.log(number + ' x ' + i + ' = ' + result);
}

`h `
for (i = 2; i <= 20; i += 2) {
  console.log(i)
}

let diceRoll = 0;
let rollCount = 0;

do {
 let randomNumber = Math.floor(Math.random() * 6) + 1;
 diceRoll = randomNumber
 rollCount++;
 console.log(`Roll: ${rollCount}. You rolled a ${diceRoll}`)

} while (diceRoll !== 6) 

console.log("it took " + rollCount + " rolls to get a 6")