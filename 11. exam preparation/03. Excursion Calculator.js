function checkNum(input) {
    let peoples = Number(input[0]),
        season = input[1];

    let sum = 0;

    switch (season) {

        case 'spring':
            if (peoples <= 5) {
                sum = peoples * 50;
            } else if (peoples > 5) {
                sum = peoples * 48;
            }

            sum = sum * 0.75;
            break;
        case 'summer':
            if (peoples <= 5) {
                sum = peoples * 48.50;
            } else if (peoples > 5) {
                sum = peoples * 45;
            }
            break;
        case 'autumn':
            if (peoples <= 5) {
                sum = peoples * 60;
            } else if (peoples > 5) {
                sum = peoples * 49.50;
            }
            break;
        case 'winter':
            if (peoples <= 5) {
                sum = peoples * 86;
            } else if (peoples > 5) {
                sum = peoples * 85;
            }
            sum = sum + (sum * 0.08);
            break;
    }

    console.log(sum.toFixed(2));

}

checkNum(["15",
"autumn"]);