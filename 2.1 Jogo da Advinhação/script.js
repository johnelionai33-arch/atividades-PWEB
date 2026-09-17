const numeroSecreto = Math.floor(Math.random() * 50) + 1;
let palpite;
let tentativas = 0;

while (palpite !== numeroSecreto) {
    let entrada = prompt("Adivinhe o número secreto (entre 1 e 50):");

    if (entrada === null) {
        alert("Jogo cancelado!");
        break;
    }

    palpite = parseInt(entrada);

    if (isNaN(palpite)) {
        alert("Por favor, digite um número válido!");
        continue;
    }

    tentativas++;

    if (palpite === numeroSecreto) {
        alert(`Parabéns! Você acertou o número secreto (${numeroSecreto}) em ${tentativas} tentativa(s)! 🎉`);
    } else if (palpite < numeroSecreto) {
        alert("O número secreto é MAIOR! Tente novamente.");
    } else {
        alert("O número secreto é MENOR! Tente novamente.");
    }
}
