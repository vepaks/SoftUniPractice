function checkSum(numA, numB, numC) {

    let totalSum = numA + numB + numC;

    if (totalSum % 1 === 0) {
        console.log(`${totalSum} - Integer`);
    } else {
        console.log(`${totalSum} - Float`);
    }

}


checkSum(9, 100, 1.1);
checkSum(100, 200, 303);