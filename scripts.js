let names = JSON.parse(localStorage.getItem('names')) || [];
let previousNameIndex = -1;
let previousCardNumber = -1; // Variable zur Speicherung der zuletzt angezeigten Kartennummer

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
    } while (randomCardNumber === previousCardNumber); // Vermeide die unmittelbare Wiederholung der gleichen Karte

    previousCardNumber = randomCardNumber; // Speichere die Nummer der aktuellen Karte
    var cardImage = document.getElementById('randomCard');
    cardImage.src = 'cards/' + randomCardNumber + '.png';
}

function updateNameDisplay(name) {
    var nameDisplay = document.getElementById('nameDisplay');
    nameDisplay.textContent = name;
}