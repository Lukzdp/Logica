//Importando a biblioteca prompt-sync
const prompt = require('prompt-sync')();

//Atribuindo valores a variaveis
let prompt1 = prompt('Digite o primeiro número: ');
let prompt2 = prompt('Digite o segundo número: ');
let prompt3 = prompt('Digite o terceiro número: ');

//Calculando a soma, subtração, multiplicação e divisão dos números
console.log ("A soma dos números é: " + (Number(prompt1) + Number(prompt2) + Number(prompt3)));
console.log ("A subtração dos números é: " + (Number(prompt1) - Number(prompt2) - Number(prompt3)));
console.log ("A multiplicação dos números é: " + (Number(prompt1) * Number(prompt2) * Number(prompt3)));
console.log ("A divisão dos números é: " + (Number(prompt1) / Number(prompt2) / Number(prompt3)));