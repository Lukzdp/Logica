const prompt = require('prompt-sync')();
let nome = (prompt("Digite o nome do aluno: "));
let ano = Number(prompt("Digite o ano de ensino (apenas numeros): "));
let serie = (ano==2);
console.log("O aluno " + nome + " está no segundo ano? " + serie); //true
