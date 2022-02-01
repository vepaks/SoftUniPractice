function replaceChar(string, char, check) {

    let replacedChar = string.replace('_', char);

    if (check === replacedChar) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }

}

replaceChar('Str_ng', 'I', 'Strong');
replaceChar('Str_ng', 'i', 'String');