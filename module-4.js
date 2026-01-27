
console.log(document.title);
console.log("hello")


console.log(document.lastModified);
// document.title = "The new title"

const heading2 = document.getElementById("headingTitle")

// console.dir(heading2);

const profileContainer = document.getElementById('user-profile');
const updateButton = document.getElementById('update-btn');

// A quick check to make sure the button was found
if (updateButton) {
  // We can change its properties
  updateButton.textContent = 'Save Changes';
} else {
  console.log('The update button was not found on the page.');
}

// We could later use profileContainer to add more HTML inside it
// console.log(profileContainer);

const allP = document.querySelectorAll("p")
console.log(allP.length)

const products = ['T-Shirt', 'Mug', 'Sticker'];
const productList = document.getElementById('product-list');

let listHTML = '';
for (const product of products) {
  // We build up a string of HTML list items
  listHTML += `<li>${product}</li>`;
}

// Now we set the innerHTML of the <ul> in one go
productList.innerHTML = listHTML;


const input = document.getElementById('comment-input');
const button = document.getElementById('submit-btn');
const display = document.getElementById('comment-display');

button.addEventListener('click', function () {
  const userComment = input.value;

  // DANGEROUS: Using innerHTML with user input
  // display.innerHTML = userComment;

  // SAFE: Using textContent with user input
  display.textContent = userComment;
});

const box = document.getElementById('message-box');

// Change the background and text colour
box.style.backgroundColor = 'cornflowerblue';
box.style.color = 'white';

// Change the size and add some padding
box.style.width = '300px';
box.style.padding = '20px';

// Change a font property
box.style.fontSize = '18px';


const passwordInput = document.getElementById('password-input');

passwordInput.addEventListener('keyup', function () {
  const password = passwordInput.value;

  if (password.length === 0) {
    // No input yet, default border
    passwordInput.style.border = '1px solid grey';
  } else if (password.length < 8) {
    // Too short, show a red border
    passwordInput.style.border = '2px solid red';
  } else {
    // Long enough, show a green border
    passwordInput.style.border = '2px solid green';
  }
});


const input1 = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

addButton.addEventListener('click', function () {
  const taskText = input1.value;

  // Don't add an empty task
  if (taskText.trim() === '') {
    alert('Please enter a task.');
    return;
  }

  // --- Create the new elements ---
  const listItem = document.createElement('li');
  const removeButton = document.createElement('button');

  // --- Configure the new elements ---
  listItem.textContent = taskText + ' '; // Add a space for the button
  removeButton.textContent = 'Remove';

  // --- Set up the remove functionality ---
  removeButton.addEventListener('click', function () {
    // When this button is clicked, remove its parent listItem
    listItem.remove();
  });

  // --- Add the elements to the DOM ---
  listItem.appendChild(removeButton); // Append button to the li
  list.appendChild(listItem); // Append li to the ul

  // --- Clean up ---
  input.value = ''; // Clear the input field
  input.focus(); // Put the cursor back in the input
});


const toggleButton = document.getElementById('toggle-btn');
const secretMessage = document.getElementById('secret-message');

toggleButton.addEventListener('click', function () {
  // Check the current display style
  if (secretMessage.style.display === 'none') {
    // If it's hidden, show it
    secretMessage.style.display = 'block';
  } else {
    // If it's visible, hide it
    secretMessage.style.display = 'none';
  }
});