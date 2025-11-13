// 7DaysOfCode - Lógica JS 3/7

let perguntaUm;
let perguntaDois;
let perguntaTres;
let respostaUm;
let respostaDois;

perguntaUm = Number (prompt ('Você deseja seguir para a área de Front-End ou Back-End? Digite 1 para Front e 2 para Back.'));

while (perguntaUm !== 1 && perguntaUm !== 2) {
    perguntaUm = Number (prompt ('Você deseja seguir para a área de Front-End ou Back-End? Digite 1 para Front e 2 para Back.'));
}

if (perguntaUm === 1) {
    respostaUm = 'Front-End';
} else {
    respostaUm = 'Back-End';
}

if (perguntaUm === 1) {
    perguntaDois = Number (prompt ('Deseja aprender React ou Vue? Digite 1 para React e 2 para Vue.'));
    while (perguntaDois !== 1 && perguntaDois !== 2) {
        perguntaDois = Number (prompt ('Deseja aprender React ou Vue? Digite 1 para React e 2 para Vue.'));
    }
    if (perguntaDois === 1) {
        respostaDois = 'React';
    } else {
        respostaDois = 'Vue';
    }
} else {
    perguntaDois = Number (prompt ('Deseja aprender C# ou Java? Digite 1 para C# e 2 para Java.'));
    while (perguntaDois !== 1 && perguntaDois !== 2) {
        perguntaDois = Number (prompt ('Deseja aprender C# ou Java? Digite 1 para C# e 2 para Java.'));
    }
    if (perguntaDois === 1) {
        respostaDois = 'C#';
    } else {
        respostaDois = 'Java';
    }
}

perguntaTres = Number (prompt (`Deseja continuar na área de ${respostaUm} ou pretende se tornar Fullstack? Digite 1 para continuar no ${respostaUm} e 2 para se tornar Fullstack.`));

while (perguntaTres !== 1 && perguntaTres !== 2) {
    perguntaTres = Number (prompt (`Deseja continuar na área de ${respostaUm} ou pretende se tornar Fullstack? Digite 1 para continuar no ${respostaUm} e 2 para se tornar Fullstack.`));
}

if (perguntaTres === 1) {
    alert (`Legal! Então você quer continuar na área de ${respostaUm} e aprender ${respostaDois}.`);
} else {
    alert (`Legal! Então você quer se tornar Fullstack e aprender ${respostaDois}.`);
}

// 4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. 
// Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: 
// “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o 
// nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.