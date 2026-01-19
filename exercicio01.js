/*
  =======================================================
  EXERCÍCIO 01 - OPERADORES EM JAVASCRIPT
  =======================================================
*/

// 1. OPERADORES ARITMÉTICOS
// -------------------------------------------------------
let soma = 3 + 2;       // 5: Soma ou concatenação de strings
let sub = 3 - 2;        // 1: Subtração
let mult = 3 * 2;       // 6: Multiplicação
let div = 3 / 2;        // 1.5: Divisão

// 2. ATALHOS DE INCREMENTO E ATRIBUIÇÃO
// -------------------------------------------------------
let count = 0;
count++;                // Incrementa 1 (count vira 1)
count--;                // Decrementa 1 (count vira 0)
count += 2;             // O mesmo que: count = count + 2
count *= 3;             // O mesmo que: count = count * 3

// 3. OPERADORES DE COMPARAÇÃO (Resultam em true ou false)
// -------------------------------------------------------
let x = 2, y = 3;

console.log(x == y);    // false (igualdade)
console.log(x != y);    // true (desigualdade)
console.log(x < y);     // true (menor que)
console.log("two" > "three"); // true (ordem alfabética: 'tw' > 'th')

// 4. OPERADORES LÓGICOS
// -------------------------------------------------------
// && (E): Verdadeiro se AMBOS forem true
console.log((x == 2) && (y == 3)); // true

// || (OU): Verdadeiro se PELO MENOS UM for true
console.log((x > 3) || (y < 3));   // false

// ! (NÃO): Inverte o valor booleano
console.log(!(x == y));            // true

//Alguns exercicios abaixo.

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

