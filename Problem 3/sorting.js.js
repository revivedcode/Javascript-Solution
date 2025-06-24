//let num = [2,0,2,1,1,0];
//let sortNum = num.sort();
//console.log(sortNum);

//compare function solution
//let sortNum = num.sort((a, b) => a - b);

//console.log(sortNum);
// 10


//without sort() ascending the Array
let num = [10, 2, 8, 1, 5, 9, 0];

for(let i = 0; i < num.length; i++){
    for(let j = 0; j < num.length - 1 - i; j++){
        if(num[j] > num[j + 1]){
            //swap code or process
            let temp = num[j];
            num[j] = num[j + 1];
            num[j + 1] = temp;
        }
    }
}

console.log(num);