function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    let vowelsFind = [];

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
            vowelsFind.push(char)
        }
    }
    return { count, vowelsFind }
}

console.log(countVowels("Hello World"));                                               