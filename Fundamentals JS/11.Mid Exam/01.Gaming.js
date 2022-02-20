function gaming(input) {
    let exp = input.shift();
    let battles = input.shift();
    let battleExp = 0;
    let count = 1;


    for (let index = 0; index < battles; index++) {
        if (count === 3) {
            battleExp += (input[index] + (input[index] * 0.15));
        } else if (count === 5) {
            battleExp += (input[index] - (input[index] * 0.10));
        } else if (count === 15) {
            battleExp += (input[index] + (input[index] * 0.5));
        } else {
            battleExp += input[index];
        }
        if (battleExp >= exp) {
            break;
        }

        count++;
    }

    if (exp <= battleExp) {
        console.log(`Player successfully collected his needed experience for ${count} battles.`);
    } else {
        console.log(`Player was not able to collect the needed experience, ${(exp - battleExp).toFixed(2)} more needed.`);
    }
}

gaming([500,
    5,
    50,
    100,
    200,
    100,
    30
]);

gaming([400,
    5,
    50,
    100,
    200,
    100,
    20
]);

gaming([500,
    5,
    50,
    100,
    200,
    100,
    20
]);