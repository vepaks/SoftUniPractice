function checkYear(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ) {
            console.log('yes');
    } else {
        console.log('no');
    }
}

checkYear (1984);
checkYear (2003);
checkYear (1900);


