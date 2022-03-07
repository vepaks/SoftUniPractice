function getFuel() {

    class Vehicle {
        constructor(type, model, parts, fuel, drive) {
            this.type = type;
            this.model = model;
            this.parts = parts;
            this.fuel = fuel;
            this.drive = function (d) {
                this.fuel = this.fuel - d;
            }
        }
    }

    let parts = {engine: 9, power: 500};
    let vehicle = new Vehicle('l', 'k', parts, 840);
    vehicle.drive(20);
    console.log(vehicle.fuel);
}

getFuel();