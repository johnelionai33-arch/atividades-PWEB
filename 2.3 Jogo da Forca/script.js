const palavras = [
    "JAVASCRIPT", "PYTHON", "PROGRAMACAO", "DESENVOLVEDOR", "COMPUTADOR",
    "ALGORITMO", "INTERNET", "TECLADO", "NAVEGADOR", "VARIAVEL",
    "FUNCAO", "SISTEMA", "SOFTWARE", "HARDWARE", "DISCIPLINA"
];

const palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
const letrasPalavra = palavraSecreta.split("");

let exibicao = [];
for (let i = 0; i < letrasPalavra.length; i++) {
    exibicao.push("_");
}

let tentativasRestantes = 6;
let letrasChutadas = [];

while (tentativasRestantes > 0 && exibicao.includes("_")) {
    let mensagem = `Palavra: ${exibicao.join(" ")}\n` +
                   `Tentativas restantes: ${tentativasRestantes}\n` +
                   `Letras já tentadas: ${letrasChutadas.join(", ")}\n\n` +
                   `Digite uma letra:`;

    let entrada = prompt(mensagem);

    if (entrada === null) {
        alert("Jogo cancelado!");
        break;
    }

    let chute = entrada.toUpperCase().trim();

    if (chute === "" || chute.length !== 1) {
        alert("Por favor, digite apenas UMA letra válida.");
        continue;
    }

    if (letrasChutadas.includes(chute)) {
        alert("Você já tentou essa letra! Tente outra.");
        continue;
    }

    letrasChutadas.push(chute);

    if (letrasPalavra.includes(chute)) {
        for (let i = 0; i < letrasPalavra.length; i++) {
            if (letrasPalavra[i] === chute) {
                exibicao[i] = chute;
            }
        }
    } else {
        tentativasRestantes--;
        alert(`A letra '${chute}' não está na palavra!`);
    }
}

if (!exibicao.includes("_")) {
    alert(`Parabéns! Você venceu! 🎉\nA palavra era: ${palavraSecreta}`);
} else if (tentativasRestantes === 0) {
    alert(`Fim de jogo! Você perdeu. ❌\nA palavra era: ${palavraSecreta}`);
}
