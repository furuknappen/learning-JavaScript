// const productJSON =
// '{"id":45,"title":"Wireless Headphones","price":99.99,"inStock":true}';

// const parsed = JSON.parse(productJSON)

// console.log(parsed)
// console.log(parsed.title)

// try {
//   const settingsJSON =
// '{"theme":"dark","notifications":true,"showAvatar":false}';

// const parsedsettings = JSON.parse(settingsJSON)

// console.log(parsedsettings)
// }
// catch(error
// ){
//   console.error("the error is: "+ error)
// }

// localStorage.setItem('myName', 'Camilla')

// const theName = localStorage.getItem("myName")

// console.log(theName)

// console.log(localStorage.getItem("myName"))

// localStorage.removeItem('myName')
// console.log(localStorage.getItem("myName"))

// const answer = ""
// if (answer != null && answer.lenght > 0){

// }
// else{
//   console.log("nothing was entered")
//   prompt("What is your favourite color:", "pink")
// }

// const answer = prompt("What is your favourite color:", "pink");
//  sessionStorage.setItem("favoriteColor", answer);
// const gotColor =sessionStorage.getItem("favoriteColor")
// if (gotColor) {
//   console.log(
//     "Your favourite color is: " + gotColor);
// } else {
// console.log("Please answer the question");
// }

// const answer= console.log("blue")
// const answer2 = prompt().value

const userPreferences = {
  theme: "dark",
  fontSize: 20,
  notificationsEnabled: true,
};
localStorage.setItem("userPrefs", JSON.stringify(userPreferences));
const answer = localStorage.getItem("userPrefs");
const test = JSON.parse(answer);
console.log(test.theme);
