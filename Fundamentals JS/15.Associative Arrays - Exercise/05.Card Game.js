function getSting(arr) {
    //създаваме обект за уникалните играчи с всички уникални карти в тестето им
    let players = {};
    //създаваме обекти за силата на боята на картите
    let suits = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    };
    //създаваме обект със силата на отделните карти
    let faces = {
        '1': 10,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14,
    };



    //обхождаме масива и разделяме данните на имена на играчи и тестета
    for (let arrElement of arr) {
        let [name, cards] = arrElement.split(': ');
        cards = cards.split(', ');
        //ако името на играче не е в обекта за играчи го добавяме
        if (players.hasOwnProperty(name) === false) {
            players[name] = new Set();
        }

        //с цикъл добавяме уникални карти (без тези, които се повтарят) към всяко име
        for (let card of cards) {
            players[name].add(card);
        }

    }
    //обхождаме обекта с вече актуалните играчи с уникални карти
    for (let [name, cards] of Object.entries(players)) {
        let sumPower = 0;
    //изчисляваме силата на всяка карта като взимаме данни съответно от обектите
        for (let card of cards) {
            let facePower = faces[card[0]];
            let suitPower = suits[card.slice(-1)];

            sumPower += facePower * suitPower;

        }
    //печатаме резултата
        console.log(`${name}: ${sumPower}`);
    }

}

getSting([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);