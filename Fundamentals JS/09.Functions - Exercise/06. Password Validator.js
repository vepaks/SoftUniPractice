function checkSum(string) {

    stringToArr(string); //разбиваме паролата на масив
    isLenghtEnought(stringToArr(string)); //проверяваме дължината на масива
    isOnlyLetersAndNumbers(stringToArr(string)); //проверяваме за букви и цифри в масива
    isEnoughtNumbs(stringToArr(string)); //проверка за числата в масива

    //при изпълнени условия
    if (isEnoughtNumbs(stringToArr(string)) &&
        isOnlyLetersAndNumbers(stringToArr(string)) &&
        isLenghtEnought(stringToArr(string))) {
        console.log('Password is valid');
    }

    //ако няма достатъчно символи
    if (!isLenghtEnought(stringToArr(string))) {
        console.log('Password must be between 6 and 10 characters');
    }

    //ако няма само букви и цифти
    if (!isOnlyLetersAndNumbers(stringToArr(string))) {
        console.log('Password must consist only of letters and digits');
    }

    //ако няма две или повече цифри
    if (!isEnoughtNumbs(stringToArr(string))) {
        console.log('Password must have at least 2 digits');
    }


    function stringToArr(string) {
        let arrFromString = string.split('');
        return arrFromString;
    }

    function isLenghtEnought(arr) {
        return arr.length >= 6 && arr.length <= 10;
    }

    function isOnlyLetersAndNumbers(arr) {
        for (let element of arr) {
            let char = element.charCodeAt(0);
            if (!(char >= 48 && char <= 57) && !(char >= 65 && char <= 90) && !(char >= 97 && char <= 122)) {
                return false;
            } else {
                return true;
            }
        }
    }

    function isEnoughtNumbs(arr) {
        let count = 0;
        for (let element of arr) {
            let char = element.charCodeAt(0);
            if (char >= 48 && char <= 57) {
                count += 1;
            }
        }
        return count >= 2;
    }
}

checkSum('logIn');
checkSum('MyPass123');
checkSum('%Pa$s$s');