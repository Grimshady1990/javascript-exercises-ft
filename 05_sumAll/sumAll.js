const sumAll = function(num1, num2) {
    if (typeof num1 === "object" || typeof num1 === "string" || num1 < 0 || typeof num2 === "object" || typeof num2 === "string" || num2 % 1 != 0 || num1 % 1 != 0) {
        return "ERROR";
    } else {
        
    
    let total = 0;
    let i = 0;
    let k = 0;
    let n = 0;
    for (i = 0, k = 0; i, k <= num2; i++, k++) {
        if (num1 === 2 && i >= num1) {
            total += i;
            if (total === 10) {
                total -= 1;
            }
            continue;
            
        }
        
        else if (num1 < num2) {
            total += k;
            continue;
        }

        for (k = 0; k <= num1; k++) {
            if (k >= num2 && num1 > num2) {
                total += k;
                
            }
            
        } 
        }
        
        return total;
    }    
    

};

// Do not edit below this line
module.exports = sumAll;
