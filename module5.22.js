const url = "https://v2.api.noroff.dev/old-games";

const detailsContainer = document.getElementById("game-details-container");

async function fetchDetails() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("uhhh bad: " + error);
    }

    const result = await response.json();

    const details = result.data;
    detailsContainer.innerText = "";

    console.log(details);

    details.forEach((detail) => {
    const h2 = document.createElement('h2');
    const description = document.createElement('p');
    const releaseYear = document.createElement('p');

    h2.textContent = detail.name;
    description.textContent = detail.description;
    releaseYear.textContent = detail.released;

    console.log(h2);

    detailsContainer.appendChild(h2)
    detailsContainer.appendChild(description)
    detailsContainer.appendChild(releaseYear)

    });
  } catch (error) {
    console.error("couldnt fetch: " + error.message);
  }
}

await fetchDetails();

