let names = [];

document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('nameInputContainer').classList.remove('hidden');
    this.classList.add('hidden'); // Versteckt den Start-Button
});

document.getElementById('saveButton').addEventListener('click', function() {
    var name = document.getElementById('nameInput').value;
    if(name) {
        names.push(name); // Fügt den Namen der Liste hinzu
        document.getElementById('nameInput').value = ''; // Setzt das Eingabefeld zurück
        document.getElementById('continueButton').classList.remove('hidden'); // Zeigt den "Weiter"-Button an
    }
});

document.getElementById('continueButton').addEventListener('click', function() {
    localStorage.setItem('names', JSON.stringify(names)); // Speichert die Liste im Local Storage
    window.location.href = 'index.html'; // Weiterleitung zur Hauptseite
});
