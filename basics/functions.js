// function addTwoNumbers (num1,num2) {
//     console.log(num1 + num2);
// }
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

let result = addTwoNumbers(1, 2); // if function can't return any value then we can not store function value in variable.
console.log(result);

function calculateCartPrice(...num) { // use spread or rest operator for store multiple values
  return num;
}

console.log(calculateCartPrice(100,200))