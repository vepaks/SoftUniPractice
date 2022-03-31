function getWord(words, string) {
    words = words.split(', ');
    for (let word of words) {
        string = string.replace('*'.repeat(word.length), word);
    }
    console.log(string);
}
getWord('great', 'softuni is ***** place for learning new programming languages');
getWord('great, learning',
    'softuni is ***** place for ******** new programming languages')