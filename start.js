// Event-Listener für den Startbutton, um das Modus-Auswahlmenü zu öffnen
document.getElementById('startButton').addEventListener('click', function() {
    // Das Modus-Auswahlmenü wird sichtbar gemacht
    document.getElementById('modeSelectionContainer').classList.remove('hidden');
    // Der Startbutton wird versteckt
    this.classList.add('hidden');
});

// Event-Listener für die Modusauswahl-Buttons
document.getElementById('allCardsButton').addEventListener('click', function() {
    selectMode('allCards');
});

document.getElementById('normalButton').addEventListener('click', function() {
    selectMode('normal');
});

document.getElementById('over18Button').addEventListener('click', function() {
    selectMode('over18');
});

// Hilfsfunktion zur Auswahl des Modus und zur Anzeige des Namenseingabefeldes
function selectMode(mode) {
    localStorage.setItem('selectedMode', mode);
    document.getElementById('modeSelectionContainer').classList.add('hidden');
    document.getElementById('nameInputContainer').classList.remove('hidden');
}

// Event-Listener für den Speichern-Button
document.getElementById('saveButton').addEventListener('click', function() {
    let name = document.getElementById('nameInput').value.trim();
    if (name) {
        names.push(name); // Fügt den Namen zur Liste hinzu
        updateNameList();
        document.getElementById('nameInput').value = ''; // Setzt das Eingabefeld zurück
    }
    if (names.length > 1) {
        document.getElementById('continueButton').classList.remove('hidden');
    }
});

// Event-Listener für den Weiter-Button
document.getElementById('continueButton').addEventListener('click', function() {
    if (names.length >= 2) {
        localStorage.setItem('names', JSON.stringify(names)); // Speichert die Namen im Local Storage
        window.location.href = 'startpage.html'; // Weiterleitung zur 'startpage.html'
    } else {
        // Optional: Ausgabe einer Warnmeldung
        alert('Bitte mindestens zwei Namen eingeben.');
    }
});

let names = []; // Array zum Speichern der Namen

// Funktion zum Aktualisieren der Namensliste auf der Benutzeroberfläche
function updateNameList() {
    let list = document.getElementById('nameList');
    list.innerHTML = ''; // Leert die Liste
    names.forEach(function(name) {
        let listItem = document.createElement('li');
        listItem.textContent = name;
        listItem.classList.add('list-group-item');
        list.appendChild(listItem);
    });
}