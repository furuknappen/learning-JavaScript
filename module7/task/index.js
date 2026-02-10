// --- STATE AND SELECTORS (from before) ---
const resultsContainer = document.querySelector('#resultsContainer');
const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');
let currentPage = 1;

// --- FUNCTIONS ---

/**
 * Renders an array of game objects to the screen.
 * @param {Array<Object>} games - The array of games to display.
 */
function renderGames(games) {
  resultsContainer.innerHTML = '';
  if (games.length === 0) {
    resultsContainer.textContent = 'No games found.';
    return;
  }
  const ul = document.createElement('ul');
  games.forEach((game) => {
    const li = document.createElement('li');
    li.textContent = game.name;
    ul.appendChild(li);
  });
  resultsContainer.appendChild(ul);
}

/**
 * Updates the disabled state of the pagination buttons based on API metadata.
 * @param {Object} meta - The metadata object from the API response.
 */
function updatePaginationControls(meta) {
  // The 'disabled' property on a button is a boolean.
  // 'true' disables the button, 'false' enables it.
  // We disable the 'Previous' button if meta.previousPage is null.
  prevButton.disabled = !meta.previousPage;
  // We disable the 'Next' button if meta.nextPage is null.
  nextButton.disabled = !meta.nextPage;
}

/**
 * Fetches data, renders it, and updates pagination controls.
 * @param {number} page - The page number to fetch.
 */
async function fetchAndRenderGames(page) {
  resultsContainer.textContent = 'Loading...'; // Show a loading message

  try {
    const limit = 5;
    const url = `https://v2.api.noroff.dev/old-games?page=${page}&limit=${limit}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();

    renderGames(result.data);
    updatePaginationControls(result.meta);
  } catch (error) {
    resultsContainer.textContent = `Error: ${error.message}`;
  }
}

// --- EVENT LISTENERS ---

nextButton.addEventListener('click', () => {
  // We only increment and fetch if there IS a next page
  if (!nextButton.disabled) {
    currentPage++;
    fetchAndRenderGames(currentPage);
  }
});

prevButton.addEventListener('click', () => {
  // We only decrement and fetch if there IS a previous page
  if (!prevButton.disabled) {
    currentPage--;
    fetchAndRenderGames(currentPage);
  }
});

// --- INITIAL LOAD ---

// Fetch and display the first page when the script loads
fetchAndRenderGames(currentPage);