function checkNum(num) {
        
    num = Number(num);

    for (let i = 1; i <= 10; i++) {
        console.log(`${i} * ${num} = ${num * i}`);
    }
}

checkNum(2);
checkNum(5);

