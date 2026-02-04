// Our JavaScript object
const userData = {
  name: 'Alex',
  isStudent: true,
  courses: ['JavaScript', 'HTML'],
};

// Convert the object into a JSON string
const jsonString = JSON.stringify(userData);

console.log('Original Object:', userData);
console.log('JSON String:', jsonString);
// Output: '{"name":"Alex","isStudent":true,"courses":["JavaScript","HTML"]}'