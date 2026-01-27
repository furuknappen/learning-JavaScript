import products from '/products.js'
import formatPrice from '/utils.js'
console.log(products)

const inStockProducts = products.filter((product) => { return product.inStock
});

console.log(inStockProducts)

// const productDisplayInfo = inStockProducts.map((product) => {
//   return product.name + " - $" + product.price.toFixed(2);
// })

const productDisplayInfo = inStockProducts.map((product) => {
  return product.name + " - " + formatPrice(product.price);
})


productDisplayInfo.forEach((item) => {console.log(item)} )

let totalPrice = 0;
const values = products.map((products) => {
  return products.price
} );


 const totalValue = values.forEach((price) => {
  totalPrice += price
 
 });

console.log("the total price is: " + totalPrice)
//  console.log(formatPrice(20.40))

// Import this new formatPrice function into main.js. In your .map() callback, instead of formatting directly, call the formatPrice function to format the price part of the string.

// Calculate total value: After you have your inStockProducts array, use a combination of array methods to calculate the total price of all the products in stock. Log this total value to the console with a descriptive message. (Hint: You could use .map() to get an array of prices, and then use .forEach() to sum them up.)