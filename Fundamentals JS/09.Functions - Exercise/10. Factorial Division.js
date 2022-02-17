function checkSum(num1, num2) {

    console.log(factorialDivision(num1, num2));

    function factorialDivision(firstNum, secondNum) {
        return (factorial(firstNum) / factorial(secondNum)).toFixed(2);

        function factorial(num) {
            let factorial = 1;
            for (let index = 1; index <= num; index++) {
                factorial *= index;
            }
            return factorial;
        }
    }

}

checkSum(5, 2);
checkSum(6, 2);