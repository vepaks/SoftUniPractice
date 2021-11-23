function checkNum(input) {
    let sendKilo = Number(input[0]),
        type = input[1],
        kilometres = Number(input[2]);

    let pricePerKilo = 0;
    let expressPrice = 0;
    let finalExpresSum = 0;

    let sumExpress = 0;

    if (sendKilo < 1) {
        pricePerKilo = 0.03;
    } else if (sendKilo >= 1 && sendKilo < 10) {
        pricePerKilo = 0.05;
    } else if (sendKilo >= 10 && sendKilo < 40) {
        pricePerKilo = 0.10;
    } else if (sendKilo >= 40 && sendKilo < 90) {
        pricePerKilo = 0.15;
    } else if (sendKilo >= 90 && sendKilo < 150) {
        pricePerKilo = 0.20;
    }

    if (type === 'express') {
        if (sendKilo < 1) {
            expressPrice = 0.03 * 0.80;
            sumExpress = sendKilo * expressPrice;
            finalExpresSum = kilometres * sumExpress;
        } else if (sendKilo >= 1 && sendKilo < 10) {
            expressPrice = 0.05 * 0.40;
            sumExpress = sendKilo * expressPrice;
            finalExpresSum = kilometres * sumExpress;
        } else if (sendKilo >= 10 && sendKilo < 40) {
            expressPrice = 0.10 * 0.05;
            sumExpress = sendKilo * expressPrice;
            finalExpresSum = kilometres * sumExpress;
        } else if (sendKilo >= 40 && sendKilo < 90) {
            expressPrice = 0.15 * 0.02;
            sumExpress = sendKilo * expressPrice;
            finalExpresSum = kilometres * sumExpress;
        } else if (sendKilo >= 90 && sendKilo < 150) {
            expressPrice = 0.20 * 0.01;
            sumExpress = sendKilo * expressPrice;
            finalExpresSum = kilometres * sumExpress;
        }
    }




    let finalSum = kilometres * pricePerKilo;
    let finalFinalSum = finalSum + finalExpresSum;


    console.log(`The delivery of your shipment with weight of ${sendKilo.toFixed(3)} kg. would cost ${finalFinalSum.toFixed(2)} lv.`);


}

checkNum(["20",
    "standart",
    "349"
]);