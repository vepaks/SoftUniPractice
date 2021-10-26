function checkBudget(input) {
    let flowers = input[0],
        flowersCount = Number(input[1]),
        budget = Number(input[2]);

    let singleFlowerPrice = 0;
    let shoppingSum = 0;

    switch (flowers) {
        case 'Roses':
            singleFlowerPrice = 5;
            shoppingSum = singleFlowerPrice * flowersCount;
            if (flowersCount > 80) {
                shoppingSum = shoppingSum * 0.90;
            }
            break;
        case 'Dahlias':
            singleFlowerPrice = 3.80;
            shoppingSum = singleFlowerPrice * flowersCount;
            if (flowersCount > 90) {
                shoppingSum = shoppingSum * 0.85;
            }
            break;
        case 'Tulips':
            singleFlowerPrice = 2.80;
            shoppingSum = singleFlowerPrice * flowersCount;
            if (flowersCount > 80) {
                shoppingSum = shoppingSum * 0.85;
            }
            break;
        case 'Narcissus':
            singleFlowerPrice = 3;
            shoppingSum = singleFlowerPrice * flowersCount;
            if (flowersCount < 120) {
                shoppingSum = shoppingSum * 1.15;
            }
            break;
        case 'Gladiolus':
            singleFlowerPrice = 2.50;
            shoppingSum = singleFlowerPrice * flowersCount;
            if (flowersCount < 80) {
                shoppingSum = shoppingSum * 1.20;
            }
            break;

        default:
            break;
    }

    if (budget >= shoppingSum) {
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowers} and ${(budget - shoppingSum).toFixed(2)} leva left.`);
    } else if (shoppingSum > budget) {
        console.log(`Not enough money, you need ${(shoppingSum - budget).toFixed(2)} leva more.`);
    }
}

// function checkBudget(input) {
//     let flowers = input[0],
//         flowersCount = Number(input[1]),
//         budget = Number(input[2]);

//     let rosesPrice = 5,
//         dahliasPrice = 3.80,
//         tulipsPrice = 2.80,
//         narcissusPrice = 3,
//         gladiolusPrice = 2.50;

//     let shoppingSum = 0;


// // Изведен if (излишно дълго решение) 
//     if (flowersCount > 80 && flowers === 'Roses') {
//         rosesPrice *= 0.90;
//         shoppingSum = rosesPrice * flowersCount;
//     }
//     if (flowersCount > 90 && flowers === 'Dahlias') {
//         dahliasPrice *= 0.85;
//         shoppingSum = dahliasPrice * flowersCount;
//     }
//     if (flowersCount > 80 && flowers === 'Tulips') {
//         tulipsPrice *= 0.85;
//         shoppingSum = tulipsPrice * flowersCount;
//     }
//     if (flowersCount < 120 && flowers === 'Narcissus') {
//         narcissusPrice *= 1.15;
//         shoppingSum = narcissusPrice * flowersCount;
//     }
//     if (flowersCount < 80 && flowers === 'Gladiolus') {
//         gladiolusPrice *= 1.20;
//         shoppingSum = gladiolusPrice * flowersCount;
//     }

//     switch (flowers) {
//         case 'Roses':
//             shoppingSum = rosesPrice * flowersCount;
//             break;
//         case 'Dahlias':
//             shoppingSum = dahliasPrice * flowersCount;
//             break;
//         case 'Tulips':
//             shoppingSum = tulipsPrice * flowersCount;
//             break;
//         case 'Narcissus':
//             shoppingSum = narcissusPrice * flowersCount;
//             break;
//         case 'Gladiolus':
//             shoppingSum = gladiolusPrice * flowersCount;
//             break;

//         default:
//             break;
//     }

//     if (budget >= shoppingSum) {
//         console.log(`Hey, you have a great garden with ${flowersCount} ${flowers} and ${(budget - shoppingSum).toFixed(2)} leva left.`);
//     } else if (shoppingSum > budget) {
//         console.log(`Not enough money, you need ${(shoppingSum - budget).toFixed(2)} leva more.`);
//     }
// }


checkBudget(["Narcissus",
"119",
"360"]);