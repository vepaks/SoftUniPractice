function getString(arr) {

    for (let arrElement of arr) {

        let number = arrElement.length;

        let obj = {
            name: arrElement,
            personalNumber: number,
        };

        console.log(`Name: ${obj.name} -- Personal Number: ${obj.personalNumber}`);

    }
}

getString([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);