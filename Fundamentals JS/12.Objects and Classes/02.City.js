function getString(obj) {

    for (let objKey in obj) {
        console.log(`${objKey} -> ${obj[objKey]}`);
    }

}

getString({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});

getString({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
});