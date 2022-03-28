// Array initialisieren

// Leeres Array
const students = [];

// Nur mit strings
const colors = ["green", "blue", "yellow"];

// Array mit numbers
const lottoNumbers = [1, 4, 7, 21, 11, 10];

// Array mit unterschiedlichen Datentypen
// Kann ich zwar machen, sollte ich aber nicht!
const dontDoThis = [true, false, "Hi!", undefined, NaN, 100, Infinity];

// Auf Werte in einem Array zugreifen
console.log(colors[0]);  // green
console.log(colors[3]);  // undefined

// Gesamtlänge eines Arrays ausgeben
console.log(lottoNumbers.length); // 6
console.log(colors.length); // 3

// Letzte Element in einem Array ausgeben (funktioniert bei jedem Array)
console.log(lottoNumbers[lottoNumbers.length - 1]); // 10
console.log(students[students.length - 1]); // undefined

// Werte in einem Array ändern - auch wieder über Index!
const shoppingList = ['milk', 'bread', 'apple'];

// console.log() kann mehrere Werte aufnehmen, nicht nur einen. 
// '\n' ist ein Zeilenumbruch zur besseren Lesbarkeit.
console.log('shoppingList vor Änderungen: \n', shoppingList);

// Über index anderen Wert zuweisen
shoppingList[1] = 'Bier 🍻';
console.log('shoppingList nach Änderungen: \n', shoppingList);

// Werte hinzufügen, nächsten freien Index nehmen
shoppingList[3] = "WC";

// Geht auch über .length, da diese immer 1 höher ist als der letzte index!
shoppingList[shoppingList.length] = "Toilettenpapier";

// Kann neue Werte auch an einem beliebigen Index einfügen
// Kann ich, sollte ich aber nicht 😅 Verwirrt / verunsichert
// shoppingList[100] = 'Wurscht';

// Werte hinzufügen / löschen mit Array-Methoden

// Wert(e) am ENDE des Array's hinzufügen mit .push()
shoppingList.push('Käse');
shoppingList.push('Eier', 'Mehl', 'Ganzen Kuchen');
console.log('shoppingList nach Hinzufügen: \n', shoppingList);

// Letzten Wert im Array löschen mit .pop()
shoppingList.pop();
console.log('Letztes Element gelöscht!');

// Kann mir den letzten Wert auch zurückgeben lassen
const deletedItem = shoppingList.pop();
console.log('Letztes Element gelöscht!');
console.log('shoppingList nach Löschen: \n', shoppingList);
console.log('Zuletzt gelöschtes Item: ', deletedItem);

// push() und pop() sind am Ende des Array's, shift() und unshift() am Anfang des Array's

// Erstes Element im Array löschen mit .shift()
shoppingList.shift();
console.log('Erstes Element gelöscht!');
console.log('shoppingList nach Löschen: \n', shoppingList);

// An erster Stelle im Array einen Wert hinzufügen mit .unshift()
shoppingList.unshift('Milch');

// Oder mehrere
shoppingList.unshift('Fanta', 'Biberle 🇨🇭');
console.log('Elemente am Start eingefügt!');

// Array-Methoden: includes - Prüft ob ein Wert im Array vorhanden ist
const zutaten = ['Mehl', 'Wasser', 'Eier', 'Zucker', 'Butter'];

console.log(zutaten.includes('Zucker')); // true
console.log(zutaten.includes('Schoki')); // false

// Am meisten in Kombination mit einem if-Statement
if (zutaten.includes('Eier') || zutaten.includes('Butter')) {
  console.log('Sorry, vegan it is! Bleibe beim Wasser.');
}

// Array.indexOf() - fast wie .includes(), liefert mir einen Index
const indexOfBadFood = zutaten.indexOf('Zucker');
if (indexOfBadFood > -1) {
  console.log('Sorry, kein Zucker für mich :(');

  // Kann über den Index einen anderen Wert zuweisen
  zutaten[indexOfBadFood] = 'Luft & Liebe';
  console.log(zutaten);
}

// Array.splice() - an einem beliebigen Index löschen oder einfügen
console.log('Zutaten vor splice: \n', zutaten);
// Lösche an Index 2 ein Element 
zutaten.splice(2, 1); 

// Füge an Index 3 ein Element ein
zutaten.splice(3, 0, 'Rum');
console.log('Zutaten nach splice: \n', zutaten);

// (Literal) Bottom line: mit splice kann ich an einer *beliebigen* Stalle im Array hinzufügen bzw. löschen