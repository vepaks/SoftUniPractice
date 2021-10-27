function checkincome(input) {

    let premiereDayTicketPrice = 12.00,
        normalDayTicketPrice = 7.50,
        dicountTicketPrice = 5.00;

    let cinemaDay = input[0],
        cinemaEd = Number(input[1]),
        cinemaColumn = Number(input[2]);

    switch (cinemaDay) {
        case "Premiere":
            console.log(`${(premiereDayTicketPrice*(cinemaEd*cinemaColumn)).toFixed(2)} leva`);
            break;
        case "Normal":
            console.log(`${(normalDayTicketPrice*(cinemaEd*cinemaColumn)).toFixed(2)} leva`);
            break;
        case "Discount":
            console.log(`${(dicountTicketPrice*(cinemaEd*cinemaColumn)).toFixed(2)} leva`);
            break;
        default:
            break;
    }

} 


checkincome(["Premiere",
    "94",
    "17"])
;
