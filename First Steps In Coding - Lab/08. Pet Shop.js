function Zoo (imput) {
    let dogFoodPrice = Number(2.5),
        catFoodPrice = Number(4),
        countDogsFood = Number(imput[0]),
        countCatsFood = Number(imput[1]),
        finalSum = ((dogFoodPrice*countDogsFood) + (catFoodPrice*countCatsFood));
               
    console.log (`${finalSum} lv.`);
}