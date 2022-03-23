function getString(string, start, count) {
    let newString = string.substring(start, start + count);
    console.log(newString);
}

getString('ASentence', 1, 8);