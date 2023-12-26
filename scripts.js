let names = JSON.parse(localStorage.getItem('names')) || [];
let previousNameIndex = -1;
let drawnCards = new Set(); // Ein Set, um gezogene Karten zu speichern

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
    do {
        randomCardNumber = Math.floor(Math.random() * 200) + 1;
    } while (drawnCards.has(randomCardNumber)); // Überprüfe, ob die Karte bereits gezogen wurde

    drawnCards.add(randomCardNumber); // Füge die gezogene Karte zum Set hinzu
    if (drawnCards.size >= 175) {
        drawnCards.clear(); // Setze die Liste der gezogenen Karten zurück, wenn 175 Karten erreicht sind
    }

    if (names.length > 0 && randomCardNumber < 152) {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * names.length);
        } while (randomIndex === previousNameIndex);

        previousNameIndex = randomIndex;
        updateNameDisplay(names[randomIndex]); // Aktualisiere den Namen nur, wenn die Karte kleiner als 152 ist
    } else {
        updateNameDisplay(''); // Leere den Namen, wenn die Karte 152 oder höher ist
    }

    var cardImage = document.getElementById('randomCard');
    cardImage.src = 'cards/' + randomCardNumber + '.png';
}

function updateNameDisplay(name) {
    var nameDisplay = document.getElementById('nameDisplay');
    if (name) {
        nameDisplay.textContent = name;
        nameDisplay.style.display = "block"; // Zeigt das Namenselement an, wenn ein Name vorhanden ist
    } else {
        nameDisplay.textContent = '';
        nameDisplay.style.display = "none"; // Versteckt das Namenselement, wenn kein Name vorhanden ist
    }
}