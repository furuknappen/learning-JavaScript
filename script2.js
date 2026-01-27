async function getAll() {
  const result = await fetch("https://v2.api.noroff.dev/rainy-days");
  const response = await result.json();
  console.table(response.data);
  return response.data;
}

async function getOne() {
  const result = await fetch(
    "https://v2.api.noroff.dev/rainy-days/07a7655a-7927-421b-ba6a-b6742d5a75b8"
  );
  const response = await result.json();
  console.table(response.data);
}

// IEFEe
(async () => {
  const items = await getAll();
  console.log(items);

  const femaleItems = items.filter((item) => {
    return item.gender === "Female";
  });

  console.log(femaleItems);

  const itemNames = items.map((item) => {
    return item.title;
  });

  console.log(itemNames);

  const itemContainer = document.getElementById("itemSection");

  // const makeCards =
  const cards = items.map((item) => {
    let listHTML = "";
    let price;
    let message;
    if (item.onSale === true) {
      message = "before" + item.price;
      price = item.discount;
    } else {
      price = item.price;
      message = "not on sale";
    }

    return (itemContainer.innerHTML += ` 
   <a  role="listitem" class="card" aria-labelledby="patagonia-title1">
          <img class="cardImg" src="${item.image.url}" alt="${item.image.alt}">
            <p class="itemName" id="patagonia-title1">${item.title}</p>
            <p>${message} </p>
            <p class="itemPrice">${price} kr</p>
            <span class="visually-hidden">Color: ${item.baseColor}</span>
            <div style="background-color: ${item.baseColor}" aria-hidden="true" class="colorCircle"></div>
          </div>
        </a>`);
  });
})();
