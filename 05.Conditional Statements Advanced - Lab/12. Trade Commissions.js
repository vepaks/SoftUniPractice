function checkComision(input) {
    let city = input[0],
        sales = Number(input[1]);

    let commision = 0;

    if (city === "Sofia" || city === 'Varna' || city === 'Plovdiv') {} else {
        city = false;
    }

    if (sales >= 0) {} else {
        sales = false;

    }


    if (city !== false && sales !== false) {

        switch (city) {
            case "Sofia":
                if (sales >= 0 && sales <= 500) {
                    commision = 0.05;
                } else if (sales > 500 && sales <= 1000) {
                    commision = 0.07;
                } else if (sales > 1000 && sales <= 10000) {
                    commision = 0.08;
                } else if (sales > 10000) {
                    commision = 0.12;
                } else {
                    console.log('error');
                }
                break;
            case "Varna":
                if (sales >= 0 && sales <= 500) {
                    commision = 0.045;
                } else if (sales > 500 && sales <= 1000) {
                    commision = 0.075;
                } else if (sales > 1000 && sales <= 10000) {
                    commision = 0.10;
                } else if (sales > 10000) {
                    commision = 0.13;
                } else {
                    console.log('error');
                }
                break;
            case "Plovdiv":
                if (sales >= 0 && sales <= 500) {
                    commision = 0.055;
                } else if (sales > 500 && sales <= 1000) {
                    commision = 0.08;
                } else if (sales > 1000 && sales <= 10000) {
                    commision = 0.12;
                } else if (sales > 10000) {
                    commision = 0.145;
                } else {
                    console.log('error');
                }
                break;
            default:

                break;
        }
        console.log((sales * commision).toFixed(2));
    } else {
        console.log('error');
    }

}

checkComision(["kasp",
    "3874.50"
]);