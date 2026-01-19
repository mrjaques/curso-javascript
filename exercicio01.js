var book = {
    topic: "JavaScript",
    fat: true,
};
book.author = "Flanagan";
book["fat"] = false;

console.log(book);

/* O resultado será um objeto com as propriedades topic, author e fat, onde fat é false */
