let arr = ["apple", "mango", "apple", "orange", "mango", "mango"]
//let uniqueArr = [...new Set(arr)];

//console.log(uniqueArr);

// without using Set
// Loop based solution

let uniqueArr = [];

// for (let i = 0; i < arr.length; i++) {
//     if (!uniqueArr.includes(arr[i])) {
//         uniqueArr.push(arr[i]);
//     }
// }

// console.log(uniqueArr);

//map based solution

let seen = new Map();

for (let item of arr) {
    if (!seen.has(item)) {
        seen.set(item, true);
        uniqueArr.push(item);
    }
}

console.log(uniqueArr);

