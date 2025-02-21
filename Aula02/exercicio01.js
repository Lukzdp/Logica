// Importando a biblioteca prompt-sync
const prompt = require('prompt-sync')();

//Atribuindo valores a variaveis
let prompt1 = prompt('Digite o primeiro número: ');
let prompt2 = prompt('Digite o segundo número: ');

//Calculando a soma dos números e imprimindo o resultado
console.log ("A soma dos números é: " + (Number(prompt1) + Number(prompt2)));