function checkSum(start, end) {
    
    start = Number(start);
    end = Number(end);
    let string = '';

    let totalSum = 0;
    
    while (start <= end) {
        string += ' ' + start;
        totalSum += start;
        start += 1;
    }
    console.log(string);
    console.log(`Sum: ${totalSum}`);
}

checkSum(5, 10);
checkSum(0, 26);
checkSum(50, 60);