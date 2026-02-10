const API_URL = "https://v2.api.noroff.dev/pets";
const WATCHLIST_KEY = "petWatchlist";
const CACHE_KEY = "petsCache";
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds
const API_KEY = "e5f9875a-30a9-4ed7-9e21-8132c86725c0";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRnVydWtuYXBwZW4iLCJlbWFpbCI6ImNhbWxhcjA2MzQxQHN0dWQubm9yb2ZmLm5vIiwiaWF0IjoxNzcwMjgxOTMwfQ.3CskGZB80-f1i5HhVyl9G38OSOYEmMZenjTMHZnBq5g";

const petContainer = document.getElementById("petsContainer");

async function fetchData() {
  try {
    const cacheData = localStorage.getItem(CACHE_KEY)
    if (CACHE_KEY <= CACHE_DURATION) {
      return;
    } else {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`, 
          "X-Noroff-API-Key": API_KEY,
        },
      };
      const response = await fetch(API_URL, options);
      const result = await response.json();

      const posts = result.data;

      console.log(posts);
      return posts;
      if (!response.ok) {
        // throw new Error("I cant find the response")
        const errorData = await response.json();
        throw new Error(`Registration failed: ${JSON.stringify(errorData)}`);
      }
    }
  } catch (error) {
    // return jackets;
    console.error("this is an error: " + error);
  }
}

async function createCards() {
  document.getElementById("loadingIndicator").textContent = "";
  const posts = await fetchData();

  posts.forEach((post) => {
    const petDiv = document.createElement("div");
    petDiv.classList.add("pet-card");
    const title = document.createElement("h2");
    const species = document.createElement("p");
    const age = document.createElement("p");
    const description = document.createElement("p");
    const image = document.createElement("img");
    const button = document.createElement("button")
    button.textContent = "Add to watchlist"

    image.classList.add("pet-image");
    title.textContent = post.name;
    species.textContent = post.species;
    age.textContent = post.age;
    description.textContent = post.description;
    title.textContent = post.name;
    image.src = post.image.url;

    petDiv.append(title, image, species, age, description, button);
    petContainer.appendChild(petDiv);
  });
}

createCards();
