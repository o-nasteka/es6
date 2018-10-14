// const original = function () {
//     return 100;
// };

// console.log(original());

// const arrow = (num) => {
//     return 200 + num;
// };

// const arrow2 = (num) => 200 + num;
// const arrow3 = num => 200 + num;
//
// console.log(arrow3(10));


// const func = (a = 20) => {
//     return a;
// };
//
// console.log(func());

// Func END

// Object Start

const name = 'WFM';
const age = 30;

// ES5
// const obj = {
//     name: name,
//     age: age
// };

// console.log(obj);

// ES6
// const obj = {name,age};
// console.log(obj);

// Object END

const createPerson = (name, surname, fieldName, fieldPostfix) => {
    const fullname = name + ' ' + surname;
    return {
        fullname,
        name,
        surname,
        getJob() {
            return 'Front End';
        },
        [fieldName + fieldPostfix]: 100
    };
};

const person = createPerson('Vasya', 'Petrov', 'car', '-name');

// console.log(person.getJob());
console.log(person);