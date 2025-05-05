const fibonacci = function(number) {
// IF zero or "zero" is equal to number, return zero
    if (number === 0 || number === "0") return 0;

// IF number is less than zero return "OOPS"
    if (number < 0) return "OOPS"; 

// IF number is equal too one return one
    if (number === 1 || number === "1") return 1; 

// IF number is a string convert to number
    if (typeof number === String) parseInt(number);

// CREATE variables (a) = 1, (b) = 0, (r) = 0,
    a = 1;
    b = 0;
    r = 0;

// FOR i equal to 0, if i is less than number, add one to i
    for (let i = 1; i < number; i++) {

// LOOP function
        r = a + b;
        b = a;
        a = r;
    }

    return r;


};

// Do not edit below this line
module.exports = fibonacci;
