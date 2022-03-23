getString('A fuck sentence with some words', 'fuck');


function getString(string, word) {

    function repeat(input) {
        let newWord = '*';
        for (let i = 0; i <input.length ; i++) {
            newWord += '*';
        }
        return newWord;
    }

        let newString = string.replace(word, repeat(word));
        console.log(newString);

}