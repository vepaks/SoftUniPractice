function checkSum(peoples, group, day) {

    let price = 0;
    let totalSum = 0;

    switch (group) {
        case 'Students':
            switch (day) {
                case 'Friday':
                    price = 8.45;
                    totalSum = price * peoples;
                    if (peoples >= 30) {
                        totalSum *= 0.85;
                    }
                    break;

                case 'Saturday':
                    price = 9.80;
                    totalSum = price * peoples;
                    if (peoples >= 30) {
                        totalSum *= 0.85;
                    }
                    break;

                case 'Sunday':
                    price = 10.46;
                    totalSum = price * peoples;
                    if (peoples >= 30) {
                        totalSum *= 0.85;
                    }
                    break;

                default:
                    break;
            }

            break;

        case 'Business':
            switch (day) {
                case 'Friday':
                    if (peoples >= 100) {
                        peoples -= 10;
                    }
                    price = 10.90;
                    totalSum = price * peoples;

                    break;

                case 'Saturday':
                    if (peoples >= 100) {
                        peoples -= 10;
                    }
                    price = 15.60;
                    totalSum = price * peoples;

                    break;

                case 'Sunday':
                    if (peoples >= 100) {
                        peoples -= 10;
                    }
                    price = 16;
                    totalSum = price * peoples;

                    break;

                default:
                    break;
            }

            break;

        case 'Regular':
            switch (day) {
                case 'Friday':
                    price = 15;
                    totalSum = price * peoples;
                    if (peoples >= 10 && peoples <=20) {
                        totalSum *= 0.95;
                    }
                    break;

                case 'Saturday':
                    price = 20;
                    totalSum = price * peoples;
                    if (peoples >= 10 && peoples <=20) {
                        totalSum *= 0.95;
                    }
                    break;

                case 'Sunday':
                    price = 22.50;
                    totalSum = price * peoples;
                    if (peoples >= 10 && peoples <=20) {
                        totalSum *= 0.95;
                    }
                    break;

                default:
                    break;
            }

            break;


        default:
            break;
    }

    console.log(`Total price: ${totalSum.toFixed(2)}`);

}

checkSum(30,
    "Students",
    "Sunday");

checkSum(40,
    "Regular",
    "Saturday");
