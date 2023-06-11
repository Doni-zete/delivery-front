let botaoInserir = document.querySelector("#botao-inserir");
let tabela = document.querySelector("#tabela-centro tbody");

botaoInserir.addEventListener("click", function () {
  let siglaInput = document.querySelector("#input-simbolo").value;
  let moedaInput = document.querySelector("#input-moeda").value;
  let valorInput = parseFloat(document.querySelector("#input-valor").value);
  let porcentagemInput = document.querySelector("#input-porcentagem").value;

  if (
    siglaInput === "" ||
    moedaInput === "" ||
    valorInput === "" ||
    porcentagemInput === "")
    {
      showModal("ATENÇÃO!\nVocê não preencheu os campos: SIGLA ou MOEDA ou VALOR ou PORCENTAGEM.\n Verifique!");
    } 
  else {
    if (!valorInput || Number.isNaN(valorInput)) {
      valorInput = 0;
    }

    let novaLinha = tabela.insertRow();

    let colunaSimbolo = novaLinha.insertCell();
    colunaSimbolo.textContent = siglaInput;

    let colunaMoeda = novaLinha.insertCell();
    colunaMoeda.textContent = moedaInput;

    let colunaValor = novaLinha.insertCell();
    colunaValor.textContent = formataPreco(valorInput);

    let colunaPorcentagem = novaLinha.insertCell();
    colunaPorcentagem.textContent = porcentagemInput;

    let colunaRemover = novaLinha.insertCell();
    let botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover";
    botaoRemover.classList.add("botao-remover");
    colunaRemover.appendChild(botaoRemover);

    botaoRemover.addEventListener("click", function () {
      let linha = this.parentNode.parentNode;

      linha.remove();
    });

    document.querySelector("#input-simbolo").value = "";
    document.querySelector("#input-moeda").value = "";
    document.querySelector("#input-valor").value = "";
    document.querySelector("#input-porcentagem").value = "";
  }
});

let botoesRemover = document.querySelectorAll(".botao-remover");

botoesRemover.forEach(function (botao) {
  botao.addEventListener("click", function () {
    let linha = this.parentNode.parentNode;

    linha.remove();
  });
});

function formataPreco(preco) {
  return preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function showModal(text) {
  alert(text);
}