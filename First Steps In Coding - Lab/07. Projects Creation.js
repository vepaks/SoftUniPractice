function projectTime (imput) {
    let name = imput[0],
        project = Number(imput[1]),
        hours = Number(project * 3);
                
    console.log (`The architect ${name} will need ${hours} hours to complete ${project} project/s.`);
}