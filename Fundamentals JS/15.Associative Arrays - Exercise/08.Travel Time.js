function getTimeToTravel(arr) {

    let travel = {};

    for (let arrElement of arr) {
        let [country, city, distance] = arrElement.split(' > ');
        if (travel.hasOwnProperty(country) === false) {
            travel[country] = [];
        }
        if (travel[country].includes(country) === false) {
            travel[country].push(country);
        }
        travel[country].push(city);
        travel[country].push(distance);
    }

    for (let travelKey in travel) {
        let result = travel[travelKey].join(' -> ');
        console.log(result);
    }
    // console.log(travel);
}

getTimeToTravel([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);