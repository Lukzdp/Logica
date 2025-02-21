//Importando biblioteca prompt-sync
const prompt = require('prompt-sync')();

//Atribuindo valores a variaveis
let valordekg = Number(41.90);
let convidados = Number(prompt('Digite a quantidade de convidados: '));
let gramas = Number(0.4);

//Calculando a quantidade de carne necessária e o valor final
let quantidadedecarne = convidados * gramas;
let valorfinal = quantidadedecarne * valordekg;

//Imprimindo o resultado
console.log("A quantidade de carne necessária é: " + quantidadedecarne + " kg");
console.log("O valor final é: R$" +valorfinal);