calculaIMC(document.querySelectorAll(".paciente"));
var mensagem = "";
function calculaIMC(pacientes){
  var imc =0;
  let isValid = "";
  for(var i=0; i<pacientes.length; i++){

     isValid = validarCampos(pacientes[i].querySelector('.info-peso').textContent,pacientes[i].querySelector('.info-altura').textContent);
    if(isValid == undefined || isValid.length == 0){
      imc = pacientes[i].querySelector('.info-peso').textContent/(pacientes[i].querySelector('.info-altura').textContent*pacientes[i].querySelector('.info-altura').textContent);
      pacientes[i].querySelector('.info-imc').textContent = imc;
    }else{
      pacientes[i].querySelector('.info-imc').textContent = mensagem;
    }

  }

}

function validarCampos(peso,altura){
  mensagem = "";
  if (peso <= 0 || peso > 200){
      mensagem = "peso invalido";
      return mensagem;
  }else if(altura >= 3 || altura <= 0){
    mensagem = ' altura invalida ';
    return mensagem;
  }else{
    return mensagem;
  }


}
