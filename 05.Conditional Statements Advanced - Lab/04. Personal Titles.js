function checkPersonalTitles(input) {

    let age = Number(input[0]),
        gender = input[1];

    if (age < 16 && gender === "m") {
        console.log("Master");
    }

    if (age < 16 && gender === "f") {
        console.log("Miss");

    }

    if (age >= 16 && gender === "m") {
        console.log("Mr.");

    }

    if (age >= 16 && gender === "f") {
        console.log("Ms.");

    }
}
checkPersonalTitles(["17",
    "m"
]);