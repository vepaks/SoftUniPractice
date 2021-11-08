function painting (input) {
    let nylonPrice = 1.50,
        paintPriceLtr = 14.50,
        paintThinner = 5;

    let nylonCounter = Number(input[0]),
        paintCounter = Number(input[1]),
        paintThinnerCounter = Number(input[2]),
        workHour = Number(input[3]);

    let nylonSum = (nylonCounter+2)*nylonPrice,
        paintSum = (paintCounter+(paintCounter*0.10))*paintPriceLtr,
        thinnerSum = paintThinnerCounter * paintThinner;

    let bagPrice = 0.40;
    
    let allMaterialsPrice = nylonSum + paintSum + thinnerSum + bagPrice,
        workersPrice = (allMaterialsPrice*0.30)*workHour;

    let finalSum = allMaterialsPrice + workersPrice;
    
    console.log (finalSum);

}

painting(["10","11","4","8"]);


// Сума за найлон: (10 + 2) * 1.50 = 18 лв. 

// Сума за боя: (11 + 10%) * 14.50 = 175.45 лв. 

// Сума за разредител: 4 * 5.00 = 20.00 лв. 

// Сума за торбички: 0.40 лв. 

// Обща сума за материали: 18 + 175.45 + 20.00 + 0.40 = 213.85 лв. 

// Сума за майстори: (213.85 * 30%) * 8 = 513.24 лв. 

// Крайна сума: 213.85 + 513.24 = 727.09 лв. 