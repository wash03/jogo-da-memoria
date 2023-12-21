const emojis = [
    '🐵',
    '🐵',
    '😍',
    '😍',
    '🤞',
    '🤞',
    '😎',
    '😎',
    '😯',
    '😯',
    '😶‍🌫️',
    '😶‍🌫️',
    '🫠',
    '🫠',
    '🤡',
    '🤡'
];
let openCards = [];

let shuffledEmojis = emojis.sort(() => Math.random() > 0.5 ? 2 : -1);

for (let index = 0; index < emojis.length; index++) {
    const card = document.createElement('div');
    card.classList.add('item');
    card.innerHTML = shuffledEmojis[index];

    card.classList.add('cardOpen');
    setTimeout(() => {
        card.classList.remove('cardOpen');
    }, 5000)

    card.onclick = flipCard;
    document.querySelector('.game').appendChild(card);
}

function flipCard() {
    if (openCards.length < 2) {
        this.classList.add('cardOpen')
        openCards.push(this);
    }

    if (openCards.length === 2) {
        setTimeout(checkForMatch, 500);
    }
}

function checkForMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add('cardMatch');
        openCards[1].classList.add('cardMatch');
    } else {
        openCards[0].classList.remove('cardOpen');
        openCards[1].classList.remove('cardOpen');
    }

    openCards = [];

    if (document.querySelectorAll('.cardMatch').length === emojis.length) {
        alert('Você venceu');

        setTimeout(() => {
            window.location.reload();
        }, 3000)
    }
}