const btnIniciar = document.querySelector('.btn-outline-success');
const btnPausar = document.querySelector('.btn-outline-warning');
const btnReiniciar = document.querySelector('.btn-outline-danger');
const temporizador = document.querySelector('h2');
let minuto;
let segundo;
let minutoInicial = minuto;
let segundoInicial = segundo;
let centesima = 0;
let idInterval;

function manejarTemporizador() {
    //para las validaciones de los prompts he usado un bucle while, nada más que para salir del bucle tenés que poner bien los minutos y los segundos, si cancelás te sigue mandando los prompts. En este caso cómo puedo hacer para salir con el cancelar? Debería poner alguna condición de que si minuto o segundo es null, que no se ejecute nada?
    while (isNaN(minuto) || isNaN(segundo)) {
        minuto = parseInt(prompt('Ingrese los minutos'));
        segundo = parseInt(prompt('Ingrese los segundos'));
        minutoInicial = minuto;
        segundoInicial = segundo;
    }
    if (minuto === 0 && segundo === 0 && centesima === 0) {
        temporizador.innerHTML = `0${minuto} : 0${segundo} : ${centesima}`
    } else {
        if (minuto < 10 && segundo < 10) {
            temporizador.innerHTML = `0${minuto} : 0${segundo} : ${centesima}`
            centesima--;
            if (centesima < 0) {
                centesima = 99;
                segundo--;
            }
            if (segundo < 0) {
                minuto--;
                segundo = 59;
            }
        } else if (segundo < 10) {
            temporizador.innerHTML = `${minuto} : 0${segundo} : ${centesima}`
            centesima--;
            if (centesima < 0) {
                segundo--;
                centesima = 99;
            }
            if (segundo < 0) {
                minuto--;
                segundo = 59;
            }
        } else if (minuto < 10) {
            temporizador.innerHTML = `0${minuto} : ${segundo} : ${centesima}`
            centesima--;
            if (centesima < 0) {
                segundo--;
                centesima = 99;
            }
            if (segundo < 0) {
                minuto--;
                segundo = 59;
            }
        } else {
            temporizador.innerHTML = `${minuto} : ${segundo} : ${centesima}`
            centesima--;
            if (centesima < 0) {
                segundo--;
                centesima = 99;
            }
            if (segundo < 0) {
                minuto--;
                segundo = 59;
            }
        }
    }

}

function iniciarTemporizador() {
    idInterval = setInterval(manejarTemporizador, 10)
    btnIniciar.disabled = true;
}
function pausarTemporizador() {
    clearInterval(idInterval);
    btnIniciar.disabled = false;
}
function reiniciarTemporizador() {
    clearInterval(idInterval);
    minuto = minutoInicial;
    segundo = segundoInicial;
    centesima = 0;
    if (minuto < 10 && segundo < 10) {
        temporizador.innerHTML = `0${minuto} : 0${segundo} : ${centesima}`
    } else if (minuto < 10) {
        temporizador.innerHTML = `0${minuto} : ${segundo} : ${centesima}`
    } else if (segundo < 10) {
        temporizador.innerHTML = `${minuto} : 0${segundo} : ${centesima}`
    } else {
        temporizador.innerHTML = `${minuto} : ${segundo} : ${centesima}`
    }
    btnIniciar.disabled = false;
}


manejarTemporizador()
btnIniciar.addEventListener('click', iniciarTemporizador);
btnPausar.addEventListener('click', pausarTemporizador);
btnReiniciar.addEventListener('click', reiniciarTemporizador);