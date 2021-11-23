function checkNum(input) {

    let percentFat = Number(input[0]) / 100,
        percentProteins = Number(input[1])/100,
        percentCarbohydrates = Number(input[2])/100,
        caloriesSum = Number(input[3]),
        percentWater = Number(input[4])/ 100;

    let gramsSumFat = (percentFat * caloriesSum) / 9; 
    let gramsSumProteins = (percentProteins * caloriesSum) / 4;
    let gramSumCarbohydrates = (percentCarbohydrates * caloriesSum) / 4;

    let sumGrams = gramsSumFat + gramsSumProteins + gramSumCarbohydrates; 

    let caloriesPerGrams = caloriesSum / sumGrams;

    let watherInWater = 1 - percentWater;

    let result = watherInWater * caloriesPerGrams;



console.log(result.toFixed(4));

}

checkNum(["20",
"60",
"20",
"1800",
"50"]);