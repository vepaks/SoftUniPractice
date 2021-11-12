function checkNum(input) {
    //създаваме брояч
    let index = 0;
    //правим променлива за съхранение на най-голямото число от проверката
    let biggestNum = Number.MIN_SAFE_INTEGER;
    //правим променлива за стойностите от масива
    let controlNum = input[index];
    index++;

    //създаваме цикъл за проверка за прекратяването му
    while (controlNum !== 'Stop') {
        //създаваме променлива за запазване цисловата стойнот на значението от масива
        let num = Number(controlNum);
        //правим проверка за сравнение на текуща стойност и стойнот идваща от масива
        if (biggestNum < num) {
            biggestNum = num;
        }
        //увеличаваме индекса на масива за да проверим следваща стойност
        controlNum = input[index];
        index++;

    }
    //печатаме резултата
    console.log(biggestNum);
}
checkNum(["-1",
    "-2",
    "Stop"
]);