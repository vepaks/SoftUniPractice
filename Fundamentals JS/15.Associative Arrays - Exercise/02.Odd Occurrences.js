function getString(string) {

    let checkElement = string.toLowerCase().split(' ');

    let word = {};

    for (const token of checkElement) {
        let count = 0;
        for (let index = 0; index < checkElement.length; index++) {
            let currElement = checkElement[index];

            if (currElement === token) {
                count++;
            }

        }

        if (count % 2 === 1) {
            word[token] = token;
        }

        count = 0;
    }

    let sort = Object.entries(word);
    sort.sort(sorting);

    function sorting(a, b) {
        return a[0].localeCompare(b[0]);
    }

    console.log(sort.join(' '));

}

getString('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');