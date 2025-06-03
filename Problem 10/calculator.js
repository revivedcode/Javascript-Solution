function calculator(s) {
    let stack = [];
    let result = 0;
    let num = 0;
    let sign = 1;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char >= "0" && char <= "9") {
            num = num * 10 + parseInt(char);
        } else if (char === "-") {
            result += sign * num;
            sign = -1;
            num = 0;
        } else if (char === "+") {
            result += sign * num;
            sign = 1;
            num = 0;
        } else if (char === "(") {
            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1;
        } else if (char === ")") {
            result += sign * num;
            num = 0;
            result *= stack.pop();
            result += stack.pop();
        }
    }
    return result + sign * num;
}

console.log(calculator("1 + 1"));
console.log(calculator("2 - 1 + 2"));
console.log(calculator("(1+(4+5+2)-3)+(6+8)"));
console.log(calculator("(-(3+(2-1)))"));