// function getNum(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

//     //брояч на счупени предмети по време на битка
//     let helmetCount = 0,
//         swordCount = 0,
//         shieldCount = 0;

//     //променливи за броят счупени предмети
//     let helmetBrokenCount = 0,
//         swordBrokenCount = 0,
//         shieldBrokenCount = 0,
//         armorBrokenCount = 0;

//     //цикъл за проверка на счупените предмети
//     for (let index = 1; index < lostFights; index++) {

//         helmetCount++;
//         swordCount++;

//         if (helmetCount % 2 === 0) {
//             helmetBrokenCount++;
//             helmetCount = 0;
//         }

//         if (swordCount % 3 === 0) {
//             swordBrokenCount++;
//             swordCount = 0;
//         }

//         if (helmetCount === 0 && swordCount === 0) {
//             shieldBrokenCount++;
//             shieldCount++;
//         }

//         if (shieldCount === 2) {
//             armorBrokenCount++;
//             shieldCount = 0;
//         }

//     }

//     //суми на отделните предмети
//     let helmetPriceSum = helmetBrokenCount * helmetPrice,
//         swordPriceSum = swordBrokenCount * swordPrice,
//         shieldPriceSum = shieldBrokenCount * shieldPrice,
//         armorPriceSum = armorBrokenCount * armorPrice;

//     //обща сума
//     let totalSum = helmetPriceSum + swordPriceSum + shieldPriceSum + armorPriceSum;

//     //печатане на резултат
//     console.log(`Gladiator expenses: ${totalSum.toFixed(2)} aureus`);

// }



function solve(lostFightsCount, helmetPrice, swordPrice, shieldtPrice, armorPrice) {

    let shieldCount = 0;
    let neededMoney = 0;

    for (let i = 1; i <= lostFightsCount; i++) {
        if (i % 2 === 0) {
            neededMoney += +helmetPrice;
        }
        if (i % 3 === 0) {
            neededMoney += +swordPrice;
        }
        if (i % 2 === 0 && i % 3 === 0) {
            neededMoney += +shieldtPrice;
            shieldCount++;
        }
        if (shieldCount % 2 === 0 && shieldCount > 0) {
            neededMoney += +armorPrice;
            shieldCount = 0;
        }
    }
    console.log(`Gladiator expenses: ${neededMoney.toFixed(2)} aureus`);
}


solve(7, 2, 3, 4, 5);
solve(23, 12.50, 21.50, 40, 200);