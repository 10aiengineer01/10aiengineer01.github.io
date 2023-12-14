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

    if (names.length > 0) {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * names.length);
        } while (randomIndex === previousNameIndex);

        previousNameIndex = randomIndex;
        updateNameDisplay(names[randomIndex]);
    }

    setTimeout(function() {
        loadRandomCard();
        card.classList.remove('flipped'); // Setze die Umdreh-Animation zurück
    }, 600);
}

function loadRandomCard() {
    let randomCardNumber;
    do {
        randomCardNumber = Math.floor(Math.random() * 123) + 1;
    } while (drawnCards.has(randomCardNumber)); // Überprüfe, ob die Karte bereits gezogen wurde

    drawnCards.add(randomCardNumber); // Füge die gezogene Karte zum Set hinzu
    if (drawnCards.size >= 50) {
        drawnCards.clear(); // Setze die Liste der gezogenen Karten zurück, wenn 50 Karten erreicht sind
    }

    var cardImage = document.getElementById('randomCard');
    cardImage.src = 'cards/' + randomCardNumber + '.png';
}

function updateNameDisplay(name) {
    var nameDisplay = document.getElementById('nameDisplay');
    nameDisplay.textContent = name;
}