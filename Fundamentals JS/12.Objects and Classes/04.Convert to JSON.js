function convert(name, lastName, hairColor) {
    let obj = {
        name: name,
        lastName: lastName,
        hairColor: hairColor
    };

    let arr = JSON.stringify(obj);
    console.log(arr);
}

convert('George', 'Jones', 'Brown');