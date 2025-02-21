//Importando a biblioteca prompt-sync
const prompt = require('prompt-sync')();

//Atribuindo valores a variaveis
let Nota1 = prompt('Digite a primeira nota: ');
let Nota2 = prompt('Digite a segunda nota: ');
let Nota3 = prompt('Digite a terceira nota ');

//Calculando a média das notas
let soma = Number(Nota1) + Number(Nota2) + Number(Nota3);
let media = soma / 3;

//Imprimindo o resultado
console.log ("A média das notas é: " + media);