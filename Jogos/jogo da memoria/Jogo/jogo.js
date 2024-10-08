const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player')
const timer = document.querySelector('.timer')

const characters = [
    'mercurio',
    'venus',
    'terra',
    'marte',
    'jupiter',
    'saturno',
    'urano',
    'netuno',
    'sol',
    'lua', 
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firtCard = '';
let secondCard= '';

const checkEndGame = () => {
    const disabledCards = document.querySelectorAll('.disable-card');

    if (disabledCards.length == 20) {
        clearInterval(this.loop);
        window.location = '../Resultado/resultado.html';
        localStorage.setItem('timer', timer.innerHTML);
    }
}

const checkCards = () => {
    const firtCharacter = firtCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');

    if (firtCharacter == secondCharacter) {
        
        firtCard.firstChild.classList.add('disable-card')
        secondCard.firstChild.classList.add('disable-card')

        firtCard = '';
        secondCard = '';

        checkEndGame();

    } else {
        setTimeout(() => {

            firtCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firtCard = '';
            secondCard = '';

        }, 500);
    }
}

const revealCard = ( {target} ) => {

    if (target.parentNode.className.includes('reveal-card')) {
    return;
    }

    if (firtCard == ''){

        target.parentNode.classList.add('reveal-card');
        firtCard = target.parentNode;

    } else if (secondCard == ''){

        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();

    }

}

const createCard = (character) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../img/${character}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard)
    card.setAttribute('data-character', character)

    return card; 
}

const loadGame = () => {

    const duplicateCharacters = [ ...characters, ...characters ];

    const shuffledArray = duplicateCharacters.sort( () => Math.random() -0.5);

    shuffledArray.forEach((character) => {

        const card = createCard(character);
        grid.appendChild(card);

    });

}

const starTimer = () => {

    this.loop = setInterval(() => {
        const currentTimer = +timer.innerHTML;
        timer.innerHTML = currentTimer + 1;
    }, 1000);
}

window.onload = () => {
    starTimer();
    loadGame();
}