function calcNum(num1, num2, operator) {

    let result = 0;
    switch (operator) {
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;

        default:
            break;
    }

    console.log(result);
}

calcNum(5, 5, 'multiply');
calcNum(40, 8, 'divide');
calcNum(12, 19, 'add');
calcNum(50, 13, 'subtract');