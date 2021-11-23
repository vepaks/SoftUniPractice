function checkNum(input) {
    let catCount = Number(input[0]);
    let index = 1;
    let catGrams = Number(input[index]);


    let grout1 = 0;
    let grout2 = 0;
    let grout3 = 0;

    let sumGrams = 0;

    for (let i = 0; i < catCount; i++) {
        
        catGrams = Number(input[index]);

        if (catGrams >= 100 && catGrams < 200) {
            grout1++;
            sumGrams += catGrams;
        } else if (catGrams >= 200 && catGrams < 300) {
            grout2++;
            sumGrams += catGrams;
        } else if (catGrams >= 300 && catGrams < 400) {
            grout3++;
            sumGrams += catGrams;
        }
        index++;
    }

    sumGrams = sumGrams / 1000;
    let eathPrice = sumGrams * 12.45;
 console.log(`Group 1: ${grout1} cats.`);
 console.log(`Group 1: ${grout2} cats.`);
 console.log(`Group 1: ${grout3} cats.`);
 console.log(`Price for food per day: ${eathPrice.toFixed(2)} lv.`);
}

checkNum(["7",
"100",
"200",
"342",
"300",
"234",
"123",
"212"]);