getString('aaaaabbbbbcdddeeeedssaa');

function getString(string) {
    let words = {
        'checkChar': []
    };

    let token = string.split('');
    for (let i = 0; i <token.length ; i++) {
        if (token[i] !== token[i+1]) {
            words.checkChar.push(token[i]);
        }
    }
    console.log(words.checkChar.join(''));
}
