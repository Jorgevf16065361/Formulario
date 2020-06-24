function validarn(e) {
    var teclado = (document.all) ? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[0-9\d .]/;
    var tec = String.fromCharCode(teclado);
    return patron.test(tec);
}

function interes() {
    var valor = document.formulario.cantidad.value;
    var result = parseInt(valor);
    if (result >= 1) {
        var interes = result * 0.02;
        var total = result + interes;
        document.formulario.sueldoti.value = "$" + total;
    } else {
        alert('no es positivo')
    }
}

function borrar1() {
    document.formulario.cantidad.value = "";
    document.formulario.sueldoti.value = "";

}