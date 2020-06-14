//version 4 de jacacript

function validar(formulario) {

    if(formulario.nombre.value.length < 3) {
        alert("Escriba por lo menos 3 caracteres en el campo de Nombre")
        //focus() nos ayuda a focalizar donde esta el error del llenado 
        //realiza un posicionamiento al elemento

        formulario.nombre.focus();
        return false;
    }