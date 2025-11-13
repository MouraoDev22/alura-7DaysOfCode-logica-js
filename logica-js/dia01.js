// 7DaysOfCode - Lógica JS 1/7

let numeroUm;
let stringUm;
let verificacaoString;

numeroUm = Number (prompt ('Digite um número para a variável "numeroUm":'))

while (isNaN (numeroUm)) {
    numeroUm = Number (prompt ('Digite um número para a variável "numeroUm":'))
}

stringUm = prompt ('Digite um número para a variável "stringUm":')

while (isNaN (stringUm)) {
    stringUm = prompt ('Digite um número para a variável "stringUm":')
}

verificacaoString = Number (prompt ('Quer manter a variável "stringUm" como uma string? Digite 1 para "Sim" e 2 para "Não".'));

while (verificacaoString !== 1 && verificacaoString !== 2) {
    verificacaoString = Number (prompt ('Quer manter a variável "stringUm" como uma string? Digite 1 para "Sim" e 2 para "Não".'));
}

if (verificacaoString == 1) {
    console.log (`numeroUm: ${numeroUm}. É um número`);
    console.log (`stringUm: ${stringUm}. É uma string`);
    compararValores (numeroUm, stringUm);
} else {
    stringUm = Number (stringUm);
    console.log (`numeroUm: ${numeroUm}. É um número.`);
    console.log (`stringUm: ${stringUm}. É um número.`);
    compararValores (numeroUm, stringUm);
}

function compararValores (numero, string) {
    if (Number (string) == numero && typeof (numero) !== typeof (string)) {
    console.log (`As variáveis ${numero} e ${string} têm o mesmo valor, mas tipos diferentes`);
    } else if (Number (string) == numero && typeof (numero) == typeof (string)) {
    console.log (`As variáveis ${numero} e ${string} têm o mesmo valor e mesmo tipo`);
    } else if (Number (string) !== numero && typeof (numero) == typeof (string)) {
    console.log (`As variáveis ${numero} e ${string} não têm o mesmo valor, mas tipos iguais`);
    } else {
    console.log (`As variáveis ${numero} e ${string} não têm o mesmo valor e mesmo tipo`);
    }
}