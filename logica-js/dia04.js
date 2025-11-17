// 7DaysOfCode - Lógica JS 4/7

let palavraTentativas = 'tentativa';
let palavraTentativaRestantes; 
let numEscolhido = Math.floor (Math.random () * (10 - 1 + 1) + 1)
let tentativasRestantes = 2;
let tentativas = 1;
let chute = Number (prompt ('Chute um número qualquer entre 1 e 10:'));

while (isNaN (chute)) {
    chute = Number (prompt ('Chute um número qualquer entre 1 e 10:'));
}

while (chute < 1 || chute > 10) {
    chute = Number (prompt ('Chute um número qualquer entre 1 e 10:'));
}

if (chute === 9) {
    alert (`Parabéns! Você acertou o número com ${tentativas} ${palavraTentativas}!`);
} else {
    while (chute !== numEscolhido) {
        palavraTentativa = (tentativas > 1) ? "tentativas" : "tentativa";
        palavraTentativaRestantes = (tentativasRestantes == 2) ? "tentativas" : "tentativa";
        if (tentativasRestantes === 0) {
        alert (`O número escolhido era ${numEscolhido}.`);
        return;
        }
        alert (`O número não é esse, você tem mais ${tentativasRestantes} ${palavraTentativa}.`);
        tentativasRestantes--;
        tentativas++;
        chute = Number (prompt ('Chute um número qualquer entre 1 e 10:'));
    }

alert (`Parabéns! Você acertou o número com ${tentativas} ${palavraTentativas}!`);
}