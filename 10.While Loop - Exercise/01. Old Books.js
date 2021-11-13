function checkName(input) {
    //създаваме променлива за името на любимата книга
    let favoriteBook = input[0];
    //създаваме брояч на индекса
    let index = 1;
    //създаваме променлива за името на книгите които ще ороверяваме
    let bookName = input[index];
    //създаваме брояч за книгите, които сме проверили
    let bookcount = 0;
    //създаваме цикъл за проверка на книгите и определяне на броят им
    while (index < input.length) {

        bookName = input[index];
        index++;
        //създаваме проверка за вярната книга и печатаме резултата
        if (favoriteBook === bookName) {
            console.log(`You checked ${bookcount} books and found it.`);
            break;
        } else if (bookName === 'No More Books') {
            console.log(`The book you search is not here!`);
            console.log(`You checked ${bookcount} books.`);

        }
        bookcount++;
    }


}
checkName(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"]);