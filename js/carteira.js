let botaoInserir = document.querySelector("#botao-inserir");
let saldoElement = document.querySelector(".saldo-total");
let saldoInput = document.querySelector("#input-saldo");

botaoInserir.addEventListener("click", function () {
  let numeroDigitado = saldoInput.value;

  if (!numeroDigitado || Number.isNaN(numeroDigitado)) {
    numeroDigitado = 0;
  }

  saldoElement.textContent = formataMonetario(parseFloat(numeroDigitado));

  document.querySelector("#input-saldo").value = "";
});

function formataMonetario(valor) {
  return "R$ " + valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
}
