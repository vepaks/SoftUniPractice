function getString(arr) {

    let addressName = {};

    for (let arrElement of arr) {
        let [name, address] = arrElement.split(' -> ');

        if (addressName.hasOwnProperty(name) === false) {
            addressName[name] = [];
        }
        if (addressName[name].includes(address) === false) {
            addressName[name].push(address);
        }
    }

    let sort = Object.entries(addressName);
    sort.sort(sorting);

    function sorting(a, b) {
        return a[0].localeCompare(b[0]);
    }

    for (let sortElement of sort) {
        console.log(sortElement[0]);
        for (let sortElementElementElement of sortElement[1]) {
            console.log(`-- ${sortElementElementElement}`);
        }
    }
}

getString([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);

getString([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);