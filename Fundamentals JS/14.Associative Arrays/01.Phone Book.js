function getString(arr) {

    let phonebook = {};

    for (let arrElement of arr) {
        arrElement = arrElement.split(' ');
        let [name, phoneNumber] = arrElement;
        phonebook[name] = phoneNumber;

    }
    for (let phonebookKey in phonebook) {
        console.log(`${phonebookKey} -> ${phonebook[phonebookKey]}`);
    }

}

getString(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344']);