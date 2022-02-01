function getNum(numA, operator, numB) {

    let totalSum = 0;

    switch (operator) {
        case '+':
            totalSum = numA + numB;
            break;
        case '-':
            totalSum = numA - numB;
            break;
        case '/':
            totalSum = numA / numB;
            break;
        case '*':
            totalSum = numA * numB;
            break;
        default:
            break;
    }

    console.log(totalSum.toFixed(2));

}

getNum(5, '+', 10);
getNum(25.5, '-', 3);