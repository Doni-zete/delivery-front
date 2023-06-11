let formularioCadastro = document.querySelector(".formulario-corpo");
let resultadoElement = document.querySelector("#resultado");

formularioCadastro.addEventListener("submit", function (event) {
  event.preventDefault();

  let nome = document.querySelector("#nome").value;
  let descricao = document.querySelector("#descricao").value;
  let precoCompra = document.querySelector("#precoCompra").value;
  let precoVenda = document.querySelector("#precoVenda").value;

  if (
    nome === "" ||
    descricao === "" ||
    precoCompra === "" ||
    precoVenda === ""
  ) {
    showModal(
      "ATENÇÃO!\nVocê não preencheu os campos:\n Nome ou decrição ou preço de compra ou preço de venda.\n Verifique!"
    );
  } else {
    document.querySelector("#nome").value = "";
    document.querySelector("#descricao").value = "";
    document.querySelector("#precoCompra").value = "";
    document.querySelector("#precoVenda").value = "";

    showModal("Cadastro efetuado com sucesso!");

  }
});

function showModal(text) {
  alert(text);
}
