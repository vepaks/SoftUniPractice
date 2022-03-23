// function getString(arr) {
//     let vipGuests = new Set();
//     let regularGuests = new Set();
//
//     //правим списък за ВИП гости и регулярни гости
//     while (arr[0] !== 'PARTY') {
//         let guest = arr.shift();
//
//         //проверяваме дали първият символ от елемента е число и добавяме в регулярният списъка
//         if (Number.isNaN(Number(guest[0]))) {
//             regularGuests.add(guest);
//
//             //в противен случай добавяме елемента в списъка за ВИП гости
//         } else {
//             vipGuests.add(guest);
//         }
//     }
//
//     //обхождаме целият масив и махаме всички повтарящи се елементи
//     for (let arrElement of arr) {
//         vipGuests.delete(arrElement);
//         regularGuests.delete(arrElement);
//     }
//
//     //печатаме резултата
//     console.log(vipGuests.size + regularGuests.size);
//     for (let vipGuest of vipGuests) {
//         console.log(vipGuest);
//     }
//     for (let regularGuest of regularGuests) {
//         console.log(regularGuest);
//     }
//
// }


function letAtt(input) {

}

let arr = [];


function partyTime(input) {
    let invitedList = input.splice(0, input.indexOf("PARTY"));
    input.splice(0, 1);
    let VIP = [];
    let regular = [];
    for (let guest of invitedList) {
        if (guest[0] >= "0" && guest[0] <= "9") {
            VIP.push(guest);
        } else {
            regular.push(guest);
        }
    }
    for (let guest of input) {
        if (VIP.includes(guest)) {
            VIP.splice(VIP.indexOf(guest), 1);
        }
        if (regular.includes(guest)) {
            regular.splice(regular.indexOf(guest), 1);
        }
    }
    console.log(VIP.length + regular.length);
    VIP.forEach((x) => console.log(x));
    regular.forEach((x) => console.log(x));
}

partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);