// normal function

// function one() {
//     console.log(this);
// }

// one(); // output:- global object


// arrow function


// const two = () => {
//     console.log(this)
// }

// two(); // output:- blank object

// const test = (num1,num2) =>  num1 + num2;

// Explanation:

//     This is an arrow function in JavaScript.
//     The expression num1 + num2 is implicitly returned. This means that you don't need to write the return keyword explicitly.
//     This type of implicit return works when the function body contains a single expression.

// console.log(test(1,2));

// const addTwo = (n1,n2) => ({username:"dharm"});

//IIFE (immediately invoke function expression)

(function test () {
    console.log("DB Connected");
})(); // immediately invoke

(() => {
    console.log("immediate invoke using Arrow function");
})();
