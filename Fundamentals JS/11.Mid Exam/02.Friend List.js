function friendList(input) {

    let list = input.shift().split(', ');
    let blacklistNames = 0;
    let errorCount = 0;

    let blacklistArr = [];
    let errorArr = [];

    for (let index = 0; index < list.length; index++) {


        let currArr = input[index].split(' ');

        if (currArr[0] === 'Blacklist') {

            let isInclude = list.includes(currArr[1]);
            if (!isInclude) {
                console.log(`${currArr[1]} was not found.`);
                continue;
            }
            console.log(`${currArr[1]} was blacklisted.`);

            let newName = 'Blacklisted';
            list[index] = newName;

            blacklistArr.push(currArr[1]);
            blacklistNames++;

        } else if (currArr[0] === 'Error') {

            let errorIndex = currArr[1];
            let isInclude = blacklistArr.includes(list[errorIndex]);
            let includesErr = errorArr.includes(list[errorIndex]);

            if (errorIndex < list.length && errorIndex > 0 && !isInclude && !includesErr) {
                console.log(`${list[errorIndex]} was lost due to an error.`);
                let newName = 'Lost';
                list[errorIndex] = newName;
                errorArr.push(list[errorIndex]);
                errorCount++;
            }
        } else if (currArr[0] === 'Change') {
            let changeIndex = currArr[1];
            let oldName = list[changeIndex];
            let newName = currArr[2];

            if (changeIndex < list.length && changeIndex >= 0) {
                list[changeIndex] = newName;
                console.log(`${oldName} changed his username to ${newName}.`);
            }
        } else if (currArr[0] === 'Report') {


            console.log(`Blacklisted names: ${blacklistNames}`);
            console.log(`Lost names: ${errorCount}`);
            console.log(list.join(' '));
            break;
        }

    }



}

friendList(["Mike, John, Eddie",
    "Blacklist Mike",
    "Error -1",
    "Report"
]);

friendList(["Mike, John, Eddie, William",
    "Error 3",
    "Error 3",
    "Change 0 Mike123",
    "Report"
]);

friendList(["Mike, John, Eddie, William",
    "Blacklist Maya",
    "Error 1",
    "Change 4 George",
    "Report"
]);