function barcodeGenerator (input) {
    let numA = input[0] + "";
    let numB = input[1] + "";
    
    let x1 = Number(numA[0]);
    let x2 = Number(numA[1]);
    let x3 = Number(numA[2]);
    let x4 = Number(numA[3]);
    
    let y1 = Number(numB[0]);
    let y2 = Number(numB[1]);
    let y3 = Number(numB[2]);
    let y4 = Number(numB[3]);
    
    let buff = "";
    
    for(let a = x1; a <= y1; a++) {
        for(let b = x2; b <=y2; b++) {
            for(let c = x3; c <= y3; c++) {
                for(let d = x4; d <=y4; d++) {
                    if(a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !== 0) {
                    
                   buff += "" + a + b + c + d + " ";
                    }
                }
            }
    
        }
    }
    console.log(buff);
    }
    barcodeGenerator([2345,6789]);