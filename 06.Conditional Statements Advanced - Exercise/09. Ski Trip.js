function calcNum(input) {

    let daysCount = Number(input[0]),
        hotelRoomType = input[1],
        rating = input[2],

        singlePrice, // цена за една нощ
        nightsCount = daysCount - 1, //нощ = дни - 1
        tripSum; // сума за цялата почивка

    //проверяваме вида на стаята и определяме цена на нощувка
    switch (hotelRoomType) {
        case 'room for one person':
            singlePrice = 18.00;
            // определяме сума за цялата почивка
            tripSum = nightsCount * singlePrice;
            //проверяваме оценката и добавяме/изваждаме от съмата за почивка
            if (rating === 'positive') {
                tripSum = tripSum + (tripSum * 0.25);
            } else if (rating === 'negative') {
                tripSum = tripSum - (tripSum * 0.10);
            }

            break;
        case 'apartment':
            singlePrice = 25.00;
            // определяме сума за цялата почивка
            tripSum = nightsCount * singlePrice;
            //проверяваме дните за почивка и определяме намаление
            if (daysCount < 10) {
                tripSum *= 0.70;
            } else if (daysCount > 10 && daysCount < 15) {
                tripSum *= 0.65;
            } else if (daysCount > 15) {
                tripSum *= 0.50;
            }
            //проверяваме оценката и добавяме/изваждаме от съмата за почивк
            if (rating === 'positive') {
                tripSum = tripSum + (tripSum * 0.25);
            } else if (rating === 'negative') {
                tripSum = tripSum - (tripSum * 0.10);
            }
            break;
        case 'president apartment':
            singlePrice = 35.00;
            tripSum = nightsCount * singlePrice;
            if (daysCount < 10) {
                tripSum *= 0.90;
            } else if (daysCount > 10 && daysCount < 15) {
                tripSum *= 0.85;
            } else if (daysCount > 15) {
                tripSum *= 0.80;
            }
            if (rating === 'positive') {
                tripSum = tripSum + (tripSum * 0.25);
            } else if (rating === 'negative') {
                tripSum = tripSum - (tripSum * 0.10);
            }
            break;
        default:
            break;
    }

    //печатаме резултат
    console.log(tripSum.toFixed(2));

}

calcNum(["2",
    "apartment",
    "positive"
]);