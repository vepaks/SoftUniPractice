function getMaxNumber(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i];
        let switcher = true;
        for (j = i + 1; j < arr.length; j++) {
            let nextElement = arr[j];
            if (currentElement <= nextElement) {
                switcher = false;
                break;
            }
        }
        if (switcher) {
            newArr.push(currentElement);
        }

    }
    console.log(newArr.join(' '));
}

getMaxNumber([1, 4, 3, 2]);