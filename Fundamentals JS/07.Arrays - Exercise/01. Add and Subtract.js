function getNum(arr) {

    let originalSum = 0;
    let modifiteTotalSum = 0;
    let count = 0;

    let newArr = [];
    
    arr.forEach(element => {

        if (element % 2 === 0) {
            originalSum += element;
            element += count;
            modifiteTotalSum += element;
            newArr.push(element);
            
        } else {
            originalSum += element;
            element -= count;
            modifiteTotalSum += element;
            newArr.push(element);
        }
        count += 1;
    });
    
    console.log(newArr);
    console.log(originalSum);
    console.log(modifiteTotalSum);

}

getNum([5, 15, 23, 56, 35]);