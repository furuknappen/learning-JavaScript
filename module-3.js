const filenames = ["document.pdf", "image_01.jpg", "photo.png", "music.mp3"];

console.log("Image files found:");
for (let i = 0; i < filenames.length; i++) {
  const currentFile = filenames[i];
  // We check for image extensions in lowercase to be safe.
  if (
    currentFile.toLowerCase().includes(".jpg") ||
    currentFile.toLowerCase().includes(".png")
  ) {
    console.log(currentFile);
  }
}

const myFavouriteQuote = "Everything becomes better with chocolate";

console.log(myFavouriteQuote);
console.log("The quote is " + myFavouriteQuote.length + " characters long.");

const upperCaseQuote = myFavouriteQuote.toUpperCase();
console.log(upperCaseQuote);

const lowerCaseQuote = myFavouriteQuote.toLowerCase();
console.log(lowerCaseQuote);

let username = "";
if (username.length < 6) {
  console.log("Username is too short");
} else {
  console.log("username is acceptable");
}

const url = "https://www.example.com/profile";
if (url.startsWith("https://")) {
  console.log("This is a secure email");
}

const domainUrl = url.slice(8);
console.log(domainUrl);

const rawTags = "  javascript, web-dev, programming_fundamentals, fun_stuff   ";

let cleanTags = rawTags.trim();

cleanTags = cleanTags.replaceAll("_", "-");

let tagsArray = cleanTags.split(", ");

console.log(cleanTags);
console.log(tagsArray);

const priceString1 = "15.75";
const priceString2 = "25.50";

const priceNumber1 = parseFloat(priceString1);
const priceNumber2 = parseFloat(priceString2);


const totalPrice = priceNumber1 + priceNumber2

const formattedPrice = totalPrice.toFixed(2)

console.log(totalPrice);
console.log("The total formatted price is: $" + formattedPrice +".");

const number= "2.9";
console.log(parseInt(number))

// magic 8 ball

const magic8BallResponse = ["It is certain.", "Ask again later.", "My sources say no.", "Hell yes"]

function pickRandomAnswer() {
  const randomIndex = Math.floor(Math.random()* magic8BallResponse.length);
 console.log(randomIndex)
  const randomResponse= magic8BallResponse[randomIndex]
  console.log(randomResponse)
}
pickRandomAnswer();
pickRandomAnswer();
pickRandomAnswer();



// This is our main function. It accepts a 'callback' as its second argument.
function createGreeting(name, kaki) {
    const greeting = 'Hello, ' + name;
    // Now, we call the function that was passed in, using the greeting as its argument.
    kaki(greeting);
}

// These are our callback functions. They each do something different.
function logToConsole(message) {
    console.log(message);
}

function displayInAlert(message) {
    alert(message); // alert() is a browser function that creates a pop-up.
}

// Now we use our main function with different callbacks.
createGreeting('Alice', logToConsole); // This will log "Hello, Alice" to the console.
// createGreeting('Bob', displayInAlert);
 // This will show a pop-up alert with "Hello, Bob".

function createGreeting(name, callback) {
    const greeting = 'Hello, ' + name;
    callback(greeting);
}

// We define the function directly as we pass it in.
createGreeting('Charlie', function (message) {
    console.log('This is from an anonymous callback:', message);
});

function createGreeting(name, callback) {
    const greeting = 'Hello, ' + name;
    callback(greeting);
}

// Using an arrow function makes the callback very short and clean.
createGreeting('Dana', (message) => {
    console.log('This is from an arrow function callback:', message);
});








