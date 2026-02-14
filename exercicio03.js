/* 
Converter números em strings
de maneiras que ofereçam controle 
sobre o número de casas decimais ou 
sobre o número de dígitos significativos na saída;
 */

/* 
A classe Number tem três métodos para converter um número em string,
controlando o número de dígitos ou casas decimais na saída:
toFixed() - controla o número de casas decimais
toExponential() - controla o número de dígitos significativos na notação científica
toPrecision() - controla o número de dígitos significativos na notação normal ou científica
*/

var n = 123456.789;
n.toFixed(0); // '123457'
n.toFixed(2);
n.toFixed(5); // '123456.78900'
n.toExponential(1); // '1.2e+5'
n.toExponential(3);
n.toPrecision(4); // '123500'
n.toPrecision(10); // '123456.7890'

