function checkOutfit(input) {
    let degrees = Number(input[0]),
        timeOfDay = input[1];

    if (degrees >= 10 && degrees <= 18) {
        switch (timeOfDay) {
            case "Morning":
                console.log(`It's ${degrees} degrees, get your ${'Sweatshirt'} and ${'Sneakers'}.`);
                break;
            case "Afternoon":
                console.log(`It's ${degrees} degrees, get your ${'Shirt'} and ${'Moccasins'}.`);
                break;
            case "Evening":
                console.log(`It's ${degrees} degrees, get your ${'Shirt'} and ${'Moccasins'}.`);
                break;
            default:
                break;
        }
    } else if (degrees > 18 && degrees <= 24) {
        switch (timeOfDay) {
            case "Morning":
                console.log(`It's ${degrees} degrees, get your ${'Shirt'} and ${'Moccasins'}.`);
                break;
            case "Afternoon":
                console.log(`It's ${degrees} degrees, get your ${'T-Shirt'} and ${'Sandals'}.`);
                break;
            case "Evening":
                console.log(`It's ${degrees} degrees, get your ${'Shirt'} and ${'Moccasins'}.`);
                break;
            default:
                break;
        }
    } else if (degrees > 24) {
        switch (timeOfDay) {
            case "Morning":
                console.log(`It's ${degrees} degrees, get your ${'T-Shirt'} and ${'Sandals'}.`);
                break;
            case "Afternoon":
                console.log(`It's ${degrees} degrees, get your ${'Swim Suit'} and ${'Barefoot'}.`);
                break;
            case "Evening":
                console.log(`It's ${degrees} degrees, get your ${'Shirt'} and ${'Moccasins'}.`);
                break;
            default:
                break;
        }
    }
}