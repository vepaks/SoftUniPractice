function record(param) {
    let record = Number(param[0]),
        metres = Number(param[1]),
        timePerSec = Number(param[2]);
    let timeToNewRecrd = (metres * timePerSec);
    let timeSlowPerMetres = (metres / 15).toFixed(2); 
    let finalSlowTime = Math.floor (timeSlowPerMetres); 
    let finalTimeSlow = finalSlowTime * 12.5;
    let totalTime = (timeToNewRecrd + finalTimeSlow).toFixed(2);

    if (record <= totalTime) {
        console.log(`No, he failed! He was ${(totalTime-record).toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${totalTime} seconds.`);
    }


}

record(["55555.67",
"3017",
"5.03"]);