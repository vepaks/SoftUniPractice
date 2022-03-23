function getStringName(arr) {

    let garage = new Set();

    for (let arrElement of arr) {
        let tokens = arrElement.split('. ');
        let element = tokens[0].split(', ');

        for (let elementElement of element) {
            let token = elementElement.split(' - ');
            for (let string of token) {
                let tokensOfString = string.split(': ');
                if (tokensOfString.length <= 1) {
                    if (garage.has(tokensOfString) === false) {
                        garage.add(tokensOfString);

                    }
                }
            }

        }

    }
console.log(garage);
}

getStringName(['1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);