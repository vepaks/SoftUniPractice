function basseball (input) {
    let pacticePrice = Number(input[0]),
        shoesPrice = (pacticePrice - (pacticePrice*0.4)),
        sportOutfit = shoesPrice - (shoesPrice * 0.2),
        sportBall = sportOutfit * 0.25,
        sportАccessories = sportBall * 0.20;

    let finalSum = pacticePrice + shoesPrice + sportOutfit + sportBall + sportАccessories;
    
    console.log (finalSum);
}

basseball(["365"]);