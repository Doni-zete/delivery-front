let formulario = document.querySelectorAll(".formulario-corpo");
let comprar = document.querySelectorAll(".butoom-comprar");
let vender = document.querySelectorAll(".butoom-vender");

for (let i = 0; i < vender.length; i++) {
  vender[i].addEventListener("click", function (event) {
    if (!event.target.classList.contains(".butoom-vender")) {
      alert("Venda realizada com sucesso");
    }
  });
}

for (let i = 0; i < comprar.length; i++) {
  comprar[i].addEventListener("click", function (event) {
    if (!event.target.classList.contains(".butoom-comprar")) {
      alert("Compra realizada com sucesso");
    }
  });
}

let aumentar = document.querySelector(".bi-plus-square");
let textoMoeda = document.querySelector(".valor-dinheiro");
let quantidadeMoeda = parseInt(textoMoeda.textContent);
let diminuir = document.querySelector(".bi-file-minus");

aumentar.addEventListener("click", function () {
  quantidadeMoeda++;
  textoMoeda.innerHTML = quantidadeMoeda;
});

diminuir.addEventListener("click", function () {
  if (quantidadeMoeda <= 1) {
    alert("A quantidade de produto não poide ser menor que 1");
  } else {
    quantidadeMoeda--;
    textoMoeda.innerHTML = quantidadeMoeda;
  }
});
