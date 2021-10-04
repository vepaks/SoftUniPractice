function Greenland (imput) {
    let square = Number(imput[0]),
        workPrice = 7.61,
        price = Number(square*workPrice),
        discount = Number(price*0.18),
        finalSum = Number(price-discount);
        
    console.log (`The final price is: ${finalSum} lv.`);
    console.log (`The discount is: ${discount} lv.`);
}