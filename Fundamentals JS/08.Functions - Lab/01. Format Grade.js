function checkGrade(grade) {

    let result = grade.toFixed(2);
    let descr;

    if (grade < 3) {
        result = '2';
        descr = 'Fail';
    } else if (grade < 3.5) {
        descr = 'Poor';
    } else if (grade < 4.5) {
        descr = 'Good';
    } else if (grade < 5.5) {
        descr = 'Very good';
    } else {
        descr = 'Excellent';
    }

    console.log(`${descr} (${result})`);
}

checkGrade(3.33);
checkGrade(4.50);
checkGrade(2.99);