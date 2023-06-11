let formularioCadastro = document.querySelector(".formulario-corpo");
let resultadoElement = document.querySelector("#resultado");

formularioCadastro.addEventListener("submit", function (event) {
  event.preventDefault();

  let nome = document.querySelector("#nome").value;
  let email = document.querySelector("#email").value;
  let senha = document.querySelector("#senha").value;
  let repitaSenha = document.querySelector("#repitaSenha").value;

  if (nome === "" || email === "" || senha === "" || repitaSenha === "") {
    showModal(
      "ATENÇÃO!\nVocê não preencheu os campos:\n Nome ou email ou senha ou repita senha.\n Verifique!"
    );
  } else {
    
    showModal("Cadastro efetuado com sucesso");
    
    document.querySelector("#nome").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#senha").value = "";
    document.querySelector("#repitaSenha").value = "";
  }
});
