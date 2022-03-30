const botonSumar = document.querySelector('#btnSumar');
const botonRestar = document.querySelector('#btnRestar');
const botonMultiplicar = document.querySelector('#btnMultiplicar');
const botonDividir = document.querySelector('#btnDividir');
const numeroUno = document.querySelector('#numeroUno').value;
const numeroDos = document.querySelector('#numeroDos').value;
const mostrarResultado = document.querySelector('#mostrarResultado').value;
const mostrarResta = document.querySelector('#mostrarResta').value;
const mostrarMultiplicacion = document.querySelector('#mostrarMultiplicacion').value;
const mostrarDivision = document.querySelector('#mostrarDivision').value;
-
    console.log(numeroUno, numeroDos);


botonSumar.addEventListener('click', function () {
    const numeroUno = document.querySelector('#numeroUno').value;
    const numeroDos = document.querySelector('#numeroDos').value;
    const resultado = parseInt(numeroUno) + parseInt(numeroDos);
    const mostrarResultado = document.querySelector('#mostrarResultado');
    mostrarResultado.textContent = resultado;
    console.log(resultado);
});

botonRestar.addEventListener('click', function () {
    const numeroUno = document.querySelector('#numeroUno').value;
    const numeroDos = document.querySelector('#numeroDos').value;
    const resultado = parseInt(numeroUno) - parseInt(numeroDos);
    const mostrarResta = document.querySelector('#mostrarResta');
    mostrarResta.textContent = resultado;
})


botonMultiplicar.addEventListener('click', function () {
    const numeroUno = document.querySelector('#numeroUno').value;
    const numeroDos = document.querySelector('#numeroDos').value;
    const resultado = parseInt(numeroUno) * parseInt(numeroDos);
    const mostrarMultiplicacion = document.querySelector('#mostrarMultiplicacion');
    mostrarMultiplicacion.textContent = resultado;
})

botonDividir.addEventListener('click', function () {
    const numeroUno = document.querySelector('#numeroUno').value;
    const numeroDos = document.querySelector('#numeroDos').value;
    const resultado = parseInt(numeroUno) / parseInt(numeroDos);
    const validacion = "no se puede poner numero cero";
    if (numeroDos === "0") {
        const mostrarDivision = document.querySelector('#mostrarDivision');
        mostrarDivision.textContent = validacion;
    } else {
        const mostrarDivision = document.querySelector('#mostrarDivision');
        mostrarDivision.textContent = resultado;
    }

})