

// function processOrderPromise(orderId) {
//     return new Promise((resolve, reject) => {
//         if (typeof orderId !== 'number') {
//             return reject(new Error('Invalid order ID. Must be a number   .'));
//         }

//         console.log(`Processing order ${orderId}...`);
//         setTimeout(() => {
//             const message = `Order ${orderId} has been processed.`;
//             resolve(message);
//         }, 2000);
//     });
// }

// processOrderPromise("rr")
// .then((message)=>{
//   console.log(message)

// })
// .catch((error)=>{
// console.log(error.message)
// })
// .finally(()=>{
//   console.log("Order prossesing attempt finnished")
// });


// const validOrder = processOrderPromise(123);
// console.log(validOrder);

// const invalidOrder = processOrderPromise('abc');
// console.log(invalidOrder);



async function asyncFunction() {
    return 'Hello from async';
}

const promiseFromAsync = asyncFunction();
console.log('Async function returns:', promiseFromAsync); 
// Output: Promise { <state>: "fulfilled", <value>: "Hello from async" }

// To get the value out, we use .then()
promiseFromAsync.then((value) => {
    console.log('Value from async promise:', value); 
    // Output: Hello from async
});



function bookFlight(destination) {
    console.log(`Booking flight to ${destination}...`);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ flight: 'XZ-123', destination: destination });
        }, 1500);
    });
}

function bookHotel(flightDetails) {
    console.log(`Booking hotel in ${flightDetails.destination}...`);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ hotel: 'Grand Plaza', bookingRef: 'H-456' });
        }, 1000);
    });
}

function arrangeTransport(hotelDetails) {
    console.log(`Arranging transport from hotel: ${hotelDetails.hotel}...`);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ transport: 'Rental Car', confirmation: 'T-789' });
        }, 500);
    });
}

async function planTrip(destination) {

  const flightInfo = await bookFlight(destination)

  console.log(flightInfo)

  const hotelInfo = await bookHotel(flightInfo) 
  console.log(hotelInfo)

  const transportInfo = await arrangeTransport(hotelInfo) 
  console.log(transportInfo)
console.log(`Your trip to ${destination} is fully booked!`)
}

  planTrip('spain')

  function fetchUserPromise(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === 'Sandra') {
                resolve({ id: 2, name: 'Sandra' });
            } else {
                reject(new Error('User not found.'));
            }
        }, 1000);
    });
}

async function displayUserData(username) {
    console.log(`Attempting to fetch data for ${username}...`);
    // This could be where you show a loading spinner

    try {
        // Place all await calls that are part of one operation here
        const user = await fetchUserPromise(username);
        console.log(`Success! User found: ${user.name}`);
        // Here you would update the UI with the user's data
    } catch (error) {
        // If fetchUserPromise rejects, this block runs
        console.error(`Failed to fetch data: ${error.message}`);
        // Here you would show an error message in the UI
    } finally {
        // This block runs every time, for success or failure
        console.log('Fetch attempt complete.');
        // This is where you would hide the loading spinner
    }
}

displayUserData('Sandra'); // This will test the success path

setTimeout(() => {
    console.log('---');
    displayUserData('Kevin'); // This will test the failure path
}, 3000);


