function getNum (num) {
    
    let arr = String(num);
    arr = arr.split('');
    let totalSum = 0;

    for (let index = 0; index < arr.length; index++) {
        totalSum += Number(arr[index]);
    }
    console.log (totalSum);
}

getNum (245678);