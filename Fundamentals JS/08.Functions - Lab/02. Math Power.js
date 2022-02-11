function calcSum(num1, num2) {
    let sum = 1;

    for (let i = 0; i < num2; i++) {
        sum *= num1;
    }
    console.log(sum);
}

calcSum(2, 8);
calcSum(3, 4);