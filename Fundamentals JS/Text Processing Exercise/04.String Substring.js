getString('javascript',
    'JavaScript is the best programming language');
getString('python',
    'JavaScript is the best programming language');

function getString(word, string) {
    let token = string.split(' ');
    let words = {};
    for (let tokenElement of token) {
        tokenElement = tokenElement.toLowerCase();
        if (tokenElement === word) {
            words[tokenElement] = tokenElement;
        }
    }
    if (words.hasOwnProperty(word)) {
    for (let wordsKey in words) {
            console.log(words[wordsKey]);
        }
    } else {
        console.log(`${word} not found!`);
    }
}


let


