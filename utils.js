import products from '/products.js'
//  Create a new file, utils.js. Inside it, create and export a named function called formatPrice that takes a price (number) as an argument and returns it as a formatted string (e.g., "$25.99”).
 function formatPrice(number) {
  return "$" + number.toFixed(2).toString()
 }





 export default formatPrice