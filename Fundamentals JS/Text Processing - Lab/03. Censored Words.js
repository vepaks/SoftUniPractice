getString('A fuck sentence with some fuck words', 'fuck');

// function getString(string, word) {
//     while (string.includes(word)) {
//         string = string.replace(word, '*'.repeat(word.length));
//     }
//     console.log(string);
// }


function getString (text, word) {
    let tokens = text.split(word);
    console.log(tokens.join('*'.repeat(word.length)));
}

