const somar = require('./src/feature-soma');
const subtrair = require('./src/feature-subtracao');
const multiplicar = require('./src/feature-multiplicacao');
const dividir = require('./src/feature-divisao');
const potencia = require('./src/feature-potencia');
const media = require('./src/feature-media');

const a = 10;
const b = 2;
const lista = [4, 8, 15, 16];

console.log("Soma:", somar(a, b));
console.log("Subtração:", subtrair(a, b));
console.log("Multiplicação:", multiplicar(a, b));
console.log("Divisão:", dividir(a, b));
console.log("Potência:", potencia(a, b));
console.log("Média:", media(lista));