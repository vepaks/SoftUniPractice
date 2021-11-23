function checkNum(input) {
    let peopleCount = Number(input[0]),
        nightCount = Number(input[1]),
        cardsCount = Number(input[2]),
        ticketCount = Number(input[3]);

    let sumPerPerson = peopleCount * nightCount;

    let sumCards = cardsCount * 1.60;

    let ticketSum = ticketCount * 6;

    let sumPerson = sumPerPerson + sumCards + ticketSum;
    
    let finalSum = sumPerson * peopleCount; 

    let finalFinalSum = finalSum + (finalSum * 0.25);

    console.log (finalFinalSum);
}

checkNum (["20",
"14",
"30",
"6"]);