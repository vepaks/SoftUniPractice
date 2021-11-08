function checkFruitPrice(input) {
    let fruit = input[0],
        dayOfWeek = input[1],
        fruitCount = Number(input[2]),
        fruitPrice = 0,
        caseFruit = input[0],
        caseDayOfWeek = input[1];

    if (dayOfWeek === "Monday" || dayOfWeek === "Tuesday" || dayOfWeek === "Wednesday" ||
        dayOfWeek === "Thursday" || dayOfWeek === "Friday" || dayOfWeek === "Saturday" ||
        dayOfWeek === "Sunday") {
        dayOfWeek = true;
    }
    if (fruit === "banana" || fruit === "apple" || fruit === "orange" || fruit === "grapefruit" ||
        fruit === "kiwi" || fruit === "pineapple" || fruit === "grapes") {
        fruit = true;
    }

    if (dayOfWeek === true && fruit === true) {
        if (caseDayOfWeek === "Saturday" || caseDayOfWeek === "Sunday") {
            switch (caseFruit) {
                case "banana":
                    fruitPrice = 2.70;
                    break;
                case "apple":
                    fruitPrice = 1.25;
                    break;
                case "orange":
                    fruitPrice = 0.90;
                    break;
                case "grapefruit":
                    fruitPrice = 1.60;
                    break;
                case "kiwi":
                    fruitPrice = 3.00;
                    break;
                case "pineapple":
                    fruitPrice = 5.60;
                    break;
                case "grapes":
                    fruitPrice = 4.20;
                    break;
                default:
                    break;
            }
        } else {
            switch (caseFruit) {
                case "banana":
                    fruitPrice = 2.50;
                    break;
                case "apple":
                    fruitPrice = 1.20;
                    break;
                case "orange":
                    fruitPrice = 0.85;
                    break;
                case "grapefruit":
                    fruitPrice = 1.45;
                    break;
                case "kiwi":
                    fruitPrice = 2.70;
                    break;
                case "pineapple":
                    fruitPrice = 5.50;
                    break;
                case "grapes":
                    fruitPrice = 3.85;
                    break;
                default:
                    break;
            }
        }
        console.log((fruitPrice * fruitCount).toFixed(2));
    } else {
        console.log("error");
    }

}
checkFruitPrice(["kiwi",
    "Sunday",
    "3.00"
]);