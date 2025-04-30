const repeatString = function(string, num) {

    let globalString = "";
    
    for (let i = 0; i < num; i++) {
  
        globalString = globalString.concat(string);
    }
    return globalString;
}

repeatString("hey", 3);
repeatString("hello", 10);
repeatString("hi", 2);
repeatString("bye", 1);






// Do not edit below this line
module.exports = repeatString;
