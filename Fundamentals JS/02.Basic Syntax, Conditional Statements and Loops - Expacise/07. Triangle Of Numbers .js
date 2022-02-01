function checkResult(num) {

    let checkNum = Number(num);

    for (let i = 0; i <= num; i++) {
            let b = '';
        for (let a = 0; a < i; a++) {
            b += ' ' + i;
        }

        console.log(b);

    }

}

checkResult(3);
checkResult(5);
checkResult(6);
