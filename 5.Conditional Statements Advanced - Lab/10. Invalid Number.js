function checkNum(input) {
    
    let n = +input[0];

    if (n === 0 || n >= 100 && n <= 200) {
        console.log();
    } else {
        console.log("invalid");
    }  
    
}


checkNum(["100"]);