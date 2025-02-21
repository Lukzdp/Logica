//Importando a biblioteca prompt-sync
const prompt = require('prompt-sync')();

//Atribuindo valores a variaveis
let Anostrabalhados = prompt('Digite o número de anos trabalhados: ');
let mesestrabalhados = prompt('Digite o número de meses trabalhados: ');

//Calculando o total de meses trabalhados
let divisao = Number(Anostrabalhados) *12
let mesestotais = divisao + Number(mesestrabalhados);

//Imprimindo o resultado
console.log ("o total de meses trabalhados é: " + mesestotais);