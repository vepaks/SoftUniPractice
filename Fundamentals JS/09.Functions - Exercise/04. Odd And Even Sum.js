function checkSum(number) {


    let newArr = [],
        string = String(number),
        oddSum = 0,
        evenSum = 0;

    for (let index = 0; index < string.length; index++) {
        let char = string[index];
        newArr.push(char);
    }

    for (let index = 0; index < newArr.length; index++) {
        let char = Number(newArr[index]);
        if (char % 2 === 0) {
            evenSum += char;
        } else {
            oddSum += char;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}

checkSum(1000435);
checkSum(3495892137259234);