function checkPrice(input) {
    let month = input[0];
    let night = +input[1];
    let stidioPrice = 0;
    let apartmentPrice = 0;

    switch (month) {
        case 'May':
        case 'October':
            stidioPrice = 50;
            apartmentPrice = 65;
            break;
        case 'June':
        case 'September':
            stidioPrice = 75.20;
            apartmentPrice = 68.70;
            break;
        case 'July':
        case 'August':
            stidioPrice = 76;
            apartmentPrice = 77;
            break;
        default:
            break;
    }

    if (night > 14 && ( month === 'May' || month === 'October')) {
        stidioPrice *= 0.70;
    } else if (night > 7 && ( month === 'May' || month === 'October')) {
        stidioPrice *= 0.95;
    } else if (night > 14 && ( month === 'June' || month === 'September')) {
        stidioPrice *= 0.80;
    } 
    if ( night > 14) {
        apartmentPrice *= 0.90;         
    }

    console.log(`Apartment: ${(apartmentPrice*night).toFixed(2)} lv.`);
    console.log(`Studio: ${(stidioPrice*night).toFixed(2)} lv.`);
}

checkPrice (['June','14']);