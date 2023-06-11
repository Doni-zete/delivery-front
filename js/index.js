let cardMoeda = document.querySelector("#cards-moedas  ");
let avaliacaoPositivo = document.querySelector(".bi-hand-thumbs-up ");
let avaliacaoNegativo = document.querySelector(".bi-hand-thumbs-down ");

cardMoeda.addEventListener("click", function () {
  showModal("Muita calma nessa hora campeão!!!\n Esta página da Web não está disponível!" );

});

avaliacaoPositivo.addEventListener("click", function () {
  showModal("Sua avaliação foi recebida!" );
  
});

avaliacaoNegativo.addEventListener("click", function () {
  showModal("Sua avaliação foi recebida!" );
});

//api
function consultaMoeda() {
  let moeda = document.querySelector("#input-text").value.toUpperCase();
 

  let url = "https://www.mercadobitcoin.net/api/" + moeda + "/ticker/";

  fetch(url)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          let preco = Number(data.ticker.last);
        
          let formatarPreco = formataPreco(preco, 2); 
          showModal("Valor da CriptoMoeda (" + moeda  + ") " + formatarPreco);
        })
        .catch(function(){
          showModal("ATENÇÃO\nErro ao consultar valor da moeda!\n O campo sigla moeda esta vazio \n ou incorreto \n Por favor, preencha novamente!!! \n" );
        });

        document.querySelector("#input-text").value = "";
    }

    //exibir o modal 
    function showModal(text) {
      alert(text);
    }

    // formato de moeda
    function formataPreco(preco, casasDecimais) {
      let parteInteira = Math.floor(preco).toLocaleString("pt-BR");
      let parteDecimal = preco.toFixed(casasDecimais).split(".")[1];
      let formatarPreco = "\nR$ " + parteInteira + "," + parteDecimal;
      return formatarPreco;
    }
