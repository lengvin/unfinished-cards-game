const gameBoard = document.querySelector(".board");
const startButton = document.querySelector(".board__button");
const input = document.querySelector(".board__input");
const cardsIcons = ["compass", "cloud", "play", "bolt", "stop", "cogs", "atom",
     "basketball-ball", "arrows", "angle-left", "bars", "file", "filter", "gear",
      "folder", "folder-open", "shield", "scissors", "pen-clip"];


startButton.addEventListener('click', (event)=> {
    event.preventDefault()
    let columns = input.value;
    let count;
    if (columns <= 6 && columns >= 2 && columns % 2 == 0) {
        count = columns * columns;
    } else {
        input.value = 4;
    }
    createBoard(columns, count);
});

function createBoard(columns, count) {
    gameBoard.textContent = "";
    let template = document.querySelector("#gameTableTemplate").cloneNode(true).content;
    let icons = createIconsArray(`${input.value} / 2`)
    // console.log(icons)
    icons.forEach((icon) => {
        gameTable.append(createCard(icon));
    });
    const gameTable = template.querySelector('.table');
    const resetButton = template.querySelector(".table__button");
    gameTable.style = `
    grid-template-columns: repeat(${columns}, 1fr);
    grid-template-rows: repeat(${columns}, 1fr);
    `;
    gameBoard.append(template);
    resetButton.addEventListener("click", () => {
        location.reload()
    });
    gameBoard.append(resetButton);
    for (let i = 0; i < count; i++) {
        gameTable.append(createCard());
    }
}

function createCard(flippedIcon) {
    const cardTemplate = document.querySelector("#cardTemplate").cloneNode(true).content;
    const card = cardTemplate.querySelector(".card");
    card.querySelector('#flippedIcon').classList.add(`fa-${flippedIcon}`);
    return card;
}

function createIconsArray (initialCount) {
    let cards = cardsIcons.slice(0, Math.floor(initialCount / 2));
    const duobleCards = dublicateElements(cards);
    return duobleCards;
}

function dublicateElements (array) {
    let massive = [];
    array.forEach((item) => {
        newArr.push(item, item);
      });
    return massive;
}

function shuffleArray (array) {
    let currentIndex = array.length;
    while (currentIndex != 0) {
        // Отнимаем индекс
        currentIndex --;
        // Генерируем рандомный индекс
        const randomIndex = Math.floor(Math.random() * currentIndex);
    
        // Сохраняем элемент текущего индекса
        const temp = array[currentIndex];
        // По текущему индексу размещаем элемент по случайному индексу
        array[currentIndex] = array[randomIndex];
        // А на место элемента по случайному индексу ставим сохраненный элемент бывшего текущего индекса
        array[randomIndex] = temp;
    };
    
    // Возвращаем измененный массив
    return array;
}