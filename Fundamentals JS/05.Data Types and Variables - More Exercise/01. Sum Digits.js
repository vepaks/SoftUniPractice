function getSum(num) {
    let sum = 0;
    let string = num.toString();

    for (let index = 0; index < string.length; index++) {
        const element = Number(string[index]);
        sum += element;
    }
    console.log(sum);
}

getSum(245678);
getSum(97561);
getSum(543);