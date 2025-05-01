const removeFromArray = function(array, ...num) {
    num.forEach(x => {
        let index = array.indexOf(x);
        if (index !== -1) array.splice(index, 1);
    });
    return array;
}

// Do not edit below this line
module.exports = removeFromArray;
