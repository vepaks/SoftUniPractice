function fishTank (input) {
    let lenght = Number(input[0]),
        wight = Number(input[1]),
        hight = Number(input[2]),
        percentage = Number(input[3]);

    let tankCapasity  = lenght * wight * hight,
        tankCapasityLrt = tankCapasity / 1000,
        occupiedSpace = percentage / 100;
        
    let watherNeed = tankCapasityLrt * (1 - occupiedSpace);
    
    console.log (watherNeed);
}

fishTank (["85","75","47","17"]);