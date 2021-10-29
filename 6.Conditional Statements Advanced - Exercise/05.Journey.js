function checkBudget(input) {
    let budget = Number(input[0]),
        season = input[1];

    let destination;
    let typeOfRest;
    let spendMoney;

    // проверяваме бюджета и даваме значение на дестинацията.

    if (budget <= 100) {
        destination = 'Bulgaria';

        // проверяваме сезона и даване стойност на похарчената сума
        switch (season) {
            case 'summer':
                spendMoney = budget * 0.30;
                break;
            case 'winter':
                spendMoney = budget * 0.70;
                break;
            default:
                break;
        }
    } else if (budget > 100 && budget <= 1000) {
        destination = 'Balkans';

        // проверяваме сезона и даване стойност на похарчената сума
        switch (season) {
            case 'summer':
                spendMoney = budget * 0.40;
                break;
            case 'winter':
                spendMoney = budget * 0.80;
                break;
            default:
                break;
        }
    } else if (budget > 1000) {
        destination = 'Europe';
        spendMoney = budget * 0.90;
    }
    // проверяваме сезона и определяме типа почивка
    if (season === 'summer') {
        typeOfRest = 'Camp';
    } else if (season === 'winter') {
        typeOfRest = 'Hotel';
    }
    
    if (destination === 'Europe') {
        typeOfRest = 'Hotel';
    }

    // печатаме резултат

    console.log(`Somewhere in ${destination}`);
    console.log(`${typeOfRest} - ${(spendMoney).toFixed(2)}`);
}
checkBudget(["1500", "summer"]);