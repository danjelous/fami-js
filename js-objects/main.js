// JavaScript Objekte - Warum?

// Personendaten modellieren
const firstName = "Daniel";
const lastName = "Brunner";
const address = "Luschnouarstreet 123";
const email = "daniel@brunner.at";

// Alles zusammen in einer Variable
const personData = [firstName, lastName, address, email];

// Alternativ
const personDataAlt = ["Daniel", "Brunner", "Luschnouarstreet 123", "daniel@brunner.at"];

/**
 * Ändern & Hinzufügen von neuen Daten ist klobig, fehleranfällig und die Reihenfolge 
 * ist uns egal (Reihenfolge ist in einem Array vorgegben! "sortiert")
 * 
 * Abhilfe: Objekte
 */

// Dargestellt als Objekt:
const person = {
  firstName: "Daniel",
  lastName: "Brunner",
  address: "Lustenauerstr. 123",
  email: "daniel@fakeit.at",
  yearOfBirth: 1993,
  mailConfirmed: true, // Kann alle Datentypen als Value verwenden!
}

// Properties auslesen
// Variante 1 über "." --> variable.key
console.log(person.firstName); // Daniel (Der Value vom key firstName)

// Variante 2 über keyName als string --> variable["key"]
console.log(person["firstName"]); // Daniel (Der Value vom key firstName)

// Beide Varianten machen das Gleiche: Auf einen Wert im Objekt zugreifen!

// Kann nicht nur string's als key's nehmen sondern auch number's, kann also kombinieren!
const numbers = {
  100: "Einhundert",
  16: "Sechzehn",
  "favorite number": 12,
}

const colors = {
  red: '#ff0000',
  green: '#00ff00', // Oder '#0f0'
  blue: '#0000ff', // Oder kurz '#00f'
}

// prompt() gibt uns die Eingabe vom User zurück, welche wir in einer Variable speichern
const userInput = prompt('Bitte gib einen der Werte ein: "red", "green" oder "blue"!');
console.log(colors[userInput]); // Gibt einen der Farbwerte (z.B. #ff0000' bei 'red') aus

// Properties hinzufügen
const review = {}; // Leeres Objekt erstellen

// Kann einen neuen Key angeben und dann direkt den Value
review.rating = 3;         // Über .
review['ratingAlt'] = 4;   // Oder über den key als string
console.log(review);

// Property ändern
// Funktioniert genau gleich wie Property hinzufügen :)
review.rating = 2;
review['ratingAlt'] = 3;

// Kann in einem Objekt auch *wieder* Objekte und Arrays verschachteln!

/**
 * Mit welchem Javascript Code könnten wir die durchschnittliche 
 * Punkteanzahl aus beiden Prüfungen des obrigen Stundenten berechnen?
 */
const student = {
  firstName: "Max",
  lastName: "Mustermann",
  strengths: ["Music", "Art"],
  exams: {
    midterm: 92,
    final: 88,
  },
};

const firstExam = student.exams.midterm; // 92
const secondExam = student.exams.final;  // 88

// Alternativ "exams" zwischenspeichern
// const exams = student.exams;
// const midterm = exams.midterm;

console.log((firstExam + secondExam) / 2); // 90

/**
 * Mit welchem Javascript Code könnten wir den Gesamtpreis 
 * des Einkaufswagens berechnen?
 */
const shoppingCart = [
  {
    product: "FireTV Stick",
    price: 29.99,
    quantity: 2,
  },
  {
    product: "Echo Dot",
    price: 40.0,
    quantity: 1,
  },
];

// Nehme von Produkt 1 price * quantitity
const product1 = shoppingCart[0];
const total1 = product1.price * product1.quantity;

// Alternativ in einer Zeile:
// const total1 = shoppingCart[0].price * shoppingCart[0].quantity;

// Nehme von Produkt 2 price * quantitity
const product2 = shoppingCart[1];
const total2 = product2.price * product2.quantity;

// Endlich am Schluss
console.log(total1 + total2);