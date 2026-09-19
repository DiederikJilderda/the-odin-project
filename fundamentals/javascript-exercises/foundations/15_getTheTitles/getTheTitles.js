const getTheTitles = function(books) {
    // let list = [];
    // for (book of books) {
    //     list.push(book.title);
    // }
    // return list;

    return books.map(book => book.title);

};

// npm test getTheTitles.spec.js

// Do not edit below this line
module.exports = getTheTitles;
