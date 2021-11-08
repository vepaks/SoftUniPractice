function totalTime (input) {
    let hours = Number(input[0]),
        mins = Number(input[1]) + 15;

        if (mins > 59) {
           mins -= 60;
           hours = hours + 1;  
             
        }
        if (hours > 23) {
            hours -= 24;
        }
        
        if (mins < 10) {
        console.log (`${hours}:0${mins}`);
        } else {
            console.log (`${hours}:${mins}`);
        }
    
        
}

totalTime (["24", "46"]);