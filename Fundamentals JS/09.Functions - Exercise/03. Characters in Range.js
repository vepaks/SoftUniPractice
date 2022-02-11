function checkSum(char1, char2) {

    let startChar = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
    let endtChar = Math.max(char1.charCodeAt(0), char2.charCodeAt(0));
    let newArr = [];

    for (let index = startChar + 1; index < endtChar; index++) {
        newArr.push(String.fromCharCode(index));
    }

    console.log(newArr.join(' '));
}

checkSum('a', 'd');