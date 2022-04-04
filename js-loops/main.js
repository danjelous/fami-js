// My very first loop!
// for (let i = 1; i <= 5; i = i + 1) { // Lange Schreibweise, macht genau das Selbe
for (let i = 1; i <= 5; i++) { // Kurzschreibweise i++
  console.log('Hello, ' + i);
}

/**
 * initialExpression: Zähler initialisieren. Mache ich einmal zum Start der Schleife.
 * condition: Wird immer geprüft bevor der Code in der Schleife (zwischen { }) ausgeführt wird
 *      wenn true:  Code wird ausgeführt
 *      wenn false: Schleife wird abgebrochen
 * incrementExpression: Der Zähler wird nach jedem Durchgang (wenn der Code zwischen den 
 *      geschwungenen Klammern ausgeführt wurde) erhöht. Hier gebe ich an um wieviel.
 *      Häufig wird er um eins (1) erhöht: i = i + 1 bzw. i++ (kürzere Schreibweise)
 */
// for ([initialExpression]; [condition]; [incrementExpression]) {
//   ...
// }

// Zahlen von 1 bis 20 quadrieren (^2)
for (let i = 1; i <= 20; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

// Kann auch herunterzählen, muss nicht immer von null starten und um eins erhöhen
for (let i = 50; i >= 0; i -= 10) {
  console.log(i);
}

// Ouput: 
// 50
// 40
// 30
// 20
// 10
// 0

// Endlosschleife, z.B. fälschlicherweise durch Tippfehler </> vertauscht
// for (let counter = 20; counter >= 0; counter++) {
//   console.log(counter);
// }

// Häufige Anwendung von for-Schleifen: Array's durchlaufen
const examScores = [23, 51, 19, 69, 77, 99, 100];
console.log('examScores: ', examScores);

// Alle Werte ausgeben - Auf schlecht 
console.log('Alle Werte im Array');
console.log(examScores[0]);
console.log(examScores[1]);
console.log(examScores[2]);
console.log(examScores[3]);
console.log(examScores[4]);
console.log(examScores[5]);
console.log(examScores[6]);

// Mit \n mache ich einen Zeilenumbruch in der Console
console.log('\nAlle Werte im Array über Schleife ausgeben');

// Alle Werte ausgeben - Besser!
for (let i = 0; i < examScores.length; i++) {
  console.log('Index: ', i);
  console.log('Wert im Array: ', examScores[i]);
}

// string.reverse() (wie bei Array) selber programmiert!
const word = "stressed";
let reversedWord = "";

for (let i = word.length - 1; i >= 0; i--) {
  reversedWord += word[i];
}

console.log(reversedWord);