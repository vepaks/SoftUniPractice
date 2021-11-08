function calcBalance(input) {
    //създаване на променлива - брояч за индексите от масива
    let index = 0;
    //създаваме променлива за работа в цикъла
    let controlWord = input[index];
    index++;
    //създаваме променлива, която да съхранява сборът от изчисленията
    let balance = 0;

    //създаваме цикъл, в който:

    // 1. правим проверка по контролната дума от масива за прекъсване на цикъла
    // 2. Печатаме стойност на данни от масива
    // 3. правим изчисления
    // 4. увеличаваме стойността на брояча
    while (controlWord !== 'NoMoreMoney') {

        //създаваме променлива за калкулациите
        let money = Number(controlWord);

        if (money < 0) {
            console.log('Invalid operation!');
            break;
        }

        balance += money;

        console.log(`Increase: ${money.toFixed(2)}`);

        controlWord = input[index];
        index++;

    }

    // печатаме резултата от изчисленията
    console.log(`Total: ${balance.toFixed(2)}`);

}
calcBalance(["5.51",
    "69.42",
    "100",
    "NoMoreMoney"
]);