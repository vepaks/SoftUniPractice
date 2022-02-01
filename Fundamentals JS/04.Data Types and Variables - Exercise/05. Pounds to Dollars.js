function getSum (pounds) {
    
    let dolar = 1.31;

    let totalSum = (pounds * dolar).toFixed(3);
    console.log(totalSum);

}

getSum (80);
getSum (39);