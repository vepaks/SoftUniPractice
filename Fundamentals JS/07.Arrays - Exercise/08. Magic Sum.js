function checkSum (arr, num) {

    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        
        let checkSum = 0;
        let firstNum = arr[i];
        
        for (let j = i+1; j < arr.length; j++) {
            let secondNum = arr[j];

            checkSum = firstNum + secondNum;

            if (checkSum === num ) {
                newArr.push(arr[i], arr[j]);
                console.log (newArr.join(' '));
                newArr = [];
            }

        }

    }

}
checkSum ([1, 7, 6, 2, 19, 23], 8);
checkSum ([14, 20, 60, 13, 7, 19, 8], 27);
checkSum ([1, 2, 3, 4, 5, 6], 6);