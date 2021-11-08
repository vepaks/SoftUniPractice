function passwordGuess(input) {
    let pass = "s3cr3t!P@ssw0rd",
        passCheck = input[0];
    if (pass == passCheck) {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}