// ES5 Class
/*
function Car(name) {
    this.name = name;
}

Car.prototype.logName = function () {
    console.log(this.name);
};

let car = new Car('Audi');
car.logName();
*/
// ES5 Class END

// ES6 Class
// class Car {
//
//     constructor(name) {
//         this.name = name;
//     }
//
//     logName() {
//         console.log(this.name);
//     }
//
//     static staticFunc(){
//         console.log('I am static');
//     }
// }

// let car = new Car('Hyundai');
// car.logName();
//
// Car.staticFunc();

//

class Car {

    constructor(name) {
        console.log('Car constructor');
        this.name = name;
    }

    logName() {
        console.log('Car name is: ', this.name);
    }
}

class Bmw extends Car {
    constructor(name){
        super(name);
        console.log('BMW constructor');
    }
    logName() {
        console.log('BMW name is: ', this.name);
    }
}

let bmw = new Bmw('X6');
bmw.logName();

// ES6 Class END