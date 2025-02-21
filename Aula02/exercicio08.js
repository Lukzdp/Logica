//Imprtando a biblioteca prompt-sync
const prompt = require('prompt-sync')();

//Atribuindo valores a variaveis
let Nota1 = Number(prompt('Digite a primeira nota: '));
let Nota2 = Number(prompt('Digite a segunda nota: '));
let Nota3 = Number(prompt('Digite a terceira nota: '));
let Nota4 = Number(prompt('Digite a quarta nota: '));
let Nota5 = Number(prompt('Digite a quinta nota: '));
let peso1 = Number(prompt('Digite o peso da primeira nota: '));
let peso2 = Number(prompt('Digite o peso da segunda nota: '));
let peso3 = Number(prompt('Digite o peso da terceira nota: '));
let peso4 = Number(prompt('Digite o peso da quarta nota: '));
let peso5 = Number(prompt('Digite o peso da quinta nota: '));

//Imprimindo o resultado
let mediaponderada = ((Nota1 * peso1 + Nota2 * peso2 + Nota3 * peso3 + Nota4 * peso4 + Nota5 * peso5)) / (peso1 + peso2 + peso3 + peso4 + peso5);
console.log("A média ponderada é: " + mediaponderada + " pontos");


