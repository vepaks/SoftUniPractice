//смяна на елементи в низ
changeChar('zzHe', 'z', 'l');

function changeChar(string, match, text) {
    let tokens = string.split(match);
    return tokens.join(text);
}

//вмъкване на текст в низ
getString('llHe', 2, 'o');

function getString(string, index, text) {
    let start = string.substring(0, index);
    let end = string.substring(index);
    return start + text + end;
}

//манипулация с елементи на низ
moveChar('lloHe', 3);

function moveChar(string, num) {
    let start = string.substring(0, num);
    let end = string.substring(num);
    return end + start;
}

//смяна на букви или думи в низ
changeCharInString('A small sentence with some words', 'small');

function changeCharInString(text, word) {
    let tokens = text.split(word);
    return tokens.join('*'.repeat(word.length));
}


//подмяна на звездички с дума

getWord('great', 'softuni is ***** place for learning new programming languages');

function getWord(words, string) {
    words = words.split(', ');
    for (const word of words) {
        string = string.replace('*'.repeat(word.length), words);
    }
    return string;
}