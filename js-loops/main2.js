// for ... of - Schleife für Iterables (Array, String)

// Speziell für Array sinnvoll
const animals = ['bird', 'shark', 'lion', 'cat'];

// Mit for-Schleife
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// Mit for ... of Schleife
// "Nimm jeden Wert im array (hier 'animal') und führe den Code aus"!
// Variablenname (hier animal) ist frei wählbar!
for (let animal of animals) {
  console.log(animal);
}

// for .. in - Schleife für Enumerables ("Aufzählungen" --> Objekte)
const person = {
  firstName: 'Dan',
  lastName: 'Brunner',
  yearOfBirth: 2000,
  address: 'FakeStreet 1234',
}

// Mit for ... in kann ich auf jeden Key in Objekt zugreifen!
for (let key in person) {
  // Logge mir den Key und zugehörigen Value
  console.log(key, person[key])
}

// while-Schleife: Errate eine Zahl zwischen 1 und 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// "Erster Rateversuch" des User's
let userGuess = -1;

while (userGuess !== randomNumber) {
  // Prompt gibt uns die Eingabe des User's zurück, welchen wir in eine Variable speichern
  const userInput = prompt("Gib mir eine Zahl zwischen 1 und 10!");

  // Diese ist aber immer ein string, mit parseInt auf eine Ganzzahl konvertieren
  userGuess = parseInt(userInput);
}

alert('You won!');