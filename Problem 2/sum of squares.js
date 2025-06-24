const array = [1, 2, 3, 4];

const sumSquareFunc = () => {
    let value = array.map(item => item * item);
    let sumValue = value.reduce((nums, target) => (nums + target) , 0);

    console.log(sumValue);
}

sumSquareFunc()