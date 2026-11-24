let pontosJogador = 0;
let pontosComputador = 0;

function jogar(jogador) {
 
  const opcoes = ["pedra", "papel", "tesoura"];
  const computador = opcoes[Math.floor(Math.random() * 3)];
  let mensagem = "";

  if (jogador === computador) {
    mensagem = "Empate!";
  } else if (
    (jogador === "pedra" && computador === "tesoura") ||
    (jogador === "papel" && computador === "pedra") ||
    (jogador === "tesoura" && computador === "papel")
  ) {
    mensagem = "Você ganhou!";
    pontosJogador = pontosJogador + 1;
  } else {
    mensagem = "Você perdeu!";
    pontosComputador = pontosComputador + 1;
  }

  document.getElementById("resultado").textContent = "Computador: " + computador + ". " + mensagem;
  document.getElementById("pontosJogador").textContent = pontosJogador;
  document.getElementById("pontosComputador").textContent = pontosComputador;
}

function zerar() {
  pontosJogador = 0;
  pontosComputador = 0;
  document.getElementById("resultado").textContent = "Escolha sua jogada!";
  document.getElementById("pontosJogador").textContent = 0;
  document.getElementById("pontosComputador").textContent = 0;
}

// Atajos de teclado: 1, 2, 3 para jugar y R para reiniciar
document.addEventListener("keydown", function (e) {
  const tecla = e.key.toLowerCase();
  if (tecla === "1") jogar("pedra");
  if (tecla === "2") jogar("papel");
  if (tecla === "3") jogar("tesoura");
  if (tecla === "r") zerar();
});