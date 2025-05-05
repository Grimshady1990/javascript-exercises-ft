const getTheTitles = function(books) {

    const val1 = Object.values(books[0]);

    const valSlice1 = val1.slice(0, val1.length - 1);

    const val2 = Object.values(books[1]);

    const valSlice2 = val2.slice(0, val2.length - 1);

    const bookTitles = valSlice1.concat(valSlice2);

    return bookTitles;
    
    
};

// Do not edit below this line
module.exports = getTheTitles;
