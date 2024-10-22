// 2 methods for declare objects 1. literals 2. constructor

// constructor method

// Object.create

// object literals

const symbol = Symbol();
// console.log(symbol)

const JsUSer = {
    name: "Dharm",
    email: "dharm@gmail.com",
    age: 24,
    [symbol] : "Test" // use symbol as an object key
}

// access the values of object (2 methods for access value of object)]

// console.log(JsUSer.name);
// console.log(JsUSer["name"]); // preffer this method

// console.log(JsUSer[symbol]); // access the symbol key from object

// change the value of an object

// JsUSer['name'] = "Manan";

// Object.freeze(JsUSer); // restrict to change object values

// JsUSer['name'] = "Chetan";
// console.log(JsUSer)

JsUSer.hello = function() {
    console.log("hello")
}

JsUSer.greetings = function() {
    let sentense = `Hello my name is ${this.name}.`

    return sentense;
}
console.log(JsUSer.hello())
console.log(JsUSer.greetings())