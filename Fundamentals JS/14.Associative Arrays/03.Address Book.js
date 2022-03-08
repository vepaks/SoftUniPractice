function getString(arr) {

    let addressBook = {};

    for (let arrElement of arr) {
        let [name, address] = arrElement.split(':');

        addressBook[name] = address;


    }

    let sort = Object.entries(addressBook);
    sort.sort(sorting);

    function sorting(a, b) {
        return a[0].localeCompare(b[0]);
    }


    for (let [name, address] of sort) {
        console.log(name, '->', address);
    }

}


getString(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
]);

// getString(['Bob:Huxley Rd',
//     'John:Milwaukee Crossing',
//     'Peter:Fordem Ave',
//     'Bob:Redwing Ave',
//     'George:Mesta Crossing',
//     'Ted:Gateway Way',
//     'Bill:Gateway Way',
//     'John:Grover Rd',
//     'Peter:Huxley Rd',
//     'Jeff:Gateway Way',
//     'Jeff:Huxley Rd'
// ]);