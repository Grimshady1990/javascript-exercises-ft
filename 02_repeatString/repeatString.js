const repeatString = function(string, num) {
    let i = 0;
    let globalString = "";
    if (num >= 0) {
    for (i = 0; i < num; i++) {
  
        globalString = globalString.concat(string);
    }
    return globalString;
    } else {
        return "ERROR";
    }
}
let number = Math.floor(Math.random() * 1000);
repeatString("hey", 3);
repeatString("hello", 10);
repeatString("hi", 2);
repeatString("bye", 1);
repeatString("goodbye" -1);
repeatString("hey", number);
repeatString("", 10);






// Do not edit below this line
module.exports = repeatString;
