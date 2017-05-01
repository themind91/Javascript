var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {
  // acessando o pai de um elemento para remove-lo
    event.target.parentNode.classList.add("fadeOut");
});
