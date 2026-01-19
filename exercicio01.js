var book = {
    topic: "JavaScript",
    fat: true,
};
book.author = "Flanagan";
book["fat"] = false;

console.log(book);

/* O resultado será um objeto com as propriedades topic, author e fat, onde fat é false */

let saudacao = "hello";
console.log(saudacao[saudacao.length - 1]); // "o"

/* O resultado será a letra "o", que é o último caractere da string "hello" */