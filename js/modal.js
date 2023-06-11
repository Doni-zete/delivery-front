

  // exibir o modal com o texto fornecido
  function showModal(text) {
    var modal = document.getElementById("modal-pesquisar");
    var modalText = document.getElementById("modal-texto");
    modalText.innerText = text;
    modal.style.display = "block";
  }

  // fechar o modal ao clicar no "x"
  document.getElementsByClassName("fechar")[0].onclick = function() {
    var modal = document.getElementById("modal-pesquisar");
    modal.style.display = "none";
  };