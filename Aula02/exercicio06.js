//Importando a biblioteca prompt-sync
const prompt = require('prompt-sync')();

//Atribuindo valores a variaveis
let Nome = prompt('Digite o seu nome: ');
let idade = prompt('Digite a sua idade: ');

//Imprimindo o resultado
idade = Number(idade);
console.log ("Olá " + Nome + ", você tem " + idade + " anos de idade");