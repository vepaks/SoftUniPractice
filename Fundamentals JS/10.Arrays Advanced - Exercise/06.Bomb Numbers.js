function sortNumber(arrOne, arrTwo) {
    let bombNumber = arrTwo[0];
    let bombPower = arrTwo[1];

    let indexOfBombNumber = arrOne.indexOf(bombNumber);
    // console.log(indexOfBombNumber);

    while (indexOfBombNumber !== -1) {
        let start = Math.max(0, indexOfBombNumber - bombPower);
        // console.log(start);

        let powerLenght = bombPower * 2 + 1;
        // дължината на взрива е силата на взерива * ляво и дясно + числото на бомбата

        arrOne.splice(start, powerLenght);

        //за да спрем цикъла проверявяме дали има нови бомби в масива
        indexOfBombNumber = arrOne.indexOf(bombNumber);
    }

    let sum = 0;

    arrOne.forEach(element => {
        element = Number(element);
        sum += element;
    });
    console.log(sum);

    console.log(arrOne.join(' '));

}

sortNumber([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
sortNumber([1, 4, 4, 2, 8, 9, 1], [9, 3]);
sortNumber([1, 7, 7, 1, 2, 3], [7, 1]);
sortNumber([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);