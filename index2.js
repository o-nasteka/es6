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

// const name = 'WFM';
// const age = 30;

// ES5
// const obj = {
//     name: name,
//     age: age
// };

// console.log(obj);

// ES6
// const obj = {name,age};
// console.log(obj);

// const createPerson = (name, surname, fieldName, fieldPostfix) => {
//     const fullname = name + ' ' + surname;
//     return {
//         fullname,
//         name,
//         surname,
//         getJob() {
//             return 'Front End';
//         },
//         [fieldName + fieldPostfix]: 100
//     };
// };
//
// const person = createPerson('Vasya', 'Petrov', 'car', '-name');
//
// // console.log(person.getJob());
// console.log(person);

// Object END


// Destruct Obj

/*
let obj = {
    name : 'Vasya1',
    age: 30
};

let {name: n, age: a} = obj;

console.log(n, a);

*/
// Destruct Obj END


// Destruct Array

let array = ['Vasya', 30, 'red'];

// ES5
// let name = array[0];
// let age = array[1];
// let color = array[2];

// ES6
let [name,age,color] = array;

console.log(name,age,color);
// Destruct Array END