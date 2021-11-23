function checkNum(input) {
    let days = Number(input[0]);
    let firstDayKilometers = Number(input[1]);

    let index = 2;
    let percentage = Number(input[index]) / 100;
    let sum = Number(firstDayKilometers);

    let sumKilometers = Number(firstDayKilometers);

    for (let i = 0; i < days; i++) {
        sum += (sum * percentage);
        index++;
        percentage = Number(input[index]) / 100;
        sumKilometers = sumKilometers + sum;
    }

    if (sumKilometers >= 1000) {
        console.log(`You've done a great job running ${Math.ceil(sumKilometers - 1000)} more   kilometers!`);
    } else if (sumKilometers < 1000) {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - sumKilometers)} more kilometers`);
    }

}
checkNum(["4",
"100",
"30",
"50",
"60",
"80"]);