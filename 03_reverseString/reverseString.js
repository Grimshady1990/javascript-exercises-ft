const reverseString = function(word) {
    let splitWord = word.split("");
    let revWord = splitWord.reverse();
    let joinWord = revWord.join("");
    return joinWord;
};

// Do not edit below this line
module.exports = reverseString;
