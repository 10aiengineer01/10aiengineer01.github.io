let names = [];

document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('nameInputContainer').classList.remove('hidden');
    this.classList.add('hidden'); // Versteckt den Start-Button
});

document.getElementById('saveButton').addEventListener('click', function() {
    var name = document.getElementById('nameInput').value;
    if(name) {
        names.push(name); // Fügt den Namen der Liste hinzu
        updateNameList(); // Aktualisiert die Liste der Namen
        document.getElementById('nameInput').value = ''; // Setzt das Eingabefeld zurück
        document.getElementById('continueButton').classList.remove('hidden'); // Zeigt den "Weiter"-Button an
    }
});

document.getElementById('continueButton').addEventListener('click', function() {
    localStorage.setItem('names', JSON.stringify(names)); // Speichert die Liste im Local Storage
    window.location.href = 'startpage.html'; // Weiterleitung zur Hauptseite
});

function updateNameList() {
    const list = document.getElementById('nameList');
    list.innerHTML = ''; // Leert die Liste
    names.forEach(function(name) {
        const listItem = document.createElement('li');
        listItem.textContent = name;
        listItem.classList.add('list-group-item');
        list.appendChild(listItem);
    });
}

function updateNameDisplay(name) {
    var nameDisplay = document.getElementById('nameDisplay');
    nameDisplay.textContent = name; // Setzt den aktuellen Namen
    var nameDisplayContainer = document.getElementById('nameDisplayContainer');
    nameDisplayContainer.style.animation = 'none'; // Setzt die Animation zurück
    setTimeout(() => {
      nameDisplayContainer.style.animation = ''; // Startet die Animation
    }, 10); // Ein kleiner Timeout, um die Animation zurückzusetzen
  }
