/***************
VALUES AND VARIABLES
****************/
/*
let firstName = "mateo";
let favouriteNumber = 7;

console.log(firstName, favouriteNumber);

// Variable naming convention and rules

let firstNameAndLastName = "Mateo Vuković";
// let 3years = 6; Number can not be the first sign



let y = "teacher"; Not like this
let myFirstJob = "programmer"; Instead like this



firstName = "Darko";

console.log(firstName);
console.log(firstName);
console.log(firstName);

*/

/***************
DATA TYPES
****************/

/*
STRING -> text 
NUMBER -> whole and decimals 3.0
BOOLEAN -> true or false
UNDEFINED -> value of a variable whoe doesn't yet have a value
NULL -> simmilar to undefined for now...


let firstName = "Dario";
let number1 = 14;
let hasDriverLicence = false;
let lastName;

console.log(typeof firstName);
console.log(typeof number1);
console.log(typeof hasDriverLicence);
console.log(typeof lastName);


/***************
let,const,var
****************/

//var firstName = "Mateo"; Not like this
/*
let firstName = "Dario";
const PI = 3.1472;
console.log(firstName);
console.log(lastName);
*/

/******
Basic Operators
*******/

// Math operators
/*
const now = 2021;
const ageDario = 23;
const ageDavor = 27;
const birthYear = now - ageDario;
console.log(birthYear);
console.log(ageDario * 2, ageDario / 10, 2 ** 3);
console.log(ageDario + 15);

const firstName = "Dario";
const lastName = "Kolak";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x = x + 10; // 25
x += 10; // 35
x *= 4; // 140
x += 1; // 141
x++;
x--;
console.log(x);

// Comparison operators
console.log(ageDario >= ageDavor);
console.log(ageDario < ageDavor);
// ES5 equality
console.log(ageDario == ageDavor);
console.log(ageDario != ageDavor);
// ES6, use this!
console.log(ageDario === ageDavor);
console.log(ageDario !== ageDavor);

// Operator precedence
console.log(now - ageDario > now - ageDavor);

// 1. CHALLENGE
/**
 *  Mateo and Dario are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
 * BMI = mass / height ** 2 = mass / (height * height), (mass is in kg and height is in m)
 *
 * 1. Store Mateo's and Dario's mass and height in variables
 * 2. Calculate both their BMIs using the formula above
 * 3. Create a boolean variable mateoHigherBMI containing information about whether Mateo has a higher BMI than Dario
 *
 */

////////////////////////////////////
// Strings and Template Literals
/*
const firstName = "Dario";
const job = "Developer";
const birthYear = 1998;
const year = 2021;

let dario =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";

console.log(dario);

// Template literals
dario = `I'm ${firstName}, a ${year - birthYear} year old ${job} !`;

console.log(`Ja volim samo ovo korisititi`);

console.log("String with \n multiple \n lines");

console.log(`String with
multilple
lines`);

// Taking Decisions: if / else statements

const age = 17;

if (age >= 18) {
  alert("You are allowed to have a driving license!");
} else if (age > 16) {
  alert("You are allowed to drive a mini motorcycle!");
} else {
  alert("You are not allowed to have a driving license!");
}

const birthYear = 2012;

let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/

////////////////////////////////////
// Type Conversion and Coercion

// const inputYear = prompt("Please tel us birthyear!");
// console.log(Number(inputYear) + 25);

// Type coercion
/*
console.log("I am " + 23 + " year old");
console.log("23" - "15" - "4");
console.log("23" > "18");

let n = "1" + 1;
n = n - 1;
console.log(n);

/////////////////////////////////////////
// Truthy and falsy values

// 5 falsy values: 0, '', undefined, null, NaN

if ("") {
  console.log("Super");
}

let price;

if (price) {
  console.log("YUpiii");
}


let height = 0;

if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is not defined!");
}


// Equality operators: == vs ===
// Not Equality operators: != vs !==
const age = "18";

console.log(age == 18);
console.log(age === 18);

console.log(age != 18); // False
console.log(age !== 18); // True
*/

///////////////////////////////////////
// Logical Operators &&, || , !
/*
const hasDriversLicense = true; // A
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const hasEnergy = false;

if ((!hasDriversLicense || !hasGoodVision) && !hasEnergy) {
  console.log("Dario is able to drive!");
} else {
  console.log("Someone else should drive...");
}
*/

/////////////////////////////////
// The Switch statement
/*
const day = prompt("Type day");

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    alert("YOOOHOO it is monday");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy weekend!");
    break;
  default:
    console.log("Not a valid day");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
  alert("YOOOHOO it is monday");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy weekend!");
} else {
  console.log("Not a valid day");
}
*/
//////////////////////////////////////////////
// Statements vs Expressions
/*
3 + 4;

1991;

true && false && !false;

if (23 > 10) {
  const str = "23 is bigger";
}



const me = "Dario";
console.log(`I'm ${2021 - 1998} years old ${me}`);

// The Conditional (Ternary) operator
const age = 16;

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}

*/

// Functions

// function logger(firstName) {
//   console.log(`My name is ${firstName}`);
//   return 5;
// }

// const greeting = logger("Dario");
// console.log(greeting);

// function add(firstNumber, secondNumber) {
//   return firstNumber + secondNumber;
// }

// console.log(add(3, 9));

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// function add(x, y) {
//   const result = x + y;
//   return result;
// }

// const result = 9;

///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration

// function calcAge1(birthYear) {
//   return 2021 - birthYear;
// }

// // Function expression
// const calcAge2 = function (birthYear) {
//   return 2021 - birthYear;
// };

// // Arrow function
// const calcAge3 = () => 2021 - birthYear;

// Function using another function

// const add = function (c, d) {
//   return c + d;
// };

// const add10ToResult = function (a, b) {
//   const result = add(a, b);
//   return result + 10;
// };

// add10ToResult(10, 8);

// const greeting = function (firstName) {
//   console.log(firstName);
// };

// greeting("Mateo");

// const friends = ["Mateo", "Miro", "Alen", "Benjo", "Darko"];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// console.log(friends[1]);

// const friend = friends[1];
// console.log(friend);

// console.log(friends.length);

// friends[2] = "Davor";
// console.log(friends);

// console.log(friends[friends.length - 1]);

// const calcAge = function (birthYear) {
//   return 2021 - birthYear;
// };

// const birthYears = [1998, 2001, 1994];

// const ages = [
//   calcAge(birthYears[0]),
//   calcAge(birthYears[1]),
//   calcAge(birthYears[2]),
// ];

// console.log(ages);

// Basic Array Operations (Methods)

// const friends = ["Mateo", "Alen", "Miro"];

// Add element

// Changing order
// let temp = friends[2];
// friends[2] = friends[0];
// friends[0] = temp;

// Adding elements to array
// const newLength = friends.push("Davor"); // Add as  last
// console.log(newLength);
// friends.unshift("Darko"); // Add as first

// // Deleting elements from array
// friends.pop(); // Delete last
// friends.shift(); // Delete first

// // Find index of an element
// console.log(friends.indexOf("Alen"));

// console.log(friends.includes("Filip"));

// console.log(friends);

/////////////////////////////////////////
// OBJECTS

// const darioArray = [
//   "Dario",
//   "Kolak",
//   2021 - 1998,
//   "developer",
//   ["Mateo", "Alen", "Miro"],
// ];

// console.log(darioArray[1]);

// const dario = {
//   firstName: "Dario",
//   lastName: "Kolak",
//   age: 2021 - 1998,
//   job: "developer",
//   friends: ["Mateo", "Alen", "Miro"],
// };

// // Dot notation
// console.log(dario.firstName);
// console.log(dario.lastName);
// console.log(dario.friends);

// // Bracket notation

// const interestedIn = prompt("What do you want to know about Dario");

// if (dario[interestedIn]) {
//   console.log(dario[interestedIn]);
// } else {
//   console.log("Wrong request!");
// }

///////////////////
// Object Methods

// const calcAge = function () {
//   this.age = 2021 - this.birthYear;
// };

// const dario = {
//   firstName: "Dario",
//   lastName: "Kolak",
//   birthYear: 1998,
//   job: "developer",
//   friends: ["Mateo", "Alen", "Miro"],
// };

// dario.calcAge = calcAge;

// dario.calcAge();

// const mateo = {
//   firstName: "Mateo",
//   lastName: "Vuković",
//   birthYear: 1995,
//   job: "developer",
//   friends: ["Dario", "Alen", "Miro"],
//   print: function () {
//     console.log("HALOOOOOO");
//   },
// };

// mateo.calcAge = calcAge;

// mateo.calcAge();

// console.log(dario);
// console.log(mateo);

// const arr = [2, 3, 4];
// arr.push(2);
// console.log(typeof arr);

// console.log("Ja učim programirati");

// for (let i = 1; i < 10; i++) {
//   console.log(i);
// }

// const arr = ["mateo", "dario", "jovana", "darko", "ognjen"];

// for (let i = 0; i < 5; i++) {
//   console.log(arr[i]);
// }

// for (let i = 1; i < 10; i++) {
//   for (let j = 1; j < 10; j++) {
//     console.log(i * j);
//   }
//   console.log("-------- GUTTER ---------------");
// }

// for (let i = 1; i < 10; i++) {
//   console.log(i);
// }

// for (let i = 9; i > 0; i--) {
//   console.log(i);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-------- Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
//   }
// }

// const arr = ["mateo", "dario", "jovana", "darko", "ognjen", "Anto"];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

for (let i = 0; i < 6; i++) {
  if (i == 3) {
    // continue;
    break;
  } else {
    console.log(i);
  }
}

// let dice = Math.trunc(Math.random() * 1026) + 1;
// let counter = 0;

// while (dice !== 924) {
//   console.log(dice);
//   counter++;
//   dice = Math.trunc(Math.random() * 1026) + 1;
// }

// console.log(`You have won! You needed ${counter} chances!`);
