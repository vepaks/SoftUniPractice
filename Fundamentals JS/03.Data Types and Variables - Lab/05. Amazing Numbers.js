function checkNum(num) {

    num = num.toString();
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }

    let result = sum.toString().includes('9');

    if (result === true) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);

    }
}

checkNum(1233);
checkNum(999);