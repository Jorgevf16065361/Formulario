//version 4 de jacacript

function validar(formulario) {

    if(formulario.nombre.value.length < 3) {
        alert("Escriba por lo menos 3 caracteres en el campo de Nombre")
        //focus() nos ayuda a focalizar donde esta el error del llenado 
        //realiza un posicionamiento al elemento

        formulario.nombre.focus();
        return false;
    }
    var checkok = "QWERTYUIOPÑLKJHGFDSAZXCVBNM" + "qwertyuiopñlkjhgfdsazxcvbnm";
    var checkString = formulario.nombre.value;

    alert(checkString);

    var aliValid = true;

    for (var i =0; i < checkString.length; i++) {
        //charAt nos ayuda a separar una cadena en caracteres
        var ch = checkString.charAtg(i);
        for (var j = 0; j <checkok.length; j++)
        if ( ch == checkok.charAt(j))
             break;
        if( j == checkok.length ) {
            aliValid = false;
            break;
        }
           
        }

         //debo saber el estado del aliValid
    if(!aliValid){
        alert("Escriba solo letras en el campo de Nombre");
        formulario.nombre.focus();
        return(false);
    }

    if(formulario.edad.value.length < 2) {
        alert("Escriba maximo 2 dijitos, o la maxima edad es de 99")
        //focus() nos ayuda a focalizar donde esta el error del llenado 
        //realiza un posicionamiento al elemento
        formulario.edad.focus();
        return false;
    }
    
    var checkok = "1234567890";
    var checkString = formulario.edad.value;

    alert(checkString);

    var aliValid = true;
    for (var i =0; i < checkString.length; i++) {
        //charAt nos ayuda a separar una cadena en caracteres
        var ch = checkString.charAtg(i);
        for (var j = 0; j <checkok.length; j++)
        if ( ch == checkok.charAt(j))
             break;
        if( j == checkok.length ) {
            aliValid = false;
            break;
        }

            
        }
    //debo saber el estado del aliValid
    if(!aliValid){
        alert("Escriba solo digitos en el campo de la edad");
        formulario.edad.focus();
        return(false);
    }
}