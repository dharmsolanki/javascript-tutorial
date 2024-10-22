const arr = [0, 1, 2, 3, 4, 5];

// arr.pop();
// arr.push(6);

// arr.unshift(1); //add new element in first of an array
// arr.shift();  // remove the first element of an array

// const newArr = arr.join(); // return array elements as a string
// console.log(newArr);

// slice and splice

// const slice = arr.slice(1,3);
const splice = arr.splice(1,3); // splice remove elements from range start to end and its manipulate original array.
// console.log(arr);
// console.log(splice);


const marvel = ['Ironman', 'Thor', 'Spiderman'];

const dc = ['Batman', 'Superman', 'Flash'];

// push dc into marvel

// marvel.push(dc); // output:- [ 'Ironman', 'Thor', 'Spiderman', [ 'Batman', 'Superman', 'Flash' ] ]

// use concate method

// const newMarvel = marvel.concat(dc); // concat merge both arrays elements
// console.log(marvel); // output:- [ 'Ironman', 'Thor', 'Spiderman' ]
// console.log(newMarvel); // output:- [ 'Ironman', 'Thor', 'Spiderman', 'Batman', 'Superman', 'Flash' ]

//spread operator

// const spread_array = [...marvel, ...dc];

// console.log(spread_array); // output:- [ 'Ironman', 'Thor', 'Spiderman', 'Batman', 'Superman', 'Flash' ]

// const complex_array = [1,2,3,[4,5],6,7,[8,9,[10,11,12],[13,14],15]];

// const makeSimple_array = complex_array.flat(Infinity); // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// console.log(makeSimple_array)

console.log(Array.isArray("Dharm")); // check array or not

console.log(Array.from("Dharm")); // convert into array

console.log(Array.from({name:'dharm'})); // we can't convert directly object to array for keys and value we need to use other methods.

let a = 100;
let b = 200;
let c = 300;

console.log(Array.of(a,b,c)); //output :- [ 100, 200, 300 ]