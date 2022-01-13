function getNum(numM, numN) {
    let controlNum = numM;

    while (controlNum >= numN) {
        console.log(controlNum);
        controlNum--;
    }
}

getNum(6, 2);