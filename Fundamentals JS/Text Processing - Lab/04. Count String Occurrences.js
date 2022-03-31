// checkWord('softuni is great place for learning new programming languages', 'softuni');
// checkWord('This is a word and it also is a sentence', 'is');

// function checkWord(string, checkWord) {
//     let count = 0;
//     let newString = string.split(' ');
//     for (let newStringElement of newString) {
//         if (newStringElement === checkWord) {
//             count++;
//         }
//     }
//     console.log(count);
// }

solve('softuni is great place for learning new programming languages', 'softuni');
solve('This is a word and it also is a sentence', 'is');

function solve(string, word) {
    const tokens = string.split(' '),
        count = tokens.filter(x => x === word);
    console.log(count.length);
}