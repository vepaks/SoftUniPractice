function sort(arr) {
    let newArr = [];
    let sortArr = arr.sort((a, b) => b - a);

    while (arr.length > 0) {
        let biggestNum = sortArr.shift();
        newArr.push(biggestNum);
        let smallNum = sortArr.pop();
        newArr.push(smallNum);
    }

    console.log(newArr.join(' '));

}

sort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sort([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);

