function checkNum(input) {
    let locationCaunt = Number(input[0]);    
    
    let index = 1;
    
    for (let i = 0; i < locationCaunt; i++) {
       
        let goldPerDay = Number(input[index]); // 10
        index++;
       let dayCount = Number(input[index]); // 3
       let realGoldPerDay =0;

        for (let j = 0; j < dayCount; j++) {
            index++;
            let goldMined = Number(input[index]);
            realGoldPerDay += goldMined; // 10
            
            
        }

        let average = realGoldPerDay / dayCount;
        
        if (average >= goldPerDay) {
            console.log(`Good job! Average gold per day: ${average.toFixed(2)}.`);            
        } else if ( average <  goldPerDay) {
            console.log(`You need ${(goldPerDay - average).toFixed(2)} gold.`);
        }
        
        index++;

    }

}

checkNum (["2",
"10",
"3",
"10",
"10",
"11",
"20",
"2",
"20",
"10"]);