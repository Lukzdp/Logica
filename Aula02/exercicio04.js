//Importando a biblioteca prompt-sync
const prompt = require('prompt-sync')();

//Atribuindo valores a variaveis
let largura = prompt('Digite o valor da largura: ');
let comprimento = prompt('Digite o valor do comprimento: ');

//Calculando a área do terreno
largura = Number (largura);
comprimento = Number (comprimento);
let area = largura * comprimento;

//Imprimindo o resultado
console.log ("A área do terreno é: " + area);
if (isNaN(area)) console.log ("ERRO: não foi possível calcular a área do terreno, pois a informação fornecida tem uma letra");

//Possibilidade de terrenos
if (area < 100) console.log ("Parabens!! Seu Terreno é Popular")
if (area > 100) console.log ("Parabens!! Seu Terreno é Master")
if (area = 100) console.log ("Parabens!! Seu Terreno é VIP")