function train(arr) {

    //изрязване първият елемент от входящия масив,
    // разделяме първият елемент на отделен масива
    // превръщаме го в число и го запазваме в променлива 
    let passengers = arr.shift().split(' ').map(Number);

    // изрязваме следващият елемент от масива и го запазваме в променлива
    let limit = Number(arr.shift());

    // създаваме цикъл за проверка на оставащите елементи от масива
    for (let element of arr) {
        // останалите елементи ги разделяме на масиви и ги запазваме в масиви
        // [ 'Add', '10' ][ 'Add', '0' ][ '30' ][ '10' ][ '75' ] 
        let currElement = element.split(' ');
        // ако новият масив нумевият елемент е = на 'Add' 
        // първият елемент го добавяме към масива passengers
        if (currElement[0] === 'Add') {
            passengers.push(Number(currElement[1]));
        } else {
            // минаваме през [32, 54, 21, 12, 4, 0, 23, 10, 0] и ако 
            // сборът на елемента + currElement е <= limit го добавяме към елемента
            for (let index = 0; index < passengers.length; index++) {
                if (passengers[index] + Number(currElement) <= Number(limit)) {
                    passengers[index] += Number(currElement);
                    break;
                }
            }
        }
    }
    console.log(passengers.join(' '));
}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']);