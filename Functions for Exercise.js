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