getArr([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);

function getArr(arr) {

    let heroInventory = [];

    for (let arrElement of arr) {
        let [name, level, items] = arrElement.split(' / ')
        let hero = {
            name,
            level: Number(level),
            items,
        }
        heroInventory.push(hero);
    }
    heroInventory.sort((a, b) => a.level - b.level)
    for (let heroInventoryElement of heroInventory) {
        console.log(`Hero: ${heroInventoryElement.name}`)
        console.log(`level => ${heroInventoryElement.level}`)
        console.log(`items => ${heroInventoryElement.items}`)
    }
}