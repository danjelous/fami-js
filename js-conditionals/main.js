// My very first if-statement!
let grade = 1;

if (grade === 1) {
  // Dieser Code wird nur ausgeführt wenn obige Bedingung ("Expression") true ist!
  console.log("Beschte!");
} else if (grade === 2) {
  // else-if: Wenn die erste Condition false war, prüfe hier weiter!
  console.log("Nid ganz so guat, abr trotzdem!");
} else {
  // Code im else-Teil wird immer ausgeführt wenn alle obigen Bedingungen "false" liefern!
  console.error('Notnagel! Ich sollte eigentlich nicht passieren!');
}

// Prüfen ob eine Zahl ungerade ist
let num = 37;
if (num % 2 !== 0) {
  console.log("Zahl ist ungerade!");
}

// Verschachtelte if Statements
let password = "Mypinkpwny1"; // Passt
// let password = "My pink pwny1"; // Passt nicht
// let password = "My1"; // Passt nicht

if (password.length >= 6) {
  // PW-Länge passt, zusätzlich auf Leerzeichen prüfen
  if (password.indexOf(" ") === -1) {
    // indexOf hat ein Leerzeichen gefunden
    console.error("Passwort enthält ungültige Zeichen!");
  } else {
    console.log("Passt alles! Passwort hat mind. 6 Zeichen und keine Leerzeichen! 🎉");
  }
} else {
  // Passt nicht -> PW zu kurz
  console.log("Dein Passwort ist leider zu kurz 😫");
}

// Beliebigen String anzeigen (ohne User-Interaktion)
// alert("YO!");

// User muss etwas bestätigen (Ergebnis ist ein boolean)
// const responseConfirm = confirm("Möchtest du das wirklich löschen?");
// console.log(responseConfirm);

// Öffnet Browser-Modal, in welchem der User etwas eingeben kann
const userInput = prompt('Gib mir eine Zahl und ich sage die ob sie ungerade ist!');

// Wenn ich nicht weiß was für ein Datentyp herkommt (gerade bei Eingaben vom User!) ist typeof hilfreich
// console.log(typeof userInput);

// Von string auf Ganzzahl (number) konvertieren (parsen)
const number = parseInt(userInput);

// Check ob userInput eine valide Zahl ist
if (isNaN(number)) {
  // ABORT!
  console.log('Kein valider Input vorhanden, Abbruch!!!einself');
} else {
  // Hier habe ich eine valide Ganzzahl

  // Test auf gerade/ungerade
  if (number % 2 === 1) {
    console.log('Die Zahl ' + number + ' ist ungerade!');

    // Alternativ: (ES6 Template Literal)
    // console.log(`Die Zahl '${number}' ist ungerade!`);
  } else {
    console.log('Die Zahl ' + number + ' ist gerade!');
  }
}