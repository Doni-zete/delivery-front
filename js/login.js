let botao = document.querySelector("#buttonEntrar");

botao.addEventListener("click", function(){
    let inputEmail = document.querySelector("#email").value;
    let inputSenha = document.querySelector("#senha").value;

    if(inputEmail === "" || inputSenha === "")   {
        alert("Você não preencheu os campos email ou senha")
    } else{
        alert("Login realizado com sucesso")
    }

    document.querySelector('#email').value = ""
    document.querySelector('#senha').value = ""

}
)
