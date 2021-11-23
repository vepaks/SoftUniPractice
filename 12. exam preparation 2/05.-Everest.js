function checkNum(input) {
    let index = 0;
    let comand = input[index];

    let counter = 1;

    let sum = 5364;

    while (comand !== 'END') {
        comand = input[index];
        
        if (counter === 5 || sum >= 8848) {
            break;
        }
        
        if (comand === 'Yes'){
            index++;
            comand = Number(input[index]);
            sum += comand;
            counter++;
        } else if (comand === 'No') {
            index++;
            comand = Number(input[index]);
            sum += comand;
        }
        index++;
        comand = input[index];
        
        
    }
    if (sum < 8848) {
            console.log('Failed!');
            console.log(`${sum}`);
    } else if (sum >= 8848) {
        console.log(`Goal reached for ${counter} days!`);
    }
}
checkNum(["Yes",
"1254",
"Yes",
"1402",
"No",
"250",
"Yes",
"635"]);