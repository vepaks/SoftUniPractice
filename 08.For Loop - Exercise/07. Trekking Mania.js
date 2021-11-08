function getPercent(input) {
    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 1; i < input.length; i++) {
        let c = input[i]; // в 'c' сме инициализирали всички стойности на масива (без първа)

        // провевяваме диапазоните и събираме стойностите от масива
        if (c <= 5) {
            musala += Number(c);
        } else if (c >= 6 && c <= 12) {
            monblan += Number(c);
        } else if (c >= 13 && c <= 25) {
            kilimandjaro += Number(c);
        } else if (c >= 26 && c <= 40) {
            k2 += Number(c);
        } else if (c >= 41) {
            everest += Number(c);
        }
    }

    //събираме стойностите на променливете
    let allNumbers = musala + monblan + k2 + kilimandjaro + everest;

    // печатаме резултата
    console.log(`${(musala / allNumbers * 100).toFixed(2)}%`);
    console.log(`${(monblan / allNumbers * 100).toFixed(2)}%`);
    console.log(`${(kilimandjaro / allNumbers * 100).toFixed(2)}%`);
    console.log(`${(k2 / allNumbers * 100).toFixed(2)}%`);
    console.log(`${(everest / allNumbers * 100).toFixed(2)}%`);

}

getPercent(["5",
"25",
"41",
"31",
"250",
"6"])