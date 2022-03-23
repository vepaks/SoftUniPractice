getMinerResources([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);



function getMinerResources(arr) {

    let resource = {};

    for (let i = 0; i < arr.length; i++) {
        let name = arr[i];
        i++;
        let qnt = Number(arr[i]);

        if (resource.hasOwnProperty(name) === false) {
            resource[name] = qnt;
        } else {
            resource[name] += qnt;
        }
    }
    for (let resourceKey in resource) {
        console.log(`${resourceKey} -> ${resource[resourceKey]}`);

    }
}

