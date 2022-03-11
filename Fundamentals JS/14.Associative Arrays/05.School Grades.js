getString(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
]);

getString(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3'
]);

function getString(arr) {

    let averageGrades = {};

    for (const iterator of arr) {
        let currElement = iterator.split(' ');
        let name = currElement.shift();
        if (averageGrades.hasOwnProperty(name)) {
            for (let i = 0; i < currElement.length; i++) {
                averageGrades[name].push(currElement[i]);
            }
        } else {
            averageGrades[name] = [];
            for (let i = 0; i < currElement.length; i++) {
                averageGrades[name].push(currElement[i]);
            }
        }
    }

    for (const key in averageGrades) {
        let grades = averageGrades[key].map(Number);
        let gradesCount = grades.length;
        let sum = 0;
        for (const grade of grades) {
            sum += grade;
        }
        let avgGrade = (sum / gradesCount).toFixed(2);
        averageGrades[key] = avgGrade;

    }

    let sort = Object.entries(averageGrades);

    sort.sort(sorting);

    function sorting(a, b) {
        return a[0].localeCompare(b[0]);
    }

    for (let [name, address] of sort) {
        console.log(`${name}: ${address}`);
    }

}