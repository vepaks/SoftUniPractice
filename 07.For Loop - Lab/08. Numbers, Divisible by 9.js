function getNum(input, callback) {
    let startNumber = Number(input[0]),
        endNumber = Number(input[1]);

    let sum = 0; // определяме променлива за сумата на числата
    let result = ''; // определяме променлива за самите числа

    for (let i = startNumber; i <= endNumber; i++) { // извличаме в 'i' всички числа от диапазона
        if (i % 9 === 0) { // проверяваме и определяме числата, които се делят на 9
            sum += i; // задаваме стойност на сумата от числата
            result += i + '\n'; // съхраняваме всички филтрирани числа и ги подреждаме на нов ред
        }

    }
    // печатаме резултата
    console.log(`The sum: ${sum}`);
    console.log(result);
}
getNum(["100", "200"]);