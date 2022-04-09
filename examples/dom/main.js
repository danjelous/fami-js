/**
 * Mit document.querySelector() können wir bestimmte HTML-Elemente
 * "in's JavaScript holen" bzw. diese damit ansprechen
 * 
 * Alles in den runden Klammern ist wie ein CSS Selektor!
 */
// Gib mir die erste h1
console.log(document.querySelector('h1'));

// Gib mir das letzte li in der ol
let lastChild = document.querySelector('ol li:last-child');

// Können mit dem style-Objekt jegliches CSS dynamisch (!) ändern (auch hinzufügen/löschen)
lastChild.style.color = 'red';
lastChild.style.fontSize = '3rem';

// querySelector funktioniert auch mit (CSS) Klassen und ID's!
document.querySelector('.main-paragraph').style.textTransform = 'uppercase';

// querySelectorAll gibt mir alle gefundenen Nodes ('Suchergebnisse') zurück
const listItems = document.querySelectorAll('li');
console.log('All list items: ', listItems);

// Kann auch Inhalt (z.B. Text) ändern
document.querySelector('h1').innerText += ' durch JS geändert!';

/**
 * EVENTS
 * Ich kann auch bestimmte Events (starten mit .on) hören und dann 
 * bestimmten Code ausführen. Diesen Code muss ich in einer Funktion angeben.
 */
document.querySelector('h1').onclick = function () {
  // Hole mir das <html>-Element
  const html = document.querySelector('html');

  // Wechsle den Hintergrund je nach aktueller Farbe
  const currentColor = html.style.backgroundColor;

  if (!currentColor) {
    // Wenn falsy (kein Wert gesetzt) setze einen eigenen
    html.style.backgroundColor = 'yellow';
  }

  if (currentColor === 'yellow') {
    // Setze wieder zurück
    html.style.backgroundColor = '';
  }
}

/**
 * Neue Elemente (HTML) hinzufügen
 */
// onclick-Listener für Click auf .add-paragraph Button
document.querySelector('.add-paragraph').onclick = function () {
  // createElement erzeugt ein leeres (!) Element
  // leer: Ohne Text / Attribute etc.
  const para = document.createElement('p');

  // Mit .innerText kann ich den Text ändern
  para.innerText = 'Durch JS erzeugt!';

  // Der Tag "schwirrt" noch planlos im HTML umher, er weiß nicht wo er hingehört.
  // Mit .appendChild kann ich ihn beim entsprechenden Tag hinzufügen.
  document.querySelector('body').appendChild(para);
}

// Genau das gleiche, kann jeden HTML-Tag (hier Bild) erstellen!
document.querySelector('.add-image').onclick = function () {
  // Leeres img-Tag erstellen
  const img = document.createElement('img');

  // Setzte mir das 'src'-Attribut
  img.setAttribute('src', 'https://media.moddb.com/images/members/5/4550/4549205/duck.jpg');

  // Wieder ins HTML "hängen"
  document.querySelector('body').appendChild(img);
}

// Kann auch auf bestimmte Tastendrücke reagieren
document.querySelector('html').onkeydown = function (event) {
  // event: Objekt mit näheren Info's zum Event selbst
  const pressedKey = event.key;

  if (pressedKey === 'g') {
    console.log('Go home you must');
  } else if (pressedKey === 'w') {
    console.log('WIFI it is');
  } else {
    console.log('You pressed ', pressedKey);
  }
}