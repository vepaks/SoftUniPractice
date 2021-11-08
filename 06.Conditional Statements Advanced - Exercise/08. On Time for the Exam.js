function onTimeForExam(input) {
 
    let hourExam = Number(input[0]);
    let minExam = Number(input[1]);
    let hourArrival = Number(input[2]);
    let minArrival = Number(input[3]);

    
    let examTimemin = (hourExam * 60) + minExam;
    let arrivalTimeMin = (hourArrival * 60) + minArrival;
    let diff = examTimemin - arrivalTimeMin;
 
    if (diff < 0) {
        console.log("Late");
        let h = Math.abs(Math.ceil(Number(diff / 60)));
        let m = Math.abs(diff % 60);
        if (h === 0) {
 
                console.log(`${m} minutes after the start`);
 
        } else {
            if (m < 10) {
                console.log(`${h}:0${m} hours after the start`);
            } else {
                console.log(`${h}:${m} hours after the start`);
            }
        }
    }
    else if (diff <= 30 && diff >= 0) {
        console.log("On time");
        let h = Math.abs(Math.floor(Number(diff / 60)));
        let m = Math.abs(Number(diff % 60));
        if (m < 10 && m !== 0) {
            console.log(`${m} minutes before the start`);
        } else if (m !== 0) {
            console.log(`${m} minutes before the start`);
        }
    } else {
        console.log("Early");
        let h = Math.abs(Math.floor(Number(diff / 60)));
        let m = Math.abs(Number(diff % 60));
        if (h === 0) {
            if (m < 10) {
                console.log(`0${m} minutes before the start`);
            } else {
                console.log(`${m} minutes before the start`);
            }
        } else {
            if (m < 10) {
                console.log(`${h}:0${m} hours before the start`);
            } else {
                console.log(`${h}:${m} hours before the start`);
            }
        }
    }
}