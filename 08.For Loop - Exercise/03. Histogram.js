function getHistogram(input) {

    let allNumbers = Number(input[0]);
    let p1 = 0,
        p2 = 0,
        p3 = 0,
        p4 = 0,
        p5 = 0;

    for (let i = 1; i < input.length; i++) {
        let c = input[i];
        // console.log(c); // в 'c' сме инициализирали всички стойности на масива

        // провевяваме диапазоните и увечаваме стойностите на променливите
        if (c < 200) {
            p1++;
        } else if (c <= 399) {
            p2++;
        } else if (c <= 599) {
            p3++;
        } else if (c <= 799) {
            p4++;
        } else if (c >= 800) {
            p5++;
        }

    }
    // печатаме резултата
    console.log(`${(p1 / allNumbers * 100).toFixed(2)}%`);
    console.log(`${(p2 / allNumbers * 100).toFixed(2)}%`);
    console.log(`${(p3 / allNumbers * 100).toFixed(2)}%`);
    console.log(`${(p4 / allNumbers * 100).toFixed(2)}%`);
    console.log(`${(p5 / allNumbers * 100).toFixed(2)}%`);
    
    
}
getHistogram(["3",
    "1",
    "2",
    "999"
]);