const prompt = require('prompt-sync')();
let prompt1 = prompt('Digite o primeiro número: ');
let prompt2 = prompt('Digite o segundo número: ');
console.log ("A soma dos números é: " + (Number(prompt1) + Number(prompt2)));
console.log ("A subtração dos números é: " + (Number(prompt1) - Number(prompt2)));
console.log ("A multiplicação dos números é: " + (Number(prompt1) * Number(prompt2)));
console.log ("A divisão dos números é: " + (Number(prompt1) / Number(prompt2)));