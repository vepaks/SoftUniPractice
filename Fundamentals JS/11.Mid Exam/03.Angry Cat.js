function getNum(arr, startIndex, check) {

    let leftSum = 0;
    let rightSum = 0;

    let leftArr = arr.splice(0, startIndex);
    let checkNumber = arr.shift();

    let rightArr = arr.slice();


    switch (check) {
        case 'cheap':
            for (const element of leftArr) {
                if (element < checkNumber) {
                    leftSum += element;
                }
            }

            for (const element of rightArr) {
                if (element < checkNumber) {
                    rightSum += element;
                }
            }
            break;
        case 'expensive':
            for (const element of leftArr) {
                if (element >= checkNumber) {
                    leftSum += element;
                }
            }

            for (const element of rightArr) {
                if (element >= checkNumber) {
                    rightSum += element;
                }
            }
            break;

        default:
            break;
    }


    if (leftSum > rightSum) {
        console.log(`Left - ${leftSum}`);
    } else if (rightSum > leftSum) {
        console.log(`Right - ${rightSum}`);
    } else {
        console.log(`Left - ${leftSum}`);
    }


}

getNum([1, 5, 1], 1, "cheap");
getNum([5, 10, 12, 5, 4, 20], 3, "cheap");
getNum([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive");