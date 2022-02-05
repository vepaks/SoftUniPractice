function getArr(arr, num) {

    for (let index = 0; index < num; index++) {
        let newArr = arr.shift();
        arr.push(newArr);
        let a = arr[0];
    }

    console.log(arr.join(' '));
}

getArr([51, 47, 32, 61, 21], 2);