let formularioCadastro = document.querySelector(".formulario-corpo");
let resultadoElement = document.querySelector("#resultado");

formularioCadastro.addEventListener("submit", function (event) {
  event.preventDefault();

  let nome = document.querySelector("#nome").value;
  let email = document.querySelector("#email").value;
  let senha = document.querySelector("#senha").value;
  let repitaSenha = document.querySelector("#repitaSenha").value;

  if (nome === "" || email === "" || senha === "" || repitaSenha === "") {
    alert(
      "Você não preencheu os campos: nome ou email ou senha ou repita senha. Verifique!"
    );
  } else {
    let nomeElement = document.createElement("p");
    nomeElement.textContent = "Nome: " + nome;

    let emailElement = document.createElement("p");
    emailElement.textContent = "E-mail: " + email;

    let senhaElement = document.createElement("p");
    senhaElement.textContent = "Senha: " + senha;

    let repitaElement = document.createElement("p");
    repitaElement.textContent = "Repita Senha: " + repitaSenha;

    resultadoElement.innerHTML = "";

    resultadoElement.appendChild(nomeElement);
    resultadoElement.appendChild(emailElement);
    resultadoElement.appendChild(senhaElement);
    resultadoElement.appendChild(repitaElement);

    document.querySelector("#nome").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#senha").value = "";
    document.querySelector("#repitaSenha").value = "";


  
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
