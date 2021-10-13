function speedTest(input) {
    let num = (input[0]);
    if (num <= 10) {
        console.log("slow");
    } else if (10 < num && num <= 50) {
        console.log("average");
    } else if (50 < num && num <= 150) {
        console.log("fast");
    } else if (150 < num && num <= 1000) {
        console.log("ultra fast");
    } else {
        console.log("extremely fast");
    }
}