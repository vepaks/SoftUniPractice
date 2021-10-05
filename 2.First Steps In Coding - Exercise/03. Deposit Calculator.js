function depositCalculator (input) {
    let deposit = Number(input[0]),
        depositTerm = +input[1], // Проба за резултат в Judge
        depositPercent = Number(input[2] / 100),
        finalSum = deposit + depositTerm * ((deposit * depositPercent) / 12 );

        console.log (finalSum);
}        

depositCalculator (["200","3","5.7"] );

//сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)