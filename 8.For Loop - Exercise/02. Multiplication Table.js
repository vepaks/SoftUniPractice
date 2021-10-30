function checkNum(input) {
    let num = Number(input[0]);

    for (let i = 1; i <= 10; i++) {
        console.log(`${i} * ${num} = ${num * i}`);
    }
}
checkNum(["3"]);