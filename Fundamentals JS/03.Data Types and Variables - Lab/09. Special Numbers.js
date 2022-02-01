function checkDigits(num) {

    // let sum = num % 10;
    //     sum = sum / 10;

    for (let i = 1; i <= num; i++) {
        let sum = i % 10;
        sum = sum / 10;
        console.log(sum);

    }
    // console.log(sum);

}

checkDigits(15);
checkDigits(20);


// To calculate the sum of digits of given number num, 
// you might repeat the following: sum the last digit (num % 10) 
// and remove it (sum = sum / 10) until num reaches 0. Use parseInt()
//  while dividing to get only integer numbers.
