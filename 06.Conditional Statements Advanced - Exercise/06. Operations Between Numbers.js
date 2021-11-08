function calcNum(input) {
    let n1 = Number(input[0]),
        n2 = Number(input[1]),
        operator = input[2];

    let result;

    switch (operator) {
        case '+':
            result = n1 + n2;
            if ((result % 2) === 0) {
                result = 'even';
            } else {
                result = 'odd';
            }
            console.log(`${n1} ${operator} ${n2} = ${n1 + n2} - ${result}`);
            break;
        case '-':
            result = n1 - n2;
            if ((result % 2) === 0) {
                result = 'even';
            } else {
                result = 'odd';
            }
            console.log(`${n1} ${operator} ${n2} = ${n1 - n2} - ${result}`);
            break;
        case '*':
            result = n1 * n2;
            if ((result % 2) === 0) {
                result = 'even';
            } else {
                result = 'odd';
            }
            console.log(`${n1} ${operator} ${n2} = ${n1 * n2} - ${result}`);
            break;
        case '/':
            result = n1 / n2;
            if (n2 !== 0) {
                console.log(`${n1} ${operator} ${n2} = ${(result).toFixed(2)}`);
            } else {
                console.log(`Cannot divide ${n1} by zero`);
            }
            break;
        case '%':
            result = n1 % n2;

            if (n2 !== 0) {
                console.log(`${n1} ${operator} ${n2} = ${result}`);
            } else {
                console.log(`Cannot divide ${n1} by zero`);
            }
            break;

        default:
            break;
    }
   
}

calcNum(['112','0','/']);