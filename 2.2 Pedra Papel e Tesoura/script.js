let entrada = prompt("Escolha: pedra, papel ou tesoura");

if (entrada !== null) {
    let escolhaJogador = entrada.toLowerCase().trim();

    if (escolhaJogador === "pedra" || escolhaJogador === "papel" || escolhaJogador === "tesoura") {
        let numeroAleatorio = Math.floor(Math.random() * 3);
        let escolhaComputador;

        if (numeroAleatorio === 0) {
            escolhaComputador = "pedra";
        } else if (numeroAleatorio === 1) {
            escolhaComputador = "papel";
        } else {
            escolhaComputador = "tesoura";
        }

        if (escolhaJogador === escolhaComputador) {
            alert("O computador escolheu: " + escolhaComputador + "\nResultado: Empate!");
        } else if (
            (escolhaJogador === "pedra" && escolhaComputador === "tesoura") ||
            (escolhaJogador === "papel" && escolhaComputador === "pedra") ||
            (escolhaJogador === "tesoura" && escolhaComputador === "papel")
        ) {
            alert("O computador escolheu: " + escolhaComputador + "\nResultado: Você venceu! 🎉");
        } else {
            alert("O computador escolheu: " + escolhaComputador + "\nResultado: Você perdeu!");
        }
    } else {
        alert("Opção inválida! Digite apenas 'pedra', 'papel' ou 'tesoura'.");
    }
} else {
    alert("Jogo cancelado!");
}
