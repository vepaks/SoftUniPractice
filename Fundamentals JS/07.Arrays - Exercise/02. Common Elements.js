function getString(arrOne, arrTwo) {

    arrOne.forEach(elementOne => {
        arrTwo.forEach(elementTwo => {
            if (elementOne === elementTwo) {
                console.log(elementOne);
            }
        });
    });

}

getString(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']);