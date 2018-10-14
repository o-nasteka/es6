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


const func = (a = 20) => {
    return a;
};

console.log(func());