const palindromes = function (string) {

    let lowerCase = string.toLowerCase();

    let arrayOfChars = lowerCase.split('');

    let filteredChars = arrayOfChars.filter(char => char !== "!");
    let filteredChars2 = filteredChars.filter(char => char !== ".");
    let filteredChars3 = filteredChars2.filter(char => char !== " ");
    const filteredChars4 = filteredChars3.filter(char => char !== ",");

    console.log(filteredChars4);

    let arrayReversed = filteredChars4.reverse();
    const reverseString = arrayReversed.join("");
  
    let orderArray = filteredChars4.reverse();
    const orderString = orderArray.join("");
    
    return orderString === reverseString;
    

};

// Do not edit below this line
module.exports = palindromes;
