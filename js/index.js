
resultadoElement.innerHTML = "";

resultadoElement.appendChild(nomeElement);
resultadoElement.appendChild(emailElement);
resultadoElement.appendChild(senhaElement);
resultadoElement.appendChild(repitaElement);

document.querySelector("#nome").value = "";
document.querySelector("#email").value = "";
document.querySelector("#senha").value = "";
document.querySelector("#repitaSenha").value = "";