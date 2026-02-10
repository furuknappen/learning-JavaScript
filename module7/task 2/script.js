 console.log("hello")
 // --- STATE AND SELECTORS (from before) ---
const resultsContainer = document.querySelector('#resultsContainer');
const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');
const pageNumbersContainer = document.querySelector('#pageNumbersContainer');
let currentPage = 1;

// --- EVENT LISTENERS ---
nextButton.addEventListener('click', () => {
  if (!nextButton.disabled) {
    currentPage++;
    fetchAndRenderGames(currentPage);
  }
});

prevButton.addEventListener('click', () => {
  if (!prevButton.disabled) {
    currentPage--;
    fetchAndRenderGames(currentPage);
  }
});

pageNumbersContainer.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const pageNumber = Number(event.target.dataset.page);
    currentPage = pageNumber;
    fetchAndRenderGames(currentPage);
  }
});

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
 * Renders page number buttons and highlights the active page.
 * @param {Object} meta The metadata object from the API response.
 */
function renderPaginationNumbers(meta) {
  pageNumbersContainer.innerHTML = '';
  for (let i = 1; i <= meta.pageCount; i++) {
    const pageButton = document.createElement('button');
    pageButton.textContent = i;
    pageButton.dataset.page = i;
    if (i === meta.currentPage) {
      pageButton.classList.add('active');
    }
    pageNumbersContainer.appendChild(pageButton);
  }
}

/**
 * The main function to fetch, render, and update all UI components.
 * @param {number} page The page number to fetch.
 */
async function fetchAndRenderGames(page) {
  resultsContainer.textContent = 'Loading...';
  prevButton.disabled = true;
  nextButton.disabled = true;

  try {
    const limit = 2; //Limit set to 2 to show multiple pagination pages
    const url = `https://v2.api.noroff.dev/old-games?page=${page}&limit=${limit}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const result = await response.json();

    renderGames(result.data);
    updatePaginationControls(result.meta);
    renderPaginationNumbers(result.meta); // NEW: Call the function to render page numbers
  } catch (error) {
    resultsContainer.textContent = `Error: ${error.message}`;
  }
}

// --- INITIAL LOAD ---
fetchAndRenderGames(currentPage);
 
