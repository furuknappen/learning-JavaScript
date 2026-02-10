"use strict";

// --- STATE ---
// This is where we will store the application's data, like the list of all games
// and the current state of pagination and filters.
let allGames = [];

// --- DOM ELEMENTS ---
// This is where we will select the elements from the HTML that we need to
// interact with, like containers and buttons.
const resultsContainer = document.querySelector("#resultsContainer")

// --- FUNCTIONS ---
// This is where we will write all our functions: for fetching data,
// rendering games, handling search, pagination, etc.


async function fetchGames() {

  const url = "https://v2.api.noroff.dev/old-games";

  try {
    const response = await fetch(url); 
    if (!response.ok) {
      throw new Error("It didnt work" + response.status);
    }
    const result = await response.json();
   allGames = result.data;

 
   
  } catch (error) {
    console.error("something went wrong here. this is the reponse: " + error);
    resultsContainer.innerHTML = '<p class="error-message">Could not load games. Please try refreshing the page.</p>'
  }
}

function renderGames(gamesToRender) {
  resultsContainer.innerHTML = '';
}


// --- EVENT LISTENERS ---
// This is where we will add our event listeners, for example, for the
// search input or pagination buttons.

// --- INITIAL LOAD ---
// This is where we will call the initial function to fetch the data
// and render the page for the first time.

async function startApp(){
  await fetchGames()
   console.log('All games fetched successfully:', allGames);
}
startApp()