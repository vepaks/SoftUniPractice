function checkNum(input) {
    let paintCount = Number(input[0]),
        rollCount = Number(input[1]),
        glovesPrice = Number(input[2]),
        bushPrice = Number(input[3]);

    let sumPaintPrice = 21.50 * paintCount;

    let sumRollPrice = 5.2 * rollCount;

    let needetGloves = Math.ceil (rollCount * 0.35);
    
    let needetBush = Math.floor (paintCount * 0.48);

    let sumBushPrice = (needetBush * bushPrice);

    let sumGlovesPrice = (needetGloves * glovesPrice);

    let finalPrice = sumPaintPrice + sumRollPrice + sumBushPrice + sumGlovesPrice;

    let delevirery = (( ((1 / 15 )*100)/ 100) * finalPrice);

    console.log(`This delivery will cost ${delevirery.toFixed(2)} lv.`);

}
checkNum(['10',
    '8',
    '2.2',
    '5'
]);