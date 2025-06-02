let data =
    [
        { name: 'a' },
        { name: 'c' },
        { name: 'b' },
        { name: 'a' },
        { name: 'b' },
        { name: 'c' }
    ];

let uniqueNames = new Set();

// let resultData = data.filter(item => {
//     if (uniqueNames.has(item.name)) {
//         return false;
//     } else {
//         uniqueNames.add(item.name);
//         return true;
//     }
// })



//ternary Operator

let resultData = data.filter(item => uniqueNames.has(item.name) ? false : (uniqueNames.add(item.name), true));
console.log(resultData);