// This variable will keep track of which page we are on.
// We will modify this later when we add navigation buttons.
let currentPage = 1;

/**
 * Fetches a specific page of games from the API.
 * @param {number} page The page number to fetch.
 */
async function fetchGames(page) {
  // We'll set a limit of 10 items per page for this example.
  const limit = 10;
  const url = `https://v2.api.noroff.dev/old-games?page=${page}&limit=${limit}`;

  console.log(`Fetching from: ${url}`);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();

    // For now, we will just log the results to see what we get.
    // In a real application, we would use this data to update the DOM.
    console.log('API Response:', result);
    console.log('Game Data:', result.data);
    console.log('Metadata:', result.meta);
  } catch (error) {
    console.error('Could not fetch games:', error);
    // In a real app, you might show an error message to the user here.
  }
}

// Let's call our function to fetch the first page.
fetchGames(currentPage);