var paciente = createPaciente(document.querySelector("#primeiro-paciente"));
var mensagem = "";
paciente.imc.textContent = calculaIMC(paciente.peso,paciente.altura);



function calculaIMC(peso,altura){

  if(validarCampos(peso,altura).length == 0){
      return peso / (altura*altura);
  }else{

    return mensagem;
  }
}
function createPaciente(paciente){
  var novoPaciente = {peso:Number(paciente.querySelector(".info-peso").textContent)
                     ,altura: Number(paciente.querySelector(".info-altura").textContent)
                     ,imc:paciente.querySelector(".info-imc")}

  return novoPaciente;
}

function validarCampos(peso,altura){
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
