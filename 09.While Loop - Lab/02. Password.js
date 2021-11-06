function checkPass(input) {
    let index = 0;
    let user = input[index];
    index++;
    let realPass = input[index];
    index++;
    let inputPass = input[index];
    index++;



    while (realPass !== inputPass) {

        inputPass = input[index];
        index++;
    }

    console.log(`Welcome ${user}!`);

}


// function checkPass(input) {
//     console.log(`Welcome ${input[0]}!`);
// }


checkPass(["Nakov",
    "1234",

    "Pass",
    'lakjdkajhdf',
    'lkasjdkla jsdadxcnc',
    '6546516465',
    "132dafaf sfg4",
    "1234"
]);