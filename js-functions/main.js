// My very first function!

/**
 * Syntax:
 * 'function'-Keyword gefolgt von Funktionsname
 */
function myFunctionName() {
  // Code goes here - "Body der Funktion"
}

/**
 * Funktion definieren
 * Ich sage hier nur wie die Funktion heißt und was sie macht.
 * Sie wird bei Programmstart NICHT ausgeführt, das muss ich selbst machen.
 */
function logSomething() {
  console.log('Hallo aus der Funktion!');
}

/**
 * Funktion ausführen
 * Mit Methodenname und zwei geschwungenen Klammern wird unsere 
 * 'logSomething'-Funktion ausgeführt - sprich der Code innerhalb
 * der Funktion (zwischen den geschungenen Klammern {}).
 */
logSomething(); // Hallo aus der Funktion!

// Kann meine Funktionen so oft aufrufen wie ich möchte, "Nutzung" ist nicht beschränkt!
logSomething(); // Hallo aus der Funktion!
logSomething(); // Hallo aus der Funktion!


// Generiert eine Zahl zwischen 1 und 6
function rollDice() {
  console.log(Math.floor(Math.random() * 6) + 1);
}

function throwDice() {
  // Kann auch innerhalb einer Funktion andere Funktionen aufrufen
  rollDice();
  rollDice();
  rollDice();
  rollDice();
  rollDice();
}

// Funktion aufrufen
throwDice();

/**
 * Funktionen können Parameter besitzen, angegeben zwischen runden Klammern.
 * Diese sind wie Platzhalter zu sehen. Beim Aufruf der Funktion werden sie
 * durch tatsächliche Werte (z.B. 'Daniel', 'Theresa', ...) ersetzt.
 */
function greet(person) {
  console.log('Hallo ' + person); // Zugriff auf Parameter
}

// Der tatsächliche Wert des Parameter (person) wird Argument ('Daniel') genannt
greet('Daniel'); // Hallo Daniel
greet('Theresa'); // Hallo Theresa

// Methode 'throwDice' verbessern
function throwDiceBetter(numOfThrows) {

  /**
   * Kann Parameter auch in Schleifen (oder if/else etc.) verwenden,
   * also auch um Logik zu beeinflussen. Es muss nicht immer nur 
   * eine Ausgabe eines Wertes stattfinden.
   * 
   * numOfThrows wird dann durch einen konkreten Wert (z.B. 5) ersetzt
   * und die Schleife führt den Code aus bis die Zählvariable 'i' ("Counter")
   * gleich groß ist - danach bricht die Schleife ab (da 5 < 5 false ist).
   */
  for (let i = 0; i < numOfThrows; i++) {
    rollDice();
  }

  /**
   * Wieso ist die Funktion jetzt besser als 'throwDice'?
   * 
   * - Kann die Anzahl an Aufrufen von 'rollDice' beliebig steueren.
   *   Der Code ist also X-mal ausführbar (variabel)
   * - Lesbarkeit
   * - Code kopieren weist meistens auf eine bessere Lösung hin!
   */
}

// Funktion aufrufen - mit Anzahl an Würfen als Argument
throwDiceBetter(5);
// throwDiceBetter(2000); // Geht mit jeder Zahl, hier aber unübersichtlich :)

// Funktionen können auch mehrere Parameter besitzen!
function divide(a, b) {
  console.log(a / b);
}

divide(4, 2); // 2

// Reihenfolge der Parameter ist wichtig! 
divide(2, 4); // 0.5


// Funktionen mit Rückgabewerten
function multiply(a, b) {
  // Gebe das Ergebnis zurück - dies ist der Rückgabewert der Funktion
  return a * b;
}

/**
 * Beim Aufruf bekomme ich als 'Ergebnis' der Funktion diesen Wert zurück 
 * und kann ihn z.B in einer Variable speichern.
 */
const result = multiply(3, 4);

// In der Variable result steht nun der Wert 12. Kann damit dann weiterarbeiten (rechnen, loggen, etc.)
console.log(result);

// Kann ich so viel mal ausführen wie ich will - aber immer mit einem Rückgabewert
const result2 = multiply(2, 5);

/**
 * Muss den Rückgabewert nicht immer einer Variable zuweisen.
 * Ich kann ihn auch direkt 'weiterverarbeiten'.
 */
console.log(multiply(6, 10));

// Übung 1
function isValidPassword(password, username) {

  // 'Anforderung 0' - Muss zuerst überprüfen ob alle Parameter vorhanden sind
  if (!password || !username) {
    return false;
  }

  // Anforderung 1: Passwort muss mindestens 8 Zeichen lang sein
  if (password.length >= 8) {
    // Okay! Es wird nichts ausgeführt.
  } else {
    // Nicht okay! Ich weiß hier, dass mein password weniger als 8 Zeichen hat
    // Kann hier ‘frühzeitig returnen' da ich weiß dass nicht alle Anforderungen erfüllt sind.
    return false;
  }

  // Hier weiß ich dass mein password mind. 8 Zeichen hat.

  // Anforderung 2: Passwort darf keine Leerzeichen enthalten
  if (password.includes(' ')) {
    // Wenn obige Zeile true ist weiß ich dass ein Leerzeichen enthalten ist (Nicht okay!)
    return false;
  }

  // Hier weiß ich zusätzlich, dass keine Leerzeichen im password sind

  // Anforderung 3: username darf nicht in password enthalten sein
  if (password.includes(username)) {
    // Darf auch nicht sein! 
    return false;
  }

  // Hier weiß ich zusätzlich, dass username nicht in password enthalten ist
  // Alle Anforderungen erfüllt!
  return true;
}

// Abarbeitung Testfälle
console.log(isValidPassword("8193jak!23", "dogLover")); // true
console.log(isValidPassword("123dogLover123!")); // false
console.log(isValidPassword("8193   jak!23")); // false
console.log(isValidPassword("abc", "123")); // false

// Kurzversion:
function isValidPassword2(username, password) {
  if(!username || !password || password.length < 8 || password.includes(' ') || password.includes(username)) return false;

  // Hier pass alles
  return true; 
}