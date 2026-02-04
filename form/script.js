// console.log("hello");

// const BASE_API_URL = "https://v2.api.noroff.dev";
// const AUTH_REGISTER_USER = `${BASE_API_URL}/auth/register`;

// const registerForm = document.getElementById("register-form");

// async function registerUser(userDetails) {
//   try {
//     const fetchOptions = {
//       method: "POST",
//       body: JSON.stringify(userDetails),
//       headers: {'Content-Type': 'application/json',}
//     };
//     const response = await fetch(AUTH_REGISTER_USER, fetchOptions);
//     console.log("response: " + response)
//   } catch (error) {
//     console.log("Something is wrong" + error);
//   }
// }

// function onRegisterFormSubmit(event) {
//   event.preventDefault();
//   const formData = new FormData(event.target);
//   const formFields = Object.fromEntries(formData);
//   registerUser(formFields);
// }

// registerForm.addEventListener("submit", onRegisterFormSubmit);

// async function registerUser(userData) {

//   console.group(`Registering user: ${userData.name}`);

//   try {
//     console.log('Step 1: Validating user data...');
//     if (!userData.email.includes('@stud.noroff.no')) {
//       throw new Error('Invalid email domain.');
//     }
//     console.log('Validation successful.');

//     console.log('Step 2: Sending data to API...');

//     const response = { ok: true, id: 123 };
//     console.log('API response received.');

//     if (!response.ok) {
//       throw new Error('API registration failed.');
//     }

//     console.log(`Step 3: Registration complete. New user ID is ${response.id}.`);
//   } catch (error) {
//     console.error('Registration failed:', error.message);
//   } finally {

//     console.groupEnd();
//   }
// }

// const newUser = { name: 'TestUser', email: 'test.user@stud.noroff.no' };
// registerUser(newUser);
console.log("works")
const cat = 32

function calculateTotal(price, quantity) {
    const subtotal = price * quantity;
    const tax = subtotal * 0.2;
    const total = subtotal + tax;

    // Set a breakpoint on the next line
    return total;
}

calculateTotal(50, 2);

const users = [
    { name: 'Alex', age: 30, isActive: true },
    { name: 'Sandra', age: 25, isActive: false },
    { name: 'Kevin', age: 42, isActive: true },
];

function getActiveUsers(userList) {
    const activeUsers = [];
    for (const user of userList) {
        // Set a breakpoint on the next line
        if (user.isActive) {
            activeUsers.push(user);
        }
    }
    return activeUsers;
}

getActiveUsers(users);

const products = [
    { id: 101, name: 'Laptop', price: 1200 },
    { id: 102, name: 'Mouse', price: 25 },
    { id: 103, name: 'Keyboard', price: 75 },
];

function findProductById(productId) {
    let foundProduct = null;
    for (const product of products) {
        // The bug is in the next line
        if (product.id === '102') {
            foundProduct = product;
        }
    }
    return foundProduct;
}

const result = findProductById(102);
console.log('Found product:', result); // This logs null, which is incorrect.