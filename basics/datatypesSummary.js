// premitive datatypes

// 7 types :- String, Number, Boolean, null, undefined, Symbol, BigInt

// Non-Premitive datatypes or reference type

// Array, Objects, Functions

// Example Of Symbol datatype

// const id = Symbol('123');
// const anotherId = Symbol('123');

// pass values are same but symbol returns different that's why below condition is return false.
// console.log(id === anotherId)

// *************************** Memory ***************************

// 2 types of memory
// first is Stack Memory (Generally Premitive datatypes use this memory)
// second is Heap Memory (Generally Non-Premitive datatypes use this memory)

// Stack Memory => when user change the value of declare varialble using declare new variable so that time stack memory create a copy of original variable value so we can't change the original value,change only in copy.

let user = "Dharm";

let newUser = user;
newUser = "Chetan";

console.log("user.........",user) // Output:- Dharm
console.log("new user.........",newUser) // Output:- Chetan

// Heap Memory => When user chnage the value of an array or abject value so heap memory give directly the reference of original object or array, so this time change in original value.

let userOne = {
    email: "dharm@google.com",
    phone: 1111111111
}

let userTwo = userOne;

newUser.email = "chetan@google.com";

console.log("userOne.........",userOne.email); // Output:- chetan@google.com
console.log("userTwo.........",userTwo.email); // Output:- chetan@google.com