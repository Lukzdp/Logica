//Importando a biblioteca prompt-sync
const prompt = require('prompt-sync')();

//Atribuindo valores a variaveis
let basemaior = Number(prompt('Digite a base maior do trapézio: '));
let basemenor = Number(prompt('Digite a base menor do trapézio: '));
let altura = Number(prompt('Digite a altura do trapézio: '));

//Imprimindo o resultado
console.log("A área do trapézio é: " + ((basemaior + basemenor) * altura) / 2 + " unidades de área");