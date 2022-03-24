getCode([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);
console.log('---');
getCode([
        'owyouh',
        'Move|2',
        'Move|3',
        'Insert|3|are',
        'Insert|9|?',
        'Decode',
    ]
);


function getCode(arr) {




}

//
// function getCode(arr) {
//
//     let word = arr.shift().split('');
//
//     for (let arrElement of arr) {
//
//         let tokens = arrElement.split('|');
//         let command = tokens.shift();
//
//
//         switch (command) {
//             case 'ChangeAll':
//                 for (let i = 0; i < word.length; i++) {
//                     if (word[i] === tokens[0]) {
//                         word[i] = tokens[1];
//                     }
//                 }
//                 break;
//             case 'Insert':
//                 word.splice(tokens[0], 0, tokens[1]);
//                 break;
//             case 'Move':
//                 for (let i = 0; i < tokens[0]; i++) {
//                     let token = word.shift();
//                     word.push(token);
//                 }
//                 break;
//             default:
//                 break;
//         }
//         if (arrElement === 'Decode') {
//             break;
//         }
//     }
//
//     console.log(`The decrypted message is: ${word.join('')}`);
//
// }