let botaoInserir = document.querySelector("#botao-inserir");
let saldoElement = document.querySelector(".saldo-total");

botaoInserir.addEventListener("click", function() {
  let saldoInput = document.querySelector("#input-saldo").value;

  saldoElement.textContent = formataMonetario(parseFloat(saldoInput));

  document.querySelector("#input-saldo").value = "";
});

function formataMonetario(saldoInput) {
  return "R$ " + saldoInput.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
}
