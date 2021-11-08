function calcNum(input) {
    let num = input[0]; // String
    let sum = 0; // определяме променлива за сумата
    for (let i = 0; i < num.length; i++) {     // разбиваме символите на input в num[i]
        sum += Number(num[i]); // даваме числов резултат от сумата на символите
    }
    console.log(`The sum of the digits is:${sum}`); //печатаме резултата
}

calcNum(["1234"]);