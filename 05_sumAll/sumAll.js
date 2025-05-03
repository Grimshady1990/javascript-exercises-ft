const sumAll = function(num1, num2) {
    let total = 0;
    let i = 0;
    for (i = 0; i <= num2; i++) {
        if (i >= num1 && num1 < num2) {
            total += i;
        }
        
    }
    return total;

};

// Do not edit below this line
module.exports = sumAll;
