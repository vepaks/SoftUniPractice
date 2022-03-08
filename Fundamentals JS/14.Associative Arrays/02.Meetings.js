function getName(arr) {
    let meeting = {};
    for (const arrElement of arr) {
        let currElement = arrElement.split(' ');
        // console.log(currElement);
        if (meeting.hasOwnProperty(currElement[0])) {
            console.log(`Conflict on ${currElement[0]}!`);
        } else {
            meeting[currElement[0]] = currElement[1];
            console.log(`Scheduled for ${currElement[0]}`);
        }
    }
    for (const key in meeting) {
        console.log(`${key} -> ${meeting[key]}`);
    }
}


getName(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
]);

getName(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George'
]);