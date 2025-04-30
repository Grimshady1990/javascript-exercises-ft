const repeatString = function(string, num) {

    let globalString = "";
    
    for (let i = 0; i < num; i++) {
  
        globalString = globalString.concat(string);
    }
    return globalString;
}

repeatString("hey", 3);






// Do not edit below this line
module.exports = repeatString;
