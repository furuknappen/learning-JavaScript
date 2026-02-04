const API_BASE_URL = "https://v2.api.noroff.dev";

const POSTS_ENDPOINT = "/social/posts?_author=true"; // The _author=true query param includes author data
const url = API_BASE_URL + POSTS_ENDPOINT;
console.log(url);

const API_KEY = "e5f9875a-30a9-4ed7-9e21-8132c86725c0";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRnVydWtuYXBwZW4iLCJlbWFpbCI6ImNhbWxhcjA2MzQxQHN0dWQubm9yb2ZmLm5vIiwiaWF0IjoxNzcwMDE2NTMwfQ.KOsd5fSSunk0wfRTrLSsOstAtnVJF6iLH5h_wPkBbxo";

const postFeed = document.getElementById("postFeed");

async function fetchAndRenderPost() {
  try {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "X-Noroff-API-Key": API_KEY,
      },
    };
    const response = await fetch(url, options);
    const result = await response.json();
    const posts = result.data;

    console.log(posts);

    postFeed.textContent = "";

    posts.forEach((post) => {
      const postDiv = document.createElement("div");
      const title = document.createElement("h3");
      const text = document.createElement("p");
      const deleteBtn = document.createElement("button");

      title.textContent = post.title;
      text.textContent = post.body;
      deleteBtn.textContent = "Delete Post";
      deleteBtn.dataset.id = post.id;

      postDiv.appendChild(title);
      postDiv.appendChild(text);
      postDiv.appendChild(deleteBtn);
      postFeed.appendChild(postDiv);

      deleteBtn.addEventListener("click", async () => {
        deletePost(post.id);
      });
    });
  } catch (error) {
    console.error(error);
  }
}

fetchAndRenderPost();

const createPostForm = document.getElementById("createPostForm");

createPostForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const titleInput = document.getElementById("postTitle");
  const bodyInput = document.getElementById("postBody");

  const title = titleInput.value.trim();
  const body = bodyInput.value.trim();

  const postData = {
    //hvis key and value er samme kav kan du bare skrive det en gang :D
    // title: document.getElementById("postTitle").value.trim(),
    title,
    body,
  };

  await createPost(postData);
});

async function createPost(postData) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "X-Noroff-API-Key": API_KEY,
    },
    body: JSON.stringify(postData),
  };

  try {
    await fetch(API_BASE_URL + "/social/posts", options);

    fetchAndRenderPost();

    document.getElementById("postTitle").value = "";
    document.getElementById("postBody").value = "";
  } catch (error) {
    console.error("the problem is: " + error);
  }
}

async function deletePost(postId) {
  const options = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "X-Noroff-API-Key": API_KEY,
    },
  };

  try {
    await fetch(API_BASE_URL + "/social/posts/" + postId, options);
    fetchAndRenderPost();
  } catch (error) {
    console.error(error);
  }
}
