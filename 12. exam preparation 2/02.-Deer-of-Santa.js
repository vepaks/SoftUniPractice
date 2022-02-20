function checkNum(input) {
    let missCount = Number(input[0]),
        foot = Number(input[1]),
        dayFootFirst = Number(input[2]),
        dayFootSecond = Number(input[3]),
        dayFootTirth = Number(input[4]);

    let footSumFirst = missCount * dayFootFirst;
    let footSumSecond = missCount * dayFootSecond;
    let footSumThirt = missCount * dayFootTirth;

    let footSum = Math.ceil(footSumFirst + footSumSecond + footSumThirt);

    if (footSum < foot) {
        console.log(`${foot - footSum} kilos of food left.`);
    } else if (footSum > foot) {
        console.log(`${footSum - foot} more kilos of food are needed.`);
    }


}

checkNum(["5",
    "10",
    "2.1",
    "0.8",
    "11"]);