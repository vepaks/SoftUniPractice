function bookCounter (input) {
    let bookPages = Number(input[0]),
        pagesPerHour = Number(input[1]),
        daysCount = Number(input[2]),
        timeCount = bookPages / pagesPerHour,
        hoursPerDay = timeCount / daysCount;

        console.log (hoursPerDay);
}

bookCounter(["212","20","2"]);

// Общо време за четене на книгата: 212 страници / 20 страници за час = 10.6 часа общо 

// Необходимите часове на ден: 10.6 часа / 2 дни = 5.3 часа на ден 