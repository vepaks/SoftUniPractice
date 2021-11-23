function checkNum(input) {
    let team = input[0],
        souvenir = input[1],
        souvenirCount = Number(input[2]);
    let result = 0;
    if (team !== "Argentina" && team !== "Brazil" && team !== "Croatia" && team !== "Denmark") {
        console.log(`Invalid country!`);
    } else if (souvenir !== "flags" && souvenir !== "caps" && souvenir !== "posters" && souvenir !== "stickers") {
        console.log(`Invalid stock!`);
    } else {
        switch (team) {
            case 'Argentina':
                switch (souvenir) {
                    case "flags":
                        result = souvenirCount * 3.25;
                        break;
                    case "caps":
                        result = souvenirCount * 7.20;
                        break;
                    case "posters":
                        result = souvenirCount * 5.10;
                        break;
                    case "stickers":
                        result = souvenirCount * 1.25;
                        break;
                }
                console.log(`Pepi bought ${souvenirCount} ${souvenir} of ${team} for ${result.toFixed(2)} lv.`);
                break;
            case "Brazil":
                switch (souvenir) {
                    case "flags":
                        result = souvenirCount * 4.20;
                        break;
                    case "caps":
                        result = souvenirCount * 8.50;
                        break;
                    case "posters":
                        result = souvenirCount * 5.35;
                        break;
                    case "stickers":
                        result = souvenirCount * 1.20;
                        break;
                }
                console.log(`Pepi bought ${souvenirCount} ${souvenir} of ${team} for ${result.toFixed(2)} lv.`);
                break;
            case "Croatia":
                switch (souvenir) {
                    case "flags":
                        result = souvenirCount * 2.75;
                        break;
                    case "caps":
                        result = souvenirCount * 6.90;
                        break;
                    case "posters":
                        result = souvenirCount * 4.95;
                        break;
                    case "stickers":
                        result = souvenirCount * 1.10;
                        break;
                }
                console.log(`Pepi bought ${souvenirCount} ${souvenir} of ${team} for ${result.toFixed(2)} lv.`);
                break;
            case "Denmark":
                switch (souvenir) {
                    case "flags":
                        result = souvenirCount * 3.10;
                        break;
                    case "caps":
                        result = souvenirCount * 6.50;
                        break;
                    case "posters":
                        result = souvenirCount * 4.80;
                        break;
                    case "stickers":
                        result = souvenirCount * 0.90;
                        break;
                }
                console.log(`Pepi bought ${souvenirCount} ${souvenir} of ${team} for ${result.toFixed(2)} lv.`);


                break;

        }
    }
}
checkNum(["Argentina",
    "shirts",
    "5"
]);