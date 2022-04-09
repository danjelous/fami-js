// Variable für display HTML-Element
const display = document.querySelector('.display');

// Für alle buttons (außer .calculate und .reset) einen Click-EventListener registrieren
const buttons = document.querySelectorAll('button:not(.calculate, .reset)');

for (let i = 0; i < buttons.length; i++) {
  // Muss dass für jeden einzelnen button machen, daher eine Schleife!
  buttons[i].addEventListener('click', buttonClickHandler);
}

// Für .calculate einen eigenen EventListener setzen
document.querySelector('.calculate').addEventListener('click', calculate);

// Für .reset einen eigenen Eventlistener setzen
document.querySelector('.reset').addEventListener('click', resetDisplay);

/**
 * Bekomme für jedes aufgetretene Event ein Objekt mit Zusatzdaten,
 * hier 'event' genannt - meist auch nur 'e'.
 */
function buttonClickHandler(event) {
  // target: Das HTML-Element auf das geklickt wurde
  // Der 'eigentliche' Wert des Buttons ist der innerText (was zwischen den <button>-Tags steht)
  const value = event.target.innerText;

  // Display aktualisieren - Wert dem Display zuweisen (+= fügt neuen Wert zum aktuellen hinzu)
  display.innerText += value;
}

function calculate() {
  /**
   * Sinnvolle Überprüfung:
   * Muss zuerst prüfen ob ein Ergebnis errechenbar ist
   * Ist mind. ein Operator (+-/*) vorhanden
   * Sind mind. zwei Operanden (Zahlen neben dem Operator) vorhanden?
   * 
   * 'Low-Level'-Pflaster:
   * Display muss mindestens drei Character lang sein!
   */
  if(display.innerText.length < 3) {
    // Weitere Ausführung der Funktion abbrechen, ist returne hier schon 
    // ohne etwas zu tun (was ich in diesem Fall auch nicht möchte)
    return;
  }


  /**
   * Wert des display's evaluieren (über eval()-Funktion)
   * 
   * Disclaimer!
   * eval() is evil! Es führt JavaScript Code aus und ist nicht sicher! Z.B. könnte
   * uns ein User (wenn wir eine Eingabemöglichkeit haben) darin 'bösen' Code
   * zukommen lassen (Passwörter verschicken, Cookies kopieren, ...) den wir
   * *einfach so* ausführen würden.
   */
  let result = eval(display.innerText);

  // Spezialfallbehandlungen

  // NaN oder +Infinity oder -Infinity
  if (result === NaN || result === Infinity || result === -Infinity) {
    display.innerText = 'ERROR!';
  } else {
    // 'Normales Ergebnis' - display updaten

    // Davor etwaige Rundungsfehler beheben
    result = parseFloat(parseFloat(result).toFixed(10));

    display.innerText = result;
  }
}

function resetDisplay() {
  display.innerText = null;
}



// Click-Handler für onclick=""-Handler im index.html (momentan auskommentiert)
function buttonClickHandlerHTML() {
  console.log('Clicked on Button 1')
}