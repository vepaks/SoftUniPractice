function getList(arr) {

    let newArr = [];

    for (const element of arr) {
        let currArr = element.split(' ');
        let names = currArr[0];
        if (currArr.length === 3) {
            let isInclude = newArr.includes(names);
            if (isInclude) {
                console.log(`${names} is already in the list!`);
            } else {
                newArr.push(names);
            }
        } else {
            let indexOfPerson = newArr.indexOf(names);
            if (indexOfPerson !== -1) {
                newArr.splice(indexOfPerson, 1);
            } else {
                console.log(`${names} is not in the list!`);
            }
        }

    }

    console.log(newArr.join('\n'));

}


getList(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'
]);