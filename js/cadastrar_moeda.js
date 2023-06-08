let formularioCadastro = document.querySelector(".formulario-corpo");
let resultadoElement = document.querySelector("#resultado");

formularioCadastro.addEventListener("submit", function (event) {
  event.preventDefault();

  let nome = document.querySelector("#nome").value;
  let  descricao= document.querySelector("#descricao").value;
//   let token = document.querySelector("#token").value;
  let precoCompra = document.querySelector("#precoCompra").value;
  let precoVenda = document.querySelector("#precoVenda").value;



  if (nome === "" || descricao === "" ||  precoCompra === ""|| precoVenda === "") {
    alert(
      "Você não preencheu os campos: nome ou decrição ou token ou preço de compra ou preço de venda. Verifique!"
    );
  } else {
   

    document.querySelector("#nome").value = "";
    document.querySelector("#descricao").value = "";
    document.querySelector("#precoCompra").value = "";
    document.querySelector("#precoVenda").value = "";

    setTimeout(() => {
        resultadoElement.style.display = "none";
    }, 3000);

    document.querySelector("#mensagem-sucesso").insertAdjacentHTML(
      "afterend",
      `<div class="card-teste">
          <span>Cadastro efetuado com sucesso</span>
          </div>
          `
    );
    let mensagem = document.querySelector(".card-teste");
    setTimeout(() => {
      mensagem.style.display = "none";
    }, 3000);
  }
  
  
});
