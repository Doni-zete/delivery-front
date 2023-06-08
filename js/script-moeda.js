let formulario = document.querySelectorAll(".formulario-corpo");
let comprar = document.querySelectorAll(".butoom-comprar");
let vender = document.querySelectorAll(".butoom-vender");
let coracao = document.querySelector(".bi-suit-heart-fill");

// for (let i = 0; i < vender.length; i++) {
//   vender[i].addEventListener("click", function (event) {
//     if (!event.target.classList.contains(".butoom-vender")) {
//       alert("Venda realizada com sucesso");
//     }
//   });
// }

// for (let i = 0; i < comprar.length; i++) {
//   comprar[i].addEventListener("click", function (event) {
//     if (!event.target.classList.contains(".butoom-comprar")) {
//       alert("Compra realizada com sucesso");
//     }
//   });
// }

let aumentar = document.querySelector(".bi-plus-square");
let textoMoeda = document.querySelector(".quantidade-dinheiro");

let quantidadeMoeda = parseInt(textoMoeda.textContent);
let diminuir = document.querySelector(".bi-file-minus");

aumentar.addEventListener("click", function () {
  quantidadeMoeda++;
  textoMoeda.innerHTML = quantidadeMoeda;
});

diminuir.addEventListener("click", function () {
  if (quantidadeMoeda <= 1) {
    alert("A quantidade de produto não pode ser inferior a 1");
  } else {
    quantidadeMoeda--;
    textoMoeda.innerHTML = quantidadeMoeda;
  }
});

coracao.addEventListener("click", function (event) {
  if (event.target.nodeName === "I") {
    event.target.classList.toggle("color-red");
  }
});

let botaoDiminuir = document.querySelector(".bi-file-minus");
let botaoAumentar = document.querySelector(".bi-plus-square");
let valorElement = document.querySelector(".valor-dinheiro");
let numeroArmazenado = 0;
let resultadoElement = document.querySelector("#valor-dinheiro-total");

botaoAumentar.addEventListener("click", function () {
  let valor = parseFloat(
    valorElement.textContent
      .replace("R$ ", "")
      .replace(".", "")
      .replace(",", ".")
  );
  numeroArmazenado += valor;

  resultadoElement.textContent =
    "R$ " +
    numeroArmazenado.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
});

botaoDiminuir.addEventListener("click", function () {
  let valor = parseFloat(
    valorElement.textContent
      .replace("R$ ", "")
      .replace(".", "")
      .replace(",", ".")
  );
  numeroArmazenado -= valor;

  resultadoElement.textContent =
    "R$ " +
    numeroArmazenado.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
});

let botaoComprar = document.querySelector("#butoom-comprar");


botaoComprar.addEventListener("click", function () {
  document.querySelector("#mensagem-sucesso").insertAdjacentHTML(
    "afterend",
    `<div class="card-moeda-gren">
    <span>Compra efetuada com sucesso</span>
    </div>
    `
    );
    let mensagem = document.querySelector(".card-moeda-gren");
    setTimeout(() => {
      mensagem.style.display = "none";
    }, 3000);
  });
  
  
  let botaoVender = document.querySelector("#butoom-vender");
  
  botaoVender.addEventListener("click", function () {
    document.querySelector("#mensagem-sucesso").insertAdjacentHTML(
    "afterend",
    `<div class="card-moeda-red">
    <span>Venda efetuada com sucesso</span>
    </div>
    `
  );
  let mensagem = document.querySelector(".card-moeda-red");
  setTimeout(() => {
    mensagem.style.display = "none";
  }, 3000);
  
});
