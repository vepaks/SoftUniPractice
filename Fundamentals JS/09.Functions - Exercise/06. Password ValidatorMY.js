function checkSum(string) {

    getArrFromString(string); //разбиване на масив
    checkNumberCountInArr(getArrFromString(string)); //броят на числата в масива
    consistChecker(getArrFromString(string)); // дължината на масива

    //типове данни на масива
    lettersAndDigitsInArrChecker(getArrFromString(string), checkNumberCountInArr(getArrFromString(string)));


    //проверка на паролата
    let arrLenghtChecker = false;
    let typeOfChecker = false;
    let numbsChecker = false;


    //проверка за броят на символите 
    if (getArrFromString(string).length < 6 || getArrFromString(string).length > 10) {
        console.log("Password must be between 6 and 10 characters");
    } else {
        arrLenghtChecker = true;
    }
    //проверка за типове данни
    if (arrLenghtChecker === true && lettersAndDigitsInArrChecker(getArrFromString(string),
            checkNumberCountInArr(getArrFromString(string))) === false) {
        console.log("Password must consist only of letters and digits");
    } else {
        typeOfChecker = true;
    }
    //проверка за броят на числата 
    if (checkNumberCountInArr(getArrFromString(string)) < 2) {
        console.log("Password must have at least 2 digits");
    } else {
        numbsChecker = true;
    }
    //паролата е вярна
    if (arrLenghtChecker === true && typeOfChecker === true && numbsChecker === true) {
        console.log("Password is valid");
    }

    function getArrFromString(element) {
        let charArr = [];
        element = String(element);

        for (let j = 0; j < element.length; j++) {
            let char = element[j];

            charArr.push(char);
        }
        return charArr;
    }

    function checkNumberCountInArr(arr) {

        let numberCount = 0;
        arr.forEach(element => {

            if (element > 0) {
                numberCount += 1;
            }

        });
        return numberCount;

    }

    function consistChecker(arr) {

        let consistChecker = false;

        if (arr.length >= 6 && arr.length <= 10) {
            consistChecker = true;
        }

        return consistChecker;

    }

    function lettersAndDigitsInArrChecker(arr, numbsInArr) {

        let checker = true;

        let stringCount = arr.length + numbsInArr;

        if (arr.length === stringCount) {
            checker = false;
        }
        return checker;

    }

}

checkSum('logIn');
checkSum('MyPass123');
checkSum('Pa$s$s');