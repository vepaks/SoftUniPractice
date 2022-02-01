function checkNum(band, album, song) {

    let duration = ((album.length * band.length) * song.length) / 2;
    let rotate = Math.ceil(duration / 2.5);

    console.log ( `The plate was rotated ${rotate} times.`);

}

checkNum('Black Sabbath', 'Paranoid', 'War Pigs');
checkNum('Rammstein', 'Sehnsucht', 'Engel');