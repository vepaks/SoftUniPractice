function checkPoints(input) {

    // създаваме променливи за необходните ни калкулации
    let startingPoints = Number(input[1]),
        pointsFromTourneys = 0,
        averagePoints = 0,
        eventCount = Number(input[0]),
        winsCounts = 0,
        winsPercentage = 0;

    // правим цикъл за проверка на данните от масива
    for (let i = 2; i < input.length; i++) {

        let c = input[i]; // в 'c' са инициализирани всички стойности на масива

        // правим проверка, за да добавим стойности
        switch (c) {
            case 'W':
                pointsFromTourneys += 2000;

                //броим победите в турнира
                winsCounts++;
                break;
            case 'F':
                pointsFromTourneys += 1200;
                break;
            case 'SF':
                pointsFromTourneys += 720;
                break;

            default:
                break;
        }
    }

    // смятаме необходимите суми за резултатите
    averagePoints = pointsFromTourneys / eventCount;
    pointsFromTourneys += startingPoints;
    winsPercentage = (winsCounts / eventCount) * 100;

    // печатаме резултати
    console.log(`Final points: ${pointsFromTourneys}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${winsPercentage.toFixed(2)}%`);

}

checkPoints(["7", "1200", "SF", "F", "W", "F", "W", 'SF', 'W']);