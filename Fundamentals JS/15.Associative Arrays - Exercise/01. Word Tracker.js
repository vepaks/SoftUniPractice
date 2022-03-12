getString([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);

function getString(arr) {
    //раздекяме думите, които ще проверяваме
    const firstWords = arr.shift();
    const checkWords = firstWords.split(' ');
    const words = {};

    //създваме обект за думите, които ще проверяваме
    for (const word of checkWords) {
        words[word] = [];
    }

    //ако думите, които проверяваме присъстват в обекта добавяме брояч
    for (const word of arr) {
        if (words.hasOwnProperty(word)) {
            for (const key in words) {
                if (key === word) {
                    words[key].push(1);
                }
            }
        }
    }

    //сумираме брояча в обекта
    for (const key in words) {

        let sum = 0;
        for (const count of words[key]) {
            sum += count;
        }
        words[key] = sum;
    }

    //сортираме обекта по броя на думите
    let sort = Object.entries(words);
    sort.sort(sorting);

    function sorting(a, b) {
        return b[1] - a[1];
    }

    //печатаме резултата
    for (const [word, count] of sort) {
        console.log(`${word} - ${count}`);
    }

}