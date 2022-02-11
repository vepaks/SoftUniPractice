function checkSum(num1, num2, num3) {

    let newFunction = function (num1, num2, num3) {
        let sumOne = num1 + num2;
        let finalSum = sumOne - num3;
        return finalSum;
    };

    console.log(newFunction(num1, num2, num3));

}

checkSum(23, 6, 10);
checkSum(1, 17, 30);
checkSum(42, 58, 100);