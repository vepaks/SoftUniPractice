function ship(input) {
    let shirina = Number(input[0]);
    let dyljina = Number(input[1]);
    let visochina = Number(input[2]);
    let visAstr = Number(input[3]);
    let obemRaketa = shirina * dyljina * visochina;
    let obemStaq = (visAstr + 0.4) * 2 * 2;
    let broiAstr = Math.floor(obemRaketa / obemStaq);

    if (broiAstr >= 3 && broiAstr <= 10) {
        console.log(`The spacecraft holds ${broiAstr} astronauts.`);

    } else if (broiAstr < 3) {
        console.log(`The spacecraft is too small.`);

    } else if (broiAstr > 10) {
        console.log(`The spacecraft is too big.`);
    }

}
ship(["3.5",
    "4",
    "5",
    "1.70"
]);