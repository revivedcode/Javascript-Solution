function missingNumber(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((a, b) => a + b, 0)
    return expectedSum - actualSum;
}

console.log(missingNumber([3, 0, 1]))// output : 2