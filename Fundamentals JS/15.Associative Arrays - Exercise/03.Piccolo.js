getString(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);


getString(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'
]);

function getString(arr) {

    let garage = new Set();

    arr.forEach(element => {
        let [command, car] = element.split(', ');

        if (command === 'IN') {
            garage.add(car);
        } else if (command === 'OUT') {
            garage.delete(car);
        }
    });

    if (garage.size === 0) {
        console.log('Parking Lot is Empty');
    } else {
        let result = Array.from(garage);
        result.sort();
        for (const token of result) {
            console.log(token);
        }
    }
}
