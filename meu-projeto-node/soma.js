function soma(a, b) {
  return a + b;
}
module.exports = soma;

const soma = require('./sum');
test('soma 1 + 2 = 3', () => {
  expect(soma(1, 2)).toBe(3);
});
