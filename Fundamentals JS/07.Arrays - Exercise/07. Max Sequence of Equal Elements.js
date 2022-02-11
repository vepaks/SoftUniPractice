function getNum (arr) {
    let newArr = [];
    let firstArr = [];

    for (let i = 0; i < arr.length; i++) {
        firstArr = [];

        for (let j = i; j < arr.length; j++) {
            
            if (arr[i] === arr[j] ) {
                firstArr.push(arr[j]);
            } else {
                break;
            }
        }

        if (firstArr.length > newArr.length) {
            newArr = firstArr; 
            }
    }
    console.log(newArr.join(' '));
}

getNum ([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
getNum ([1, 1, 1, 2, 3, 1, 3, 3]);
getNum ([4, 4, 4, 4]);
getNum ([0, 1, 1, 5, 2, 2, 6, 3, 3]);