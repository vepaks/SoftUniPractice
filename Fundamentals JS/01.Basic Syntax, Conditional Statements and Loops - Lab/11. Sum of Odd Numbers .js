function getNum(num) {
    let n = 1;
    let totalSum = 0;
    for (let i = 1; i <= num; i++) {
      console.log(n);
      totalSum+=n;
      n +=2;   
      
    }
    console.log(`Sum: ${totalSum}`);
}

getNum(5);
getNum(3);
