function checkWorkingTime(input) {
    
    let hour = Number(input[0]),
        dayOfWeek = input[1];

    if (hour >= 10 && hour < 19) {
        hour = true;
    }
    switch (dayOfWeek) {
        case "Monday":

        case "Tuesday":

        case "Wednesday":

        case "Thursday":

        case "Friday":
            dayOfWeek = true;

            break;
        default:
            break;

    }
    if (hour === true && dayOfWeek === true) {
        console.log("open");
    } else {
        console.log("closed");
    }
}



checkWorkingTime(["19",
"Friday"]);