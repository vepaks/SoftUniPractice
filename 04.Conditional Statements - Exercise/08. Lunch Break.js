function film(input) {
    let seriesTime = Number(input[1]),
        breakTime = Number(input[2]);

    let lounchTime = breakTime * 1 / 8,
        timeoutTime = breakTime * 1 / 4,
        timeeToSpend = breakTime - lounchTime - timeoutTime;

    Math.ceil(timeeToSpend);

    if (timeeToSpend >= seriesTime) {
        console.log(`You have enough time to watch ${input[0]} and left with ${Math.ceil(timeeToSpend - seriesTime)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${input[0]}, you need ${Math.ceil(seriesTime - timeeToSpend)} more minutes.`);
    }

}

film(["Teen Wolf",
    "48",
    "60"
]);