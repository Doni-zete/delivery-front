let botao = document.querySelector("#buttonEntrar");

botao.addEventListener("click", function () {
  let inputEmail = document.querySelector("#inputEmail").value;
  let inputSenha = document.querySelector("#inputSenha").value;


  if (inputEmail === "" || inputSenha === "") {
    showModal("ATENÇÃO!\nVocê não preencheu os campos:\n Email ou Senha\n Verifique!");
  } else {
    showModal("Login efetuado com sucesso");
  }
  document.querySelector("#inputEmail").value = "";
  document.querySelector("#inputSenha").value = "";
});
