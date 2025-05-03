const sumAll = function(num1, num2) {
    let total = 0;
    for (let i = 0; i <= num2; i++) {
        if (i >= num1) {
            total += i;
        }
    }
    return total;

};

// Do not edit below this line
module.exports = sumAll;
