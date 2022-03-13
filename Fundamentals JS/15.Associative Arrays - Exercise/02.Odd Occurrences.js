function getString(string) {

    let words = {};
    let newArr = [];
    let checkElement = string.toLowerCase().split(' ');

    for (let word of checkElement) {

        if (words.hasOwnProperty(word)) {
            words[word]++;
        } else {
            words[word] = 1;
        }
    }

    for (const wordsKey in words) {

        if (words[wordsKey] % 2 === 1) {
            newArr.push([wordsKey]);
        }
    }

    console.log(newArr.join(' '));

}

getString('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');