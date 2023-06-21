let botao = document.getElementById('botao')
let inputE = document.getElementById('iEmail')
let textoE = document.getElementById('textoE')

function mostrar(){
    if(validatorEmail(inputE.value) !== true){
        document.getElementById('att').style.display = "block";
        document.getElementById('iEmail').classList.add('vermei');
    }else{
    let atv = document.getElementsByClassName('esconder');
    if(atv.length > 1){
        atv[0].classList.remove('esconder')
    }
    document.getElementById('aparece1').classList.add('esconder')
    textoE.innerHTML = inputE.value;
}
}

function validatorEmail(inputE) {
    let emailPattern =
      /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(inputE);
  }