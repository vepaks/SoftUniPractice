function checkBooks(pages, pagePerHour, days) {

    let totalTime = pages / pagePerHour;
    let hoursPerDay = totalTime / days; 

    console.log (hoursPerDay);

}

checkBooks(212, 20, 2);
checkBooks(432, 15, 4);