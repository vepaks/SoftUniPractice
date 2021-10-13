function shoping(input) {
    let budget = Number(input[0]),
        videocardsCount = Number(input[1]),
        procesorsCount = Number(input[2]),
        rammCount = Number(input[3]);

    let videoCardsPrice = 250 * videocardsCount;

    let procesorsPrice = videoCardsPrice * 0.35,
        procesorsPriceSum = procesorsPrice * procesorsCount;

    let rammPrice = videoCardsPrice * 0.10,
        rammPriceSum = rammPrice * rammCount;

    let shopingSum = videoCardsPrice + procesorsPriceSum + rammPriceSum;

    if (videocardsCount > procesorsCount) {
        shopingSum = shopingSum * 0.85;
    }

    if (budget >= shopingSum) {
        console.log(`You have ${(budget-shopingSum).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(shopingSum - budget).toFixed(2)} leva more!`);
    }
}

shoping(["900", "2", "1", "3"]);