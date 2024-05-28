function iniciarJuego() {
    let botonSeleccionar = document.getElementById('boton-seleccionar')
botonSeleccionar.addEventListener('click', seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {
    let inputCalamar = document.getElementById('calamar')
    let inputAraña = document.getElementById('araña')
    let inputDragon = document.getElementById('dragon')
    let inputAguila = document.getElementById('aguila')
    let inputLeopardo = document.getElementById('leopardo')
    let inputDuende = document.getElementById('duende')

    if (inputCalamar.checked) {
       alert("Seleccionaste a Calamar.") 
    } else if(inputAraña.checked) {
        alert("Seleccionaste a la Araña Gigante.")
    } else if(inputDragon.checked) {
        alert("Seleccionaste al Dragon Verde.")
    } else if(inputAguila.checked) {
        alert("Seleccionaste a El Aguila blanca.")
    } else if(inputLeopardo.checked) {
        alert("Seleccionaste al Leopardo gigante.")
    } else if(inputDuende.checked) {
        alert("Seleccionaste al Duende Magico.")
    } else {
        alert("Tonto")
    } 
}

window.addEventListener('load', iniciarJuego)