//Importando a biblioteca prompt-sync
const prompt = require('prompt-sync')();

//Atribuindo valores
let dolar = 5.72
let Real = prompt('Digite o valor em Real: ');

//Imprimindo o resultado
Real = Number(Real);
let conversao = Real / dolar;
console.log ("O valor em dólar é: " + conversao + " USD");