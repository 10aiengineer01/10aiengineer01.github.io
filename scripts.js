function flipCard() {
    var card = document.querySelector('.card');
    card.classList.add('flipped'); // Startet die Flip-Animation
    
    // Warte auf das Ende der Animation (600ms)
    setTimeout(function() {
        loadRandomCard(); // Lade eine neue Karte, wenn die Animation endet
        card.classList.remove('flipped'); // Setzt die Flip-Animation zurück
    }, 600);
}

function loadRandomCard() {
    var randomCardNumber = Math.floor(Math.random() * 125) + 1;
    var cardImage = document.getElementById('randomCard');
    cardImage.src = 'cards/' + randomCardNumber + '.png';
}

document.addEventListener('DOMContentLoaded', loadRandomCard);

// Korrigiert von 'getSelector' zu 'querySelector'
document.querySelector('.card-container').addEventListener('click', flipCard);

document.addEventListener('DOMContentLoaded', function() {
    var names = JSON.parse(localStorage.getItem('names'));
    // Machen Sie etwas mit den Namen, z.B. anzeigen in einer Liste
});
