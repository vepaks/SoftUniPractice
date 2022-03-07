function getString(available, delivered) {

    let storedProducts = {};
    let store;

    for (let i = 0; i < available.length; i += 2) {
        let currProduct = available[i];
        storedProducts[currProduct] = Number(available[i + 1]);
    }

    for (let i = 0; i < delivered.length; i += 2) {
        let currProduct = delivered[i];
        if (!storedProducts.hasOwnProperty(currProduct)) {
            storedProducts[currProduct] = 0;
        }
        storedProducts[currProduct] += Number(delivered[i + 1]);

    }

    for (let storedProductsKey in storedProducts) {
        console.log(`${storedProductsKey} -> ${storedProducts[storedProductsKey]}`);
    }
}

// getString([
//         'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
//     ],
//     [
//         'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
//     ]);

getString([
        'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]);