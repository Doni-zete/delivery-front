let botao = document.querySelector("#buttonEntrar");

botao.addEventListener("click", function () {
  let inputEmail = document.querySelector("#inputEmail").value;
  let inputSenha = document.querySelector("#inputSenha").value;

  //   let inputSenha = document.querySelector("#senha").value;
  if (inputEmail === "" || inputSenha === "") {
    alert("Você não preencheu os campos email ou senha");
  } else {
    // alert("Login realizado com sucesso");
    // document.querySelector("#mensagem-sucesso")
    document.querySelector("#mensagem-sucesso").insertAdjacentHTML(
      "afterend",
      `<div class="card-teste">
        <span>Login efetuado com sucesso</span>
        </div>
        `
    );
    let mensagem = document.querySelector(".card-teste");
    setTimeout(() => {
      mensagem.style.display = "none";
    }, 3000);
  }
  document.querySelector("#inputEmail").value = "";
  document.querySelector("#inputSenha").value = "";

});
