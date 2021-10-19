function checkWorkingTime(input) {

    let hour = Number(input[0]),
        dayOfWeek = input[1];
        
    
    if (hour >= 10 && hour < 18) {
        hour = true;
    }
    if (dayOfWeek === "Monday" || dayOfWeek === "Tuesday" || dayOfWeek === "Wednesday" || dayOfWeek === "Thursday" || dayOfWeek === "Friday" || dayOfWeek === "Saturday") {
        dayOfWeek = true;
    }
    if (hour == true && dayOfWeek == true) {
        console.log("open");
    } else {
        console.log("closed");

    }
}
    checkWorkingTime(["10",
        "Sunday"
    ]);

//     switch (dayOfWeek) {
//         case "Monday":

//         case "Tuesday":

//         case "Wednesday":

//         case "Thursday":

//         case "Friday":
//             dayOfWeek = true;

//             break;
//         default:

//     }
//     if (hour === true && dayOfWeek === true) {
//         console.log("open");
//     } else {
//         console.log("closed");
//     }
// }