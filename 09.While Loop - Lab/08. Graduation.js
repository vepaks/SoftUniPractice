function checkGrade(input) {
    
    //създаваме променлива за името на ученика
    let index = 0,
        name = input[index];
    index++;

    //създаваме променлива за брояч на класовете
    let grade = 1;
    //създаваме брояч на лошите оценки
    let badGrade = 0;
    //създаваме брояч за сумата на оценките
    let gradeSum = 0;
    // boolean ckeck
    let isExecuted = false;
//създаваме цикъл за трупане на класове, трупане на лоши оценки, проверка за лоши оценките
// печатане на резултат при натрупане достатъчно лоши оценки
    while (grade <= 12) {
        let tempGrade = Number(input[index]);
        index++;

        if (tempGrade < 4) {
            badGrade++;
            if (badGrade >= 2) {
                isExecuted = true;
                console.log(`${name} has been excluded at ${grade} grade`);
                break;
            }
            // с continue продължаваме работата на цикъла без да се изпълнява кода по надолу
            continue;
        }
        gradeSum += tempGrade;
        grade++;
    }


    // създаваме проверка при завършване да се отпечата резултатър
    if (!isExecuted) {
        let average = gradeSum / 12;
        console.log(`${name} graduated. Average grade: ${(average).toFixed(2)}`);
    }
}

checkGrade(["Mimi",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"
    
]);