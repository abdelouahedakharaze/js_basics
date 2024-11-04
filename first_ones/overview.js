// 1. Variables and Data Types
let name = "John"; // String
let age = 25; // Number
let isStudent = true; // Boolean
let fruits = ["apple", "orange", "banana"]; // Array
let person = { name: "Alice", age: 30 }; // Object

// 2. Strings
let greeting = `Hello, ${name}!`; // String interpolation
let upperCaseName = name.toUpperCase(); // Convert to uppercase
let subString = name.substring(0, 3); // Get substring

// 3. Numbers
let sum = age + 5; // Addition
let product = age * 2; // Multiplication
let quotient = age / 5; // Division
let remainder = age % 2; // Modulus

// 4. Flow Control
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// 5. Loops
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 6. Functions
function sayHello(personName) {
  return `Hello, ${personName}!`;
}

let message = sayHello("Bob");
console.log(message);

// 7. Arrow Functions
const addNumbers = (a, b) => a + b;
let result = addNumbers(3, 4);
console.log(result);

// 8. Arrays and Array Methods
fruits.push("grape"); // Add element to the end
fruits.pop(); // Remove element from the end
let firstFruit = fruits[0]; // Access element by index

// 9. Objects and Object Methods
console.log(person.name); // Access property
person.job = "Engineer"; // Add property
delete person.age; // Remove property

// 10. Template Literals
let infoMessage = `
  Name: ${person.name}
  Age: ${person.age}
  Job: ${person.job}
`;

console.log(infoMessage);

// 11. Truthy and Falsy Values
let truthyExample = "Hello"; // Truthy
let falsyExample = ""; // Falsy

// 12. Ternary Operator
let isAdult = age >= 18 ? "Yes" : "No";

console.log(isAdult);
