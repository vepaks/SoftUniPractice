function checkNum(num1, num2, num3) {

    let newFunction = function (num1, num2, num3) {

        let checkNum = 0;

        if (num1 <= num2 && num1 <= num3) {
            checkNum = num1;
        } else if (num2 <= num1 && num2 <= num3) {
            checkNum = num2;
        } else {
            checkNum = num3;
        }

        return checkNum;

    };

    console.log(newFunction(num1, num2, num3));

}

checkNum(2, 5, 3);
checkNum(600, 342, 123);
checkNum(25, 21, 4);
checkNum(2, 2, 2);