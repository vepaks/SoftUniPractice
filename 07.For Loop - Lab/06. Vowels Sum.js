function getAndCalcNum(input) {
    let text = input[0];
    let result = 0;

    for (let i = 0; i < text.length; i++) {
        let c = text[i]; //в 'с' се намират всички символи от text

        //проверяваме символите в 'с' и определяме стойност
        switch (c) {
            case 'a':
                result += 1;
                break;
            case 'e':
                result += 2;
                break;
            case 'i':
                result += 3;
                break;
            case 'o':
                result += 4;
                break;
            case 'u':
                result += 5;
                break;
            default:
                break;
        }
    }

    //печатаме резултата
    console.log(result);

}

getAndCalcNum(["hello"]);