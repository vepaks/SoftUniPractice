function toyShop(input) {
    let excursionPrice = Number(input[0]),
        puzzleCount = Number(input[1]),
        dolsCount = Number(input[2]),
        bearsCount = Number(input[3]),
        minionsCount = Number(input[4]),
        trucksCout = Number(input[5]);

    let puzzlePrice = 2.60,
        dolsPrice = 3,
        bearsPrice = 4.10,
        minionsPrice = 8.20,
        trucksPrice = 2;

    let toysCout = puzzleCount + dolsCount + bearsCount + minionsCount + trucksCout;
    let toysSum = (puzzleCount * puzzlePrice) + (dolsCount * dolsPrice) + (minionsCount * minionsPrice) +
        (trucksCout * trucksPrice) + (bearsCount * bearsPrice);

    if (toysCout >= 50) {
        toysSum = toysSum - (toysSum * 0.25);
    }
    let rent = toysSum * 0.10;

    let remainingМoney = (toysSum - rent);

    if (remainingМoney >= excursionPrice) {
        console.log(`Yes! ${(remainingМoney-excursionPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(excursionPrice-remainingМoney).toFixed(2)} lv needed.`);
    }

}

toyShop(["320",
    "8",
    "2",
    "5",
    "5",
    "1"
]);


//  (remainingМoney <= 0 ){
//     remainingМoney = Math.abs (-remainingМoney.toFixed(2));
//     console.log (`Not enough money! ${remainingМoney} lv needed.`);