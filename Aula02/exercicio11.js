//Importando a biblioteca 'prompt-sync'
const prompt = require('prompt-sync')();

//Atribuindo valores as variáveis
let valorcombustivel = Number(prompt('Digite o valor do combustível por litro: '));
let distancia = Number(prompt('Digite a distância percorrida em km: '));
let consumo = Number(prompt('Digite o consumo médio do veículo em km/l: '));

//Calculando a quantidade de litros necessária e o valor final
let litros = distancia / consumo;
let valorfinal = litros * valorcombustivel;

//Exibindo o resultado
console.log("A quantidade de litros necessária é: " + litros + " L");
console.log("O valor final é: R$" + valorfinal);