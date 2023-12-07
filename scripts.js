let names = JSON.parse(localStorage.getItem('names')) || [];
let currentNameIndex = 0;
var randomIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
    loadRandomCard();
    document.querySelector('.card-container').addEventListener('click', flipCard);
    // Keine Notwendigkeit, die Namenanzeige hier zu initialisieren
});

function flipCard() {
    var card = document.querySelector('.card');
    var nameDisplayContainer = document.getElementById('nameDisplayContainer');
    var nameDisplay = document.getElementById('nameDisplay');

    card.classList.add('flipped'); // Start the flip animation

    // Start the name animation
    if (names.length > 0) {
        var randomIndex1 = Math.floor(Math.random() * names.length);
        while (randomIndex == randomIndex1) {
            randomIndex = Math.floor(Math.random() * names.length);
        }
        randomIndex = randomIndex1
        updateNameDisplay(names[randomIndex1]);
    }

    card.classList.add('flipped'); // Starte die Umdreh-Animation

    // Mache den Namen sichtbar und bewege ihn an die Spitze
    nameDisplayContainer.style.transform = 'translateX(-50%) translateY(0)';
    nameDisplayContainer.style.opacity = '1';
    nameDisplayContainer.style.visibility = 'visible';

    // Wait for the end of the flip animation
    setTimeout(function() {
        loadRandomCard(); // Load a new card when the animation ends
        card.classList.remove('flipped'); // Reset the flip animation
    }, 600); // Adjusted timing for the card flip
}

function loadRandomCard() {
    var randomCardNumber = Math.floor(Math.random() * 125) + 1;
    var cardImage = document.getElementById('randomCard');
    cardImage.src = 'cards/' + randomCardNumber + '.png';
}

function updateNameDisplay(name) {
    var nameDisplay = document.getElementById('nameDisplay');
    nameDisplay.textContent = name; // Setzt den aktuellen Namen
}
