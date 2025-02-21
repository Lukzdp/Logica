const prompt = require('prompt-sync')();
let numero = Number(prompt("Digite um numero: "));
let par = (numero%2==0);
console.log("O numero " + numero + " é par? " + par); //true