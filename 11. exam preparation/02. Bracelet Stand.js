function checkNum(input) {
    let moneyPerDay = Number(input[0]),
        dayProfitMoney = Number(input[1]),
        costSum = Number(input[2]),
        giftPrice = Number(input[3]);

    let savesSum = 5 * moneyPerDay;
    let profitSum = 5 * dayProfitMoney;

    let SumAllProfit = savesSum + profitSum;

    let clearSum = SumAllProfit - costSum;

    if (clearSum >=  giftPrice) {
        console.log(`Profit: ${clearSum} BGN, the gift has been purchased.`);
    } else {
        console.log (`Insufficient money: ${(giftPrice - clearSum).toFixed(2)} BGN.`);
    }

}
checkNum(["15.20",
"200.00",
"7.30",
"1500.12"]);