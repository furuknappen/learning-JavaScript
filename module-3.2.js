calculator(7, 2, subtract);

function calculator(num1, num2, operationCallback) {
  let result = operationCallback(num1, num2);
  console.log("the result is " + result);
}

// () => {}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

const names = ["mia", "Emma", "ella", "kia"];

names.forEach((name, index) => {
  console.log("Nr." + index + ": " + name);
});

const userNames = ["mia1", "Emma22", "ella33", "kia14"];

userNames.forEach((name) => {
  console.log("hello, and Welcome: " + name);
});

const products = [
  { name: "Laptop", price: 1200 },
  { name: "Smartphone", price: 800 },
  { name: "Headphones", price: 150 },
];

const formattedProducts = products.map((product) => {
  return `The ${product.name} costs ${product.price} dollars`;
});

console.log(formattedProducts);

const formattedProducts2 = products.map((product) => {
  // const productName = product.name;
  // const salePrice = product.price / 2;

  return {
    productName: product.name,
    salePrice: product.price / 2,
  };
});

console.log(formattedProducts2);

const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 59 },
  { name: "Charlie", score: 92 },
  { name: "Dana", score: 48 },
  { name: "Eve", score: 76 },
];

const passingStudents = students.filter((student) => {
  return student.score >= 60;
});

console.log(passingStudents);

const library = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", isbn: "9780345339683" },
  { title: "Dune", author: "Frank Herbert", isbn: "9780441013593" },
  { title: "Foundation", author: "Isaac Asimov", isbn: "9780553803714" },
];

const isbnToFind = "9780441013593";

library.find((book) => {
  const foundBook = book.isbn === isbnToFind;
  // console.log("answer: " + foundBook)
  if (foundBook) {
    console.log(book.isbn + " " + book.author);
  } else {
    console.log("no book found");
  }
});


const person = {
  name: 'Alice',
  age: 30,
  city: 'London',
};

for (const index in person) {
  const propertyValue = person[index];
  console.log('Key:', index, '| Value:', propertyValue);
}

