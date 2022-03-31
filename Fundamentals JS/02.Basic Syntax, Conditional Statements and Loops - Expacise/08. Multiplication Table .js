function checkNum(num) {

    num = Number(num);

    for (let i = 1; i <= 10; i++) {
        console.log(`${num} X ${i} = ${num * i}`);
    }
}



checkNum(2);
checkNum(5);