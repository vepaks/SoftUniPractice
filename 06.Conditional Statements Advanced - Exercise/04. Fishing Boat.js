function checkBudget(input) {
    let budget = Number(input[0]),
        season = input[1],
        fishermansCount = Number(input[2]),
        boatPrice = 0;

    // проверявам сезона и определям цена
    switch (season) {
        case 'Spring':
            boatPrice = 3000;
            break;
        case 'Summer':
            boatPrice = 4200;
            break;
        case 'Autumn':
            boatPrice = 4200;
            break;
        case 'Winter':
            boatPrice = 2600;
            break;

        default:
            break;
    }
    
    // проверявам броя на хората и определям отстъпката
    if (fishermansCount <= 6) {
        boatPrice *= 0.90;
    } else if (fishermansCount >= 7 && fishermansCount <= 11) {
        boatPrice *= 0.85;
    } else if (fishermansCount > 12) {
        boatPrice *= 0.75;
    }
    
    // проверявам четен/нечетен и сезона "Есен" и слагам допълнителна отстъпка
    if (fishermansCount % 2 === 0 && season !== 'Autumn') {
        boatPrice *= 0.95;
    }

    // печатам резултат (при проверка на бюджет не забравяме '=')
    if (boatPrice <= budget) {
        console.log (`Yes! You have ${(budget - boatPrice).toFixed(2)} leva left.`);
    } else if ( boatPrice > budget ) {
        console.log (`Not enough money! You need ${(boatPrice - budget).toFixed(2)} leva.`);
    }

}

checkBudget(["3600",
"Autumn",
"6"]);