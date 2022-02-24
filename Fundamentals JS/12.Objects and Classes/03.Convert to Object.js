function convert(string) {
    let person = JSON.parse(string);

    for (let personKey in person) {
        console.log(`${personKey}: ${person[personKey]}`);
    }
}

convert('{"name": "George", "age": 40, "town": "Sofia"}');
convert('{"name": "Peter", "age": 35, "town": "Plovdiv"}');