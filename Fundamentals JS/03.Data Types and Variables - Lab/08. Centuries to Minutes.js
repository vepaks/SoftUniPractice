function getNum (centuries) {

    // years, days, hours, and minutes.

    // 1 centuries = 100 years = 36524 days = 876576 hours = 52594560 minutes

    let years = centuries * 100;
    let days = Math.trunc(years * 365.2422);
    let hours = 24 * days;
    let minutes = 60 * hours;

    console.log (`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);

}

getNum (1);
getNum (5);