function checkNum(input) {
    let index = [0];
    let comand = input[index];

    let adultCount = 0;
    let kids = 0;
    let toyPrice = 5;
    let pullover = 15;



    while (comand !== 'Christmas') {
        comand = Number(input[index]);

        if (comand <= 16) {
            kids++;
        }
        if (comand > 16) {
            adultCount++;
        }
        comand = input[index];
        index++;
    }

    let sumToys = toyPrice * kids;
    let sumPullover = pullover * adultCount;

    console.log(`Number of adults: ${adultCount}`);
    console.log(`Number of kids: ${kids}`);
    console.log(`Money for toys: ${sumToys}`);
    console.log(`Money for sweaters: ${sumPullover}`);

}
checkNum(["18",
    "20",
    "48",
    "45",
    "56",
    "37",
    "12",
    "14",
    "Christmas"
]);