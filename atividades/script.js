let relogio = document.getElementById("relogio")

function atualizarRelogio(){
    let data = new Date();
    let horas = data.getHours().toString().padStart(2, "0")
    let minutos = data.getMinutes().toString().padStart(2, "0")
    let segundos = data.getSeconds().toString().padStart(2, "0")
    
    let horario = horas + ":" + minutos + ":" + segundos
    
    relogio.innerText = horario
}

setInterval(atualizarRelogio, 1000)

let cronometro = document.getElementById("cronometro")
let iniciar = document.getElementById("iniciar")
let parar = document.getElementById("parar")
let zerar = document.getElementById("zerar")

let contando = false

let croseg = 0
let cromin = 0
let crohor = 0

function atualizarCronometro(){
    croseg +=1;
    
    if(croseg >=60){
        croseg = 0;
        cromin +=1;
    }
    if(cromin >=60){
        cromin = 0;
        crohor +=1;
    }
    
    cronometro.innerText = crohor.toString().padStart(2, "0") + ":" + cromin.toString().padStart(2, "0") + ":" + croseg.toString().padStart(2, "0")
    
    
}
let identificador   
function inicializarCronometro(){
    if(contando == false)
    identificador = setInterval(atualizarCronometro, 1000)
    contando = true
}

function pararCronometro(){
    clearInterval(identificador)
    contando = false
}
function zerarCronometro(){
    croseg = 0
    cromin = 0
    crohor = 0

    cronometro.innerText = crohor.toString().padStart(2, "0") + ":" + cromin.toString().padStart(2, "0") + ":" + croseg.toString().padStart(2, "0")
}

iniciar.addEventListener("click", inicializarCronometro)
parar.addEventListener("click", pararCronometro)
zerar.addEventListener("click", zerarCronometro)