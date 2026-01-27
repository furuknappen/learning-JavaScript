

"use strict";
const productDiv = document.getElementById("product-grid");
const cartItems = document.getElementById("cart-items");
const totalSpan = document.getElementById("total-price");

const products = [
  { id: 1, name: "Wireless Mouse", price: 25.99 },
  { id: 2, name: "Mechanical Keyboard", price: 89.99 },
  { id: 3, name: "USB-C Hub", price: 34.5 },
  { id: 4, name: "Webcam", price: 55.0 },
  { id: 5, name: "4K Monitor", price: 399.99 },
  { id: 6, name: "Ergonomic Chair", price: 199.5 },
];
let cartTotal = 0;

products.forEach((product) => {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const name = document.createElement("h3");
  const price = document.createElement("p");
  const button = document.createElement("button");

  name.textContent = product.name;
  price.textContent = product.price.toFixed(2);
  button.textContent = "Add to Cart";
  button.dataset.productId = product.id;
  button.dataset.price = product.price;

  productCard.appendChild(name);
  productCard.appendChild(price);
  productCard.appendChild(button);
  productDiv.appendChild(productCard);
});

productDiv.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    const button = event.target;
    const actual = button.closest(".product-card");
    const name = actual.querySelector("h3").textContent;
    console.log(name);

    const listElement = document.createElement("li");
    listElement.textContent = name;
    cartItems.appendChild(listElement);

    const price = event.target.dataset.price;
    const priceNum = parseFloat(price);
    console.log(priceNum);
    cartTotal += priceNum;

    totalSpan.textContent = cartTotal.toFixed(2);
  }
});



