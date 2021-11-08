function totalTime (input) {
    let time1 = Number(input[0]),
        time2 = Number(input[1]),
        time3 = Number(input[2]);

    let totalTime = time1+ time2 + time3;    

    let minutes =  Math.floor(totalTime / 60 );
    let seconds = totalTime % 60;

    

    if (seconds < 10) {
        console.log (`${minutes}:0${seconds}`);
    } else {
        console.log (`${minutes}:${seconds}`);
    }

}


totalTime (["22", "7", "34"]);