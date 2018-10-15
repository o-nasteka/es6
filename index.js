const array = [1,2,3,4,5,6,'some item'];

// for (let i=0; i < array.length; i++){
//     console.log(array[i]);
// }

// array.forEach(function (item) {
//     console.log(item);
// });


/*
array.forEach(item => {
    console.log(item);
});
*/

// ES6
for (let item of array) {
    console.log('Item ', item);
}
