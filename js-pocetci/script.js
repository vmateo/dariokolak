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
