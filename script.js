var botaoLigar = document.querySelector("#botaoligar")
var botaoDesligar = document.querySelector("#botaodesligar")
var lampada = document.querySelector("#lampada")
var cont = 0

function ligar(){
    lampada.src = 'img/ligada.jpg'
    cont++
    if(cont >4){
      lampada.src = 'img/quebrada.jpg'  
    }
}
function desligar(){
    lampada.src = 'img/desligada.jpg'
}
function quebrar(){
    lampada.src = 'img/quebrada.jpg'
}
botaoLigar.addEventListener('click',ligar)
botaoDesligar.addEventListener('click',desligar)
lampada.addEventListener('click',quebrar)
console.log(botaoLigar)