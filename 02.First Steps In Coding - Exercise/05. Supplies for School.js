function moneyNeed (input) {
    let penPackage = Number(input[0]),
        markerPackage = Number(input[1]),
        abstergentLtr = Number(input[2]),
        discountPercentage = Number (input[3]) / 100;
    
    let penPrice = 5.80,
        markerPrice = 7.20,
        abstergentLtrPrce = 1.20;

    let totalPrice = (penPackage*penPrice) + (markerPackage*markerPrice) + (abstergentLtr*abstergentLtrPrce);
    
    let totalSumMoneyNeed = totalPrice - (totalPrice * discountPercentage);

    console.log(totalSumMoneyNeed);

}

moneyNeed (["2","3","4","25"] );

// Цена на пакетите химикали => 2 * 5.80 = 11.60 лв. 

// Цена на пакетите маркери => 3 * 7.20 = 21.60 лв. 

// Цена на препарата => 4 * 1.20 = 4.80 лв. 

// Цена за всички материали => 11.60 + 21.60 + 4.80 = 38.00 лв. 

// 25% = 0.25 

// Цена с намаление = 38.00 – (38.00 * 0.25) = 28.50 лв. 