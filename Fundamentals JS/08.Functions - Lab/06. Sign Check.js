function checkSign(num1, num2, num3) {
    let newArr = [];
    newArr.push(num1, num2, num3);
    let result = 0;
    newArr.forEach(element => {
        if (element < 0) {
            result += 1;
        }
    });

    if (result % 2 === 0) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}

checkSign(5, 12, -15);
checkSign(-6, -12, 14);
checkSign(-1, -2, -3);
checkSign(-5, 1, 1);