var a = [];
a.push("A");
a.push("B");
a.push("C");
console.log(a);
// O resultado será um array com os elementos "A", "B" e "C"

a.reverse();
console.log(a);
// após a inversão, o array será ["C", "B", "A"]

function fator(n){
    var produto = 1;
    while(n > 1){
        produto *= n;
        n -- ;
    }
    return produto;
}
console.log(fator(5)); // 120
/* O resultado será 120, que é o fatorial de 5 (5 * 4 * 3 * 2 * 1) */



