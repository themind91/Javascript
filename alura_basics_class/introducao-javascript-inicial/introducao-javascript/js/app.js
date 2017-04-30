calculaIMC(document.querySelectorAll(".paciente"));

function calculaIMC(pacientes){
  var imc =0;
  let isValid = "";
  for(var i=0; i<pacientes.length; i++){

     mensagem = validarCampos(pacientes[i]);
    if(mensagem == undefined || mensagem.length == 0){
      imc = pacientes[i].querySelector('.info-peso').textContent/(pacientes[i].querySelector('.info-altura').textContent*pacientes[i].querySelector('.info-altura').textContent);
      pacientes[i].querySelector('.info-imc').textContent = imc.toFixed(2);
    }else{
      pacientes[i].classList.add('paciente-invalido');
      pacientes[i].querySelector('.info-imc').textContent = mensagem;
    }

  }

}

function validarCampos(pacientes){
  var mensagem = "";
  if (pacientes.querySelector('.info-peso').textContent <= 0 || pacientes.querySelector('.info-peso').textContent > 200){
      mensagem = "peso invalido";

      return mensagem;
  }else if(pacientes.querySelector('.info-altura').textContent >= 3 || pacientes.querySelector('.info-altura').textContent <= 0){
    mensagem = ' altura invalida ';
    return mensagem;
  }else{
    return mensagem;
  }

}

var botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener('click',function(e){
  e.preventDefault();
  alert('you have been traced');
})
