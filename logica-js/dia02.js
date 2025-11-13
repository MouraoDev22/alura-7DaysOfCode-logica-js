// 7DaysOfCode - Lógica JS 2/7

let nome;
let idade;
let linguagem;
let mensagem;
let mensagemSimNao;

nome = prompt ('Qual o seu nome?');

while (Number (nome) == nome) {
    nome = prompt ('Qual o seu nome?');
}

idade = Number (prompt ('Quantos anos você tem?'));

while (isNaN (idade) === true) {
    idade = Number (prompt ('Quantos anos você tem?'));
}

linguagem = prompt ('Qual linguagem de programação você está estudando?');
mensagem = (`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`)
console.log (mensagem);
mensagemSimNao = Number (prompt (`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`));

while (mensagemSimNao !== 1 && mensagemSimNao !== 2) {
    mensagemSimNao = Number (prompt (`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`));
}

if (mensagemSimNao === 1) {
    alert ('Muito bom! Continue estudando e você terá muito sucesso.');
} else {
    alert ('Ahh que pena... Já tentou aprender outras linguagens?');
}