function getArr(arr) {

    // let newArr = [];

    // arr.forEach(element => {
    //     if (!newArr.includes(element)) {
    //         newArr.push(element);
    //     }
    // });

    // console.log(newArr.join(' '));


    let arr2 = arr.filter((item, index) => {
        return arr.indexOf(item) === index;
    });
    console.log(arr2.join(' '));

}

getArr([1, 2, 3, 4]);
getArr([7, 8, 9, 7, 2, 3, 4, 1, 2]);
getArr([20, 8, 12, 13, 4, 4, 8, 5]);