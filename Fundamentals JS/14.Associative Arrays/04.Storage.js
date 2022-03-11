// function getString(arr) {
//
//     let map = new Map();
//
//     for (let arrElement of arr) {
//         let [product, qty] = arrElement.split(' ');
//         qty = Number(qty);
//
//         if (map.has(product)) {
//             let curr = map.get(product);
//             map.set(product, qty + curr);
//         } else {
//             map.set(product, qty);
//         }
//     }
//     console.log(map);
// }

function getString(arr) {

    let catalog = {};

    for (let arrElement of arr) {

        let [product, qry] = arrElement.split(' ');
        qry = Number(qry);

        if (catalog.hasOwnProperty(product)) {
            let cur = Number(catalog[product]);
            catalog[product] = qry + cur;
        } else {
            catalog[product] = qry;
        }
    }
    console.log(catalog);
}

getString(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40',
]);