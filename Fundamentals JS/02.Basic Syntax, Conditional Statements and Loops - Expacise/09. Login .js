function checkLogin(pass) {

    let username = pass[0];
    let passWord = pass[0];

    for (let i = 1; i < pass.length; i++) {

        passWord = pass[i];

        let element = passWord.split('').reverse().join(''); //метод reverse

        if (element === username) {
            console.log(`User ${username} logged in.`);
        } else if (i === 4) {
            console.log(`User ${username} blocked!`);
            break;
        } else {
            console.log(`Incorrect password. Try again.`);
        }
    }

}

checkLogin(['Acer', 'login', 'go', 'let me in', 'recA']);
checkLogin(['momo','omom']);
checkLogin(['sunny','rainy','cloudy','sunny','not sunny']);

