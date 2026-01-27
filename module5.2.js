// The API endpoint for all old games
const url = 'https://v2.api.noroff.dev/old-games';

// The HTML element where we will display the games
const gameContainer = document.querySelector('#game-container');

async function fetchGames() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();

    // The API returns an object with a 'data' property, which is the array of games
    const games = result.data;

    // Clear the loading text
    gameContainer.innerHTML = '';

    // Loop through the array of games and create an  for each one
    games.forEach(function (game) {
      gameContainer.innerHTML += `${game.name}`;
    });
  } catch (error) {
    // Display an error message in the container
    gameContainer.innerHTML = 'An error occurred when fetching the games.';
    console.error('Fetch error: ', error);
  }
}

fetchGames();