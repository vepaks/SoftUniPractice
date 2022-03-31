checkString ('Nowadays everyone uses # to tag a #special word in #socialMedia');

function checkString(string) {
    let tokens = string.split(' ');
    for (let token of tokens) if (token.startsWith('#') && token.length > 1) {
        token = token.substring(1)
        if (token.match(/^([а-яё][А-ЯЁ]+|[a-z][A-Z]+)$/i)) {
            console.log(token);
        }
    }
}