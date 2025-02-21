// Importando a biblioteca prompt-sync
const prompt = require('prompt-sync')();

//Atribuindo valores a variaveis
let valor = prompt('Digite um valor: ');
let numero = Number(valor);

//Imprimindo o resultado
console.log('O número digitado foi: ' + numero);''