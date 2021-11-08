function checkSalary(input) {
    let tabsCount = Number(input[0]),
        salary = Number(input[1]),
        fine = 0;

    for (let i = 0; i < input.length; i++) {
        let c = input[i];

        switch (c) {
            case 'Facebook':
                fine += 150;
                break;
            case 'Instagram':
                fine += 100;
                break;
            case 'Reddit':
                fine += 50;
                break;

            default:
                break;

        }

        if (fine >= salary) {
            console.log('You have lost your salary.');
            break;
        }

    }

    if (salary > fine) {
        salary = salary - fine;
        console.log(`${salary}`);
    }
}

checkSalary(["10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"
]);