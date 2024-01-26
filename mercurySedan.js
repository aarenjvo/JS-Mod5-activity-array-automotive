//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass").Vehicle

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    checkService(mileage) {

        this.mileage = (Math.random() * 80000);


        if (this.mileage > 30000) {
            console.log('time for maintenence');
            return this.scheduleService = true;
        } else {
            console.log('your car is up to date!');
            return this.scheduleService = false;
        }
    }


    // Get creative and create this method on your own.
    loadPassenger(num) {

        this.passengers = (Math.random() * 10);

        if (this.passengers > this.maxPassengers) {
            console.log('max capacity reached, not safe to drive!');
            return this.started = true;
        } else {
            console.log('sensing no capacity issues, drive safe!');
            return this.started = false;

        }


    }


    start() {

        this.fuel = (Math.random() * 10);

        if (this.fuel > 5) {
            console.log('engine started.');
            return this.started = true;
        } else {
            console.log('no fuel to start.');
            return this.started = false;
        }


    }








}





//this shows how to call from this module...
let newCar = new Car("Mercury", "Sedan", "1965", "Black", "31000");

newCar.start()
newCar.stop()
newCar.checkService()
newCar.loadPassenger()

console.log(newCar)


//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...












//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
