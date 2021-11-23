function checkNum(input) {
    let days = Number(input[0]);

    let rakiaSum = 0;
    let degreesSum = 0;



    for (let i = 1; i < input.length; i++) {
        let rakia = Number(input[i]);
        rakiaSum += rakia;
        i++;
        let degrees = Number(input[i]);

        degreesSum = degreesSum + (degrees * rakia);

    }

    let result = (degreesSum / rakiaSum);

    console.log(`Liter: ${rakiaSum.toFixed(2)}`);
    console.log(`Degrees: ${result.toFixed(2)}`);
    if (result < 38) {
        console.log(`Not good, you should baking!`);
    } else if (result >= 38 && result <= 42) {
        console.log(`Super!`);
    } else if (result > 42) {
        console.log (`Dilution with distilled water!`);
    }

}
checkNum (["2", 
'200', 
'43', 
'200', 
'40']);