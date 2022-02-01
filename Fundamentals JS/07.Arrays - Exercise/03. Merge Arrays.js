function getArr(arrOne, arrTwo) {

    let arrThree = [];
    let count = 0;

    arrOne.forEach(element => {

        if (count % 2 === 0) {
            arrThree.push(Number(element) + Number(arrTwo[count]));
        } else {
            arrThree.push(`${element}${arrTwo[count]}`);
        }
        count += 1;
    });

    console.log(arrThree.join (' - '));

}

getArr(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']);