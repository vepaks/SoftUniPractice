function areaOfFigures(input) {
    let figure = input[0],
        num = Number(input[1]),
        num2 = Number(input[2]),
        squareSum = (num * 5),
        rectangle = (num * num2),
        circle = (num);



    if (figure == "square") {
        console.log(squareSum.toFixed(3));
    }

}

areaOfFigures(["square", "5"]);