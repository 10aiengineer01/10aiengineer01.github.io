let names = JSON.parse(localStorage.getItem('names')) || [];
let previousNameIndex = -1;
let drawnCards = new Set(); // Ein Set, um gezogene Karten zu speichern
let selectedMode = localStorage.getItem('selectedMode') || 'normal_cards'; // Default zu 'normal_cards', falls nichts ausgewählt wurde

document.addEventListener('DOMContentLoaded', function() {
    loadRandomCard();
    document.querySelector('.card-container').addEventListener('click', flipCard);
});

function flipCard() {
    var card = document.querySelector('.card');
    var nameDisplay = document.getElementById('nameDisplay');

    card.classList.add('flipped'); // Starte die Umdreh-Animation

    setTimeout(function() {
        loadRandomCard();
        card.classList.remove('flipped'); // Setze die Umdreh-Animation zurück
    }, 600);
}

function loadRandomCard() {
    let randomCardNumber;
    let cardFolder = getCardFolder(selectedMode); // Verzeichnis basierend auf dem gewählten Modus
    do {
        randomCardNumber = Math.floor(Math.random() * cardFolder.count) + 1;
    } while (drawnCards.has(randomCardNumber)); // Überprüfe, ob die Karte bereits gezogen wurde

    drawnCards.add(randomCardNumber); // Füge die gezogene Karte zum Set hinzu
    if (drawnCards.size >= cardFolder.count) {
        drawnCards.clear(); // Setze die Liste der gezogenen Karten zurück
    }

    if (selectedMode === 'allCards' && randomCardNumber <= 196) {
        // Zeige den Namen an, wenn die Karte im Bereich von 1 bis 152 liegt
        if (names.length > 0) {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * names.length);
            } while (randomIndex === previousNameIndex);

            previousNameIndex = randomIndex;
            updateNameDisplay(names[randomIndex]);
        }
    } else if (selectedMode === 'normal' && randomCardNumber <= 136) {
        // Für normale Karten, halte die vorherige Logik bei
        if (names.length > 0) {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * names.length);
            } while (randomIndex === previousNameIndex);

            previousNameIndex = randomIndex;
            updateNameDisplay(names[randomIndex]);
        }
    } else if (selectedMode === 'over18' && randomCardNumber <= 96) {
        // Für 18+ Karten, zeige den Namen nur an, wenn die Karte zwischen 1 und 96 liegt
        if (names.length > 0) {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * names.length);
            } while (randomIndex === previousNameIndex);

            previousNameIndex = randomIndex;
            updateNameDisplay(names[randomIndex]);
        }
    } else {
        updateNameDisplay(''); // Leere den Namen in allen anderen Fällen
    }

    var cardImage = document.getElementById('randomCard');
    cardImage.src = cardFolder.path + '/' + randomCardNumber + '.png';
}

function updateNameDisplay(name) {
    var nameDisplay = document.getElementById('nameDisplay');
    if (name) {
        nameDisplay.textContent = name;
        nameDisplay.style.display = "block";
    } else {
        nameDisplay.textContent = '';
        nameDisplay.style.display = "none";
    }
}

function getCardFolder(mode) {
    const folders = {
        'allCards': { path: 'cards', count: 200 }, // Angenommene Anzahl für alle Karten
        'normal': { path: 'normal_cards', count: 115 }, // Angenommene Anzahl für normale Karten
        'over18': { path: 'sexy_cards', count: 115 } // Angenommene Anzahl für 18+ Karten
    };
    return folders[mode] || folders['normal']; // Default zu 'normal', falls kein Modus übereinstimmt
}