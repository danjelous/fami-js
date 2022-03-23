// JavaScript (JS) Kommentar, starten mit zwei Slashes

// Console in Browser ansprechen und Text ausgeben
console.log("Hello from se console!");

// Variablen-Zuweisung mit "let" keyword
let age = 37;
// let age = 19; // Fehler, kann "age" als Variablennamen nicht nochmals verwenden!

// Rechnen mit Variablen
let number1 = 12;
let number2 = 7;

// Und anschließend den Wert der Rechnung in der Console ausgeben
console.log(number1 + number2);

// Oder in eine neue Variable speichern
let number3 = number1 + number2; // number3 hat nun den Wert 19
console.log(number3); // Ausgabe über Console, selbes Ergebnis wie in der Addition

// Kann den Wert von Variablen (die mit "let" definiert worden sind) auch ändern
number3 = 55;
console.log(number3);

// Um eins erhähen ("increment")
number3 = number3 + 1; // 56
console.log(number3);

// Namenskonvention: Kann Keywords nicht als Variablennamen nehmen!
// let let = 17;

// Variable muss mit einem Buchstaben (oder Underscore _) starten
// let 1 = 17; // Nope

// Kann ab hier Zahlen verwenden wie ich möchte
let a1 = 17;

// "Schönwetter"-Programm: Variablen-Namen camelCase schreiben!
let myAwesomeVariable = 11;

// Variablennamen sind case sensitive - aufpassen!
let daniel = 17;
let Daniel = 18;

// "Gegenspieler" zu let: const - Kann damit Variablen nicht ändern
// Sinnvoll für Variablen die sich nicht ändern (Config, URL's, etc.)
const myAge = 25;
myAge = 26;

// Kann auch let/const Varianten nicht mit gleichem Namen deklarieren!
// let julian = 14;
// const julian = 14;
