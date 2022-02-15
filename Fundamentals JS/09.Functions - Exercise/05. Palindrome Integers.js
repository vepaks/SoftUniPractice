function checkSum(arr) {

    arr.forEach(element => {
        let checkElement = Number(element.toString().split('').reverse().join(''));
        if (element === checkElement) {
            console.log(true);
        } else {
            console.log(false);
        }
    });



    // arr.forEach(element => {

    //     let charArr = [];
    //     element = String(element);

    //     for (let j = 0; j < element.length; j++) {
    //         let char = element[j];

    //         charArr.push(char);
    //     }

    //     charArr.reverse();
    //     let a = charArr.join('');

    //     if (a === element) {
    //         console.log(true);
    //     } else {
    //         console.log(false);
    //     }

    // });


    // //при вход Стринг
    // arr.forEach(element => {
    //     let checkElement = element.split('').reverse().join('');
    //     if (element === checkElement) {
    //         console.log(true);
    //     } else {
    //         console.log(false);
    //     }
    // });

    //при вход число 



}
checkSum([123, 323, 421, 121]);
checkSum([32, 2, 232, 1010]);