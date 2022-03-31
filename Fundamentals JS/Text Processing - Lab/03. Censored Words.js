function getString(text, word) {
    let tokens = text.split(word);
    console.log(tokens.join('*'.repeat(word.length)));
}

getString('A small sentence with some words', 'small');