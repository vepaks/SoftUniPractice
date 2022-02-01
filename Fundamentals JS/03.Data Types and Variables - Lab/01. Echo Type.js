function checkEcho(input) {

    let echo = typeof input;
    console.log(echo);

    if (echo === 'string' || echo === 'number') {
        console.log(input);
    } else {
        console.log('Parameter is not suitable for printing');
    }

}

checkEcho('Hello, JavaScript!');
checkEcho(18);
checkEcho(null);
checkEcho(false);
