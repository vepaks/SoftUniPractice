function godzilla(input) {
    let budget = Number(input[0]),
        statistCount = Number(input[1]),
        clothingPrice = Number(input[2]);

    let decorPricee = budget * 0.10,
        clothingPriceSum = clothingPrice * statistCount;

    if (statistCount >= 150) {
        clothingPriceSum *= 0.90;
    }
    let godzilaPrice = decorPricee + clothingPriceSum;
    let budgetLeft = budget - godzilaPrice;

    if (godzilaPrice > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(godzilaPrice-budget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budgetLeft).toFixed(2)} leva left.`);
    }
}
godzilla(["15437.62", "186", "57.99"]);