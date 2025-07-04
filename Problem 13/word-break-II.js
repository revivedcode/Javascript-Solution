let wordBreak = function (s, wordDict) {
    const wordSet = new Set(wordDict); // O(1)
    const memo = new Map();

    function backTrack(start) {
        if (start === s.length) return [''];
        if (memo.has(start)) return memo.get(start);

        const result = [];

        for (let end = start + 1; end <= s.length; end++) {
            const word = s.slice(start, end);
            if (wordSet.has(word)) {
                const subSentence = backTrack(end);
                for (const sentence of subSentence) {
                    result.push(word + (sentence ? " " + sentence : " "))
                }
            }
        }
        memo.set(start, result);
        return result;
    }
    return backTrack(0);
}

// const s = "catsanddog"
// const wordDict = ["cat", "cats", "and", "sand", "dog"];

const s = "pineapplepenapple"
const wordDict = ["apple", "pen", "applepen", "pine", "pineapple"];
const output = wordBreak(s, wordDict);

console.log(output);