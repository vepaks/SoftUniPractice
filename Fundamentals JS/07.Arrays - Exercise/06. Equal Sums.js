function calcSum(arr) {
    let switcher = false;

    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let j = i - 1; j >= 0; j--) {
            leftSum += arr[j];
        }

        for (let n = i + 1; n < arr.length; n++) {
            rightSum += arr[n];
        }

        if (leftSum === rightSum) {
            console.log(i);
            switcher = true;
        }
    }
    if (!switcher) {
        console.log('no');
    }

}

calcSum([1, 2, 3, 3]);
calcSum([1, 2]);
calcSum([1]);
calcSum([1, 2, 3]);
calcSum([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);