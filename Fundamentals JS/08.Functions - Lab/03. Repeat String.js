function getString(string, repeat) {

    let newString = '';

    for (let i = 0; i < repeat; i++) {
        newString += string;
    }
    console.log(newString);

}

getString("abc", 3);
getString("String", 2);