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

let poema = "Rosas são vermelhas, \nvioletas são azuis, \njavascript é incrível, \ne você também.";
console.log(poema);
/* O resultado será o poema impresso em múltiplas linhas, graças ao uso do caractere de nova linha \n */

