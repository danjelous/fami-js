// Kann doppelte und einfache Anführungszeichen für Strings nehmen
// console.log('main.js loaded...');
// console.log("main.js loaded...");

// Strings definieren
const firstName = "Daniel";
let lastName = "Brunner";

// Strings 'zusammenführen' (konkatenieren)
let fullName = firstName + " " + lastName;
console.log(fullName);

// Kann auch andere Datentypen neben Strings hinzufügen
let anotherName = firstName + 1993;
console.log(anotherName);

let wtfName = lastName + true;
console.log(wtfName);

// Mit .length (Property) Gesamtlänge des Strings ausgeben lassen
const song = "99 Luftballons!";

// Weise Länge der song-Variable zu und gebe sie aus
const songLength = song.length;
console.log(songLength);

// Oder ich kann sie direkt ausgeben
console.log(song.length);

// Mit Index auf einzelne Zeichen eines Strings zugreifen 
const greeting = "Hola!"; // Length: 5
console.log(greeting[0]);
console.log(greeting[1]);
console.log(greeting[2]);
console.log(greeting[3]);
console.log(greeting[4]);

// Zugriff auf einen Index den es nicht gibt
console.log(greeting[5]); // undefined

// Letzten Character eines Strings ausgeben
console.log(greeting[greeting.length - 1]);

// String methoden
// greeting.charAt(3); // Äquivalent zu greeting[3];

// Methoden mit "()" ausführen
console.log(greeting.toUpperCase());
console.log("Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum, rerum mollitia in perferendis necessitatibus quos, qui ab officiis corporis error labore commodi veniam maxime quae laborum consequatur illum earum!".toUpperCase());
console.log("DANIEL! ÄÜÖß".toLowerCase());

// Trim: Entfernt Leerzeichen "vorne und hinten" (leading & trailing)
console.log("    Daniel    ".trim());

// Alternative: trimStart() oder trimEnd()

// .indexOf: Suche einen String in einem anderen
const tvShow = "Catdog";
console.log(tvShow.indexOf('Cat')); // 0
console.log(tvShow.indexOf('dog')); // 3

// Wenn kein Resultat gefunden wird
console.log(tvShow.indexOf('z')); // -1

// Slice - Gibt einen Teilbereich aus einem String zurück
console.log("baseball".slice(2, 5)); // seb
console.log("superhero".slice(0, 5)); // "super"

// Nur mit Argument (Start): von gegebenem Index bis Ende
console.log("$50.60".slice(1)); // 50.60

// Replace - Ersetzt einen gesuchten string durch gegebenen
console.log("Schach ist langweilig".replace("langweilig", "spannend"));

// Nur das erste Vorkommen wird ersetzt
let test = "hahaha";
console.log(test.replace("ha", "ho")); // "hohaha";

// Wir können auch Wörter entfernen in dem wir durch einen leeren String ersetzen
let message = "Willkommen zurück!";
message.replace(" zurück", ""); // "Willkommen!"

// null & undefined;
// let x = "asdf";
let x; // Ohne Wert deklarieren
console.log(x);