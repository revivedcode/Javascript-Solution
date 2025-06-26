function numberToWords(num) {
    if (num === 0) return "Zero";

    // Words for numbers from 0 - 19   
    const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
        "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];

    // Words for tens multiples (20,30,40..)    
    const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eightly", "Ninety"];

    const thousands = ["", "Thousand", "Million", "Billion"];

    const toWords = (n) =>
        n === 0 ? "" :
            n < 20 ? ones[n] + " " :
                n < 100 ?
                    tens[Math.floor(n / 10)] + " " +
                    toWords(n % 10) :
                    ones[Math.floor(n / 100)] + " Hundred " + toWords(n % 100)

    let res = "", i = 0;

    while (num > 0) {
        if (num % 1000 !== 0)
            res = toWords(num % 1000) +
                thousands[i] + " " + res;
        num = Math.floor(num / 1000);
        i++;
    }

    return res.trim();
}

console.log(numberToWords("123456"));
console.log(numberToWords("9999"));
console.log(numberToWords("29999256"));