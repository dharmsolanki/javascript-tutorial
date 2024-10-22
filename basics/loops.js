// for (let i = 0; i < 10; i++) {

//     const element = i;
//     if(element === 3) {
//         console.log(`number is ${element}`)
//     }
//     console.log(element);
    
// }

// for (let i = 1; i <= 5; i++) {
    
//     console.log(`-----------------Table of ${i}`);

//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
    
// }

// const fruits = ["apple", "banana", "cherry", "date"];

// for (let index = 0; index < fruits.length; index++) {
//     const element = fruits[index];
//     console.log(element)
    
// }

// break and continue

// for (let i = 1; i <= 10; i++) {

//     if(i == 5) {
//         console.log("Detected 5");
//         break; // exit the loop
//     }
//     console.log(i)
    
// }

// for (let i = 1; i <= 10; i++) {

//     if(i == 5) {
//         console.log("Detected 5");
//         continue; // continue the loop
//     }
//     console.log(i)
    
// }


// while loop

// let a = 1;
// while (a <= 10) {

//     console.log(`value of a is ${a}`);

//     a++;
    
// }


// while loop with array

// let fruits = ["Apple", "Banana", "Pinaple"];

// let arr = 0;

// while (arr < fruits.length) {
//     console.log(fruits[arr]);
//     arr++;
// }

///////////////////// for of loop //////////////////

// const arr = [1,2,3,4,5];

// for (const i of arr) {
//     console.log(i);
// }

// Maps in Javascript

// const map = new Map();

// map.set("IND","India");
// map.set("USA","United States of America");
// map.set("Fr","France");

// console.log(map);

// // iterate using for of loop

// for (const [key,value] of map) { // itrate key and value sapretly
//     console.log(`${key} = ${value}`)
// }


//////////////////////// for each loop


const name = ['Dharm','Manan','Viram','Akshar'];

// 3 parameters of forEach function (element,index,array)

// name.forEach(function (element) {
//     console.log(element);
// });

// name.forEach((element) => {
//     console.log(element)
// });


// const nameFun = (element) => {
//     console.log(element)
// }

function nameFun (element,index) {
    console.log(element,index)
}

name.forEach(nameFun); // pass only function reference do not execute.