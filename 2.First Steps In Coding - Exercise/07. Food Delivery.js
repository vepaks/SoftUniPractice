function foodDelivery (input) {
    let chickenPrice = 10.35,
        fishPrice = 12.40,
        vegetarianPrice = 8.15,
        deliveryPrice = 2.50;

    let chickenOrder = Number(input[0]),
        fishOrder = Number(input[1]),
        vegetarianOrder = Number(input[2]);

    let chickenFood = chickenOrder * chickenPrice,
        fishFood = fishPrice * fishOrder,
        vegetarianFood = vegetarianPrice * vegetarianOrder;

    let finalFoodPrice = chickenFood + fishFood + vegetarianFood;
    
    let desert = finalFoodPrice * 0.2;

    let FinalSum = finalFoodPrice + desert + deliveryPrice;

    console.log (FinalSum);
}

foodDelivery (["2","4","3"]);

