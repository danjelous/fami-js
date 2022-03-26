// Truthy / Falsy (Implizierte true/false Werte von nicht-Booleans)
if ("Haus") {
  // true
}

if (53) {
  // true
}

// Logische Operatoren --> Verkettung von Conditionals
const bedingung1 = true;
const bedingung2 = false;

// AND (&&) --> Alle Bedingungen (Conditionals) müssen true sein
if (bedingung1 && bedingung2) {
  console.log("AND true - Beide true!");
} else {
  console.log("AND false - Nur eines true!");
}

// OR (||) --> Mind. eine Bedingung muss true sein
// Tastenkombi Win: Alt Gr + >/< (Größer / Kleiner zeichen)
// Tastenkombi Mac: Alt + 7
if (bedingung1 || bedingung2) {
  console.log("OR true - Mind. eines true!");
} else {
  console.log("OR false - Beide false!");
}

// Operatoren können beliebig oft aneinander gehängt werden. 
// Heißt nicht dass das sinnvoll ist 😉
// if (a && b && c || i && 12 && (i && k)) {

// }

// Kurzschreibweisen (Bei number)

let day = 27;

// Um eins erhöhen
day = 28; // Variante 1 - Explizit setzen
day = day + 1; // Variante 2 
day += 1; // Variante 3 
day++; // Variante 4 

// Kurzschreibweise bei Conditionals (Ternary / Ternärnen) Operator
// Syntax: condition ? ifTrue : ifFalse;

let num = 7;

// Lange Variante
if (num === 7) {
  console.log('Lucky number!');
} else {
  console.log('Not so lucky number :(');
}

// Variante 2, kürzer
num === 7 ? console.log('Lucky number!') : console.log('Not so lucky number :(');

// Variante 3, kürzeste
console.log(num === 7 ? 'Lucky number!' : 'Not so lucky number :(');