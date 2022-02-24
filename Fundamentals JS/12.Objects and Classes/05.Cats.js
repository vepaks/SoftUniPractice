function getCat(arr) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    let cats = [];

    for (let i = 0; i < arr.length; i++) {
        let [name, age] = arr[i].split(' ');
        cats.push(new Cat(name, age));
    }

    for (let cat of cats) {
        cat.meow();
    }
}

getCat(['Mellow 2', 'Tom 5']);
getCat(['Candy 1', 'Poppy 3', 'Nyx 2']);
