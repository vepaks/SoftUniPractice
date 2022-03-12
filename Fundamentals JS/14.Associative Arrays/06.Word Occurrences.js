function getString(arr) {

    let words = {};
    let wordCount = 1;
    for (const element of arr) {

        if (words.hasOwnProperty(element)) {
            words[element].push(wordCount);

        } else {
            words[element] = [];
            words[element].push(wordCount);
        }
    }

    for (const key in words) {

        let sum = 0;

        for (const count of words[key]) {
            sum += count;
        }

        words[key] = sum;
    }

    let sort = Object.entries(words);
    sort.sort(sorting);

    function sorting(a, b) {
        return b[1] - a[1];
    }

    for (const [word, count] of sort) {
        console.log(`${word} -> ${count} times`);
    }

}

getString(["Here", "is", "the",
    "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"
]);