function getString(arr) {

    for (let i = 0; i < arr.length; i++) {

        let newArr = arr[i].split(', ');

        for (let element of newArr) {

            let newArrElement = element.split(' | ');

            let town = newArrElement[0],
                latitude =  Number(newArrElement[1]).toFixed(2),
                longitude = Number(newArrElement[2]).toFixed(2);

            let obj = {
                town,
                latitude,
                longitude,
            };
            console.log(obj);
        }
    }

}

getString(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);

getString(['Plovdiv | 136.45 | 812.575']);