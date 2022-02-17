getNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
getNumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);


function getNumber(arr, element) {
    let count = 0;
    let el = element[2];

    let newArr = arr.slice(0, element[0]);
    // here
    newArr = newArr.slice(element[1], newArr.length);

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === el) {
            count++;
        }
    }

    console.log(`Number ${el} occurs ${count} times.`);
}


// function getNumber(arrOne, arrTwo) {

// // броят на елементите, който да вземем от първият масив
// let getElements = arrTwo[0];

// //броят елементи, който да премахнем от взетите елементи
// let removeElemnts = arrTwo[1];

// // числото, което търсим в останалият масив
// let checkNumber = arrTwo[2];


// //взимаме определените елементи от първият масива
// getArrElements(arrOne, getElements);
// //изтриваме нужните елементи
// newArr(getArrElements(arrOne, getElements), removeElemnts);
// // намираме търсенето число
// countNumInArr(newArr(getArrElements(arrOne, getElements), removeElemnts), checkNumber);


// //печатаме резултата
// console.log(`Number ${checkNumber} occurs ${countNumInArr(newArr(getArrElements(arrOne, getElements), removeElemnts), checkNumber)} times.`);


// //извършваме необходимите действия

// function getArrElements(arr, elements) {

//     let newArr = [];

//     for (let index = 0; index < elements + 1; index++) {
//         newArr.push(arr[index]);
//     }
//     return newArr;
// }

// function newArr(arr, removeNum) {
//     let newArr = arr.splice(removeNum);
//     return newArr;
// }


// function countNumInArr(arr, number) {
//     let count = arr.filter(element => element === number).length;
//     return count;
// }

// }