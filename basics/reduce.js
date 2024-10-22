const nums = [1, 2, 3];

const total = nums.reduce((acc,currVal) => {

    console.log(`acc = ${acc} and curr = ${currVal}`);

    return acc + currVal;
},0);

console.log(total);


// acc = 0 and curr = 1
// acc = 1 and curr = 2
// acc = 3 and curr = 3
// 6