function checkPrices(input) {

    let product = input[0],
        city = input[1],
        count = Number(input[2]);

    if (city === "Sofia") {

        if (product === "coffee") {
            product = 0.50;
        } else if (product === "water") {
            product = 0.80;
        } else if (product === "beer") {
            product = 1.20;
        } else if (product === "sweets") {
            product = 1.45;
        } else if (product === "peanuts") {
            product = 1.60;
        }

    }

    if (city === "Plovdiv") {

        if (product === "coffee") {
            product = 0.40;
        } else if (product === "water") {
            product = 0.70;
        } else if (product === "beer") {
            product = 1.15;
        } else if (product === "sweets") {
            product = 1.30;
        } else if (product === "peanuts") {
            product = 1.50;
        }

    }

    if (city === "Varna") {

        if (product === "coffee") {
            product = 0.45;
        } else if (product === "water") {
            product = 0.70;
        } else if (product === "beer") {
            product = 1.10;
        } else if (product === "sweets") {
            product = 1.35;
        } else if (product === "peanuts") {
            product = 1.55;
        }

    }

    console.log(product * count);


}

function checkPrices(input) {

    let product = input[0],
        city = input[1],
        count = Number(input[2]);

    if (city === "Sofia") {
        switch (product) {
            case "coffee":
                product = 0.50;

                break;
            case "water":
                product = 0.80;

                break;
            case "beer":
                product = 1.20;

                break;
            case "sweets":
                product = 1.45;

                break;
            case "peanuts":
                product = 1.60;

                break;

            default:
                break;
        }
    }

    if (city === "Plovdiv") {
        switch (product) {
            case "coffee":
                product = 0.40;

                break;
            case "water":
                product = 0.70;

                break;
            case "beer":
                product = 1.15;

                break;
            case "sweets":
                product = 1.30;

                break;
            case "peanuts":
                product = 1.50;

                break;

            default:
                break;
        }
    }

    if (city === "Varna") {
        switch (product) {
            case "coffee":
                product = 0.45;

                break;
            case "water":
                product = 0.70;

                break;
            case "beer":
                product = 1.10;

                break;
            case "sweets":
                product = 1.35;

                break;
            case "peanuts":
                product = 1.55;

                break;

            default:
                break;
        }
    }


    console.log(product * count);
}




checkPrices(["coffee",
    "Varna",
    "2"
]);