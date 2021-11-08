
function oscars(input) {
    let index = 0;
    let actorName = input[index]; // взимаме името на актьора от '0' индекс от масива
    index++; // увеличаваме индекса на масива
    let scoreFromAcademy = Number(input[index]); // взимаме началните точки на актора от '1' индекс от масива
    index++;
    let juriCount = Number(input[index]); // '2' индекс от масива - броят на журито
    index++;
    let totalScore = Number(scoreFromAcademy); // създаваме променлива за сумата на точките
    let isEnoughScore = false; // правим стоп ако точките са достатъчно за Оскар


    // създаваме цикъл да обходи останалата част от масива и да натрупа точки в цялара сума
    for (let i = 0; i < juriCount; i++) {
      let currentJuriName = input[index]; // тук е името на журито
      index++; // увеличаваме индекса на масива
      let scoreGiven = Number(input[index]); // взимаме точките който дава журито
      index++; // увеличаваме масива за следващото име
      totalScore += (currentJuriName.length * scoreGiven) / 2; //изчислявяме точките, които добавяме към сумата


      //добавяме условие 'ако сумата достигне определен брой точки' обръщаме булевия тип
      if (totalScore >= 1250.5) {
        isEnoughScore = true;
        break;
      }

    }

    // печатаме резултати с условие за проверка на натрупана сума
    if (totalScore >= 1250.5) {
      console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalScore.toFixed(1)}!`);
    } else {
      console.log(`Sorry, ${actorName} you need ${Math.abs(1250.5 - totalScore).toFixed(1)} more!`);
    }
  }


  oscars(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"
]);