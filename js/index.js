let cardMoeda = document.querySelector("#cards-moedas  ");

cardMoeda.addEventListener("click", function () {
  //   alert("Você clicou em um card!");
  document.querySelector("#mensagem-sucesso").insertAdjacentHTML(
    "afterend",
    `<div class="card-moeda-gren">
    <span>Muita calma nessa hora campeão. Esta página da Web não está disponível!
    </div>
    `
  );
  const mensagem = document.querySelector(".card-moeda-gren");
  setTimeout(() => {
    mensagem.style.display = "none";
  }, 3000);
});

let pesquisa = document.querySelector("#input-text");

pesquisa.addEventListener("click", function () {
  //   alert("Você clicou em um card!");
  document.querySelector("#mensagem-sucesso").insertAdjacentHTML(
    "afterend",
    `<div class="card-moeda-gren">
    <span>Aqui é onde você irá buscar as criptomoedas na base de dados!
    </div>
    `
  );
  const mensagem = document.querySelector(".card-moeda-gren");
  setTimeout(() => {
    mensagem.style.display = "none";
  }, 3000);
});



let avaliacaoPositivo = document.querySelector(".bi-hand-thumbs-up ");

avaliacaoPositivo.addEventListener("click", function () {
  //   alert("Você clicou em um card!");
  document.querySelector("#mensagem-sucesso").insertAdjacentHTML(
    "afterend",
    `<div class="card-moeda-gren">
    <span>Sua avaliação foi recebida!
    </div>
    `
  );
  const mensagem = document.querySelector(".card-moeda-gren");
  setTimeout(() => {
    mensagem.style.display = "none";
  }, 3000);
});


let avaliacaoNegativo = document.querySelector(".bi-hand-thumbs-down ");

avaliacaoNegativo.addEventListener("click", function () {
  //   alert("Você clicou em um card!");
  document.querySelector("#mensagem-sucesso").insertAdjacentHTML(
    "afterend",
    `<div class="card-moeda-red">
    <span>Sua avaliação foi recebida!
    </div>
    `
  );
  const mensagem = document.querySelector(".card-moeda-red");
  setTimeout(() => {
    mensagem.style.display = "none";
  }, 3000);
});
