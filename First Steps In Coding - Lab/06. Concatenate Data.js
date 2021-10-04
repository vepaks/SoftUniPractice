function concatenateData (imput) {
    let firstName = imput[0],
        lastName = imput[1],
        age = Number(imput[2]),
        town = imput[3];
        
    console.log (`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`);
}