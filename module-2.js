

const favouriteFoods= ["kebab", "sushi", "tacos"];

const luckyNumbers= [8, 12, 24, 61];
const isReady = [true, false];

console.log(favouriteFoods);
console.log(luckyNumbers);
console.log(isReady);

// --------------------------
let shoppingCart = ['Milk', 'Bread'];
console.log('Cart contents:', shoppingCart);

console.log('Adding Eggs to the cart...');
shoppingCart.push('Eggs');
console.log('Cart contents:', shoppingCart);

console.log('Adding Cheese and Yogurt to the cart...');
const newCartLength = shoppingCart.push('Cheese', 'Yogurt');
console.log('Cart contents:', shoppingCart);
console.log('The cart now has ' + newCartLength + ' items.');


const highScores = [85, 92, 98, 95];
// The length is 4.
// The last index is 4 - 1 = 3.

const lastScore = highScores[highScores.length - 1];
console.log('The last high score is:', lastScore); // Output: 98


const fruits = ["Banana", "Orange", "Apple", "Mango"];  
fruits.push("Kiwi");
console.log(fruits);

const seasons = ['Spring', 'Summer', 'Autumn', 'Winter'];
console.log('Before pop:', seasons); // Output: ["Spring", "Summer", "Autumn", "Winter"]

const removedSeason = seasons.pop();

console.log('After pop:', seasons); // Output: ["Spring", "Summer", "Autumn"]
console.log('The removed season was:', removedSeason); // Output: "Winter"


const attendees= ['Alice', 'Bob', 'Karl', 'David'];
console.log(`There are ${attendees.length} people attending the event.`);
attendees.push("Charlie")
console.log(`There are now ${attendees.length} people attending the event.`);
console.log(attendees);
removedAttednee = attendees.pop();
console.log(removedAttednee + " is no longer attending the event.");console.log(attendees);

const colours = ['red', 'green', 'blue', 'yellow', 'purple'];

for (let i = 0; i < colours.length; i++) {
    // In the first iteration, i is 0, so colours[i] is "red"
    // In the second iteration, i is 1, so colours[i] is "green"
    // ...and so on.
    console.log(colours[i]);
}


const favouriteBooks = ['Erere re', ' Mockingbird', 'The Great Gatsby', 'Pride and Prejudice', 'The Catcher in the Rye', 'ertyuiolkjhgfds'];

// for(let i = 0; i < favouriteBooks.length; i++) 
// {
//     console.log((i+1)+ ". " +favouriteBooks[i]);
// }

for (let i = 0; i < favouriteBooks.length; i++) {

  const titleLength = favouriteBooks[i].length >= 15;
  // console.log(titleLength);
    // console.log((i+1)+ ". " +favouriteBooks[i]); 
   
    if (titleLength) {

      console.log(favouriteBooks[i])
    }
}


const blogPost = {
  title: 'A Guide to JavaScript Objects',
  author: 'Alex Developer',
  wordCount: 1200,
  isPublished: true,
  tags: ['javascript', 'programming', 'webdev'],
};

// We can see the whole object by logging it to the console.
console.log(blogPost);

myAnimal = {
  species: 'Dog',
  name: 'Buddy',
  age: 3,
  isFriendly: true,
  favoriteToys: ['Ball', 'Bone', 'Squeaky Toy'],
};

console.log(myAnimal);

const movie = {
  title: 'Inception',
  director: 'Christopher Nolan',
  'release year': 2010,
  rating: 8.8,
};
console.log(movie.title)
console.log(movie.director)
console.log(movie["release year"])
let propToAccess  = "rating"
console.log(movie[propToAccess])


const products = [
  {
    id: 1,
    name: 'Laptop',
    price: 1200,
  },
  {
    id: 2,
    name: 'Smartphone',
    price: 800,
  },
  {
    id: 3,
    name: 'Headphones',
    price: 150,
  },
];

for (let i = 0; i < products.length; i++) {

  console.log("Product: " + products[i].name  + ", Price: " + products[i].price)
}