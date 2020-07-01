//version 4 de jacacript

function validar(formulario) {

    if(formulario.nombre.value.length < 3) {
        alert("Escriba por lo menos 3 caracteres en el campo de Nombre")
        //focus() nos ayuda a focalizar donde esta el error del llenado 
        //realiza un posicionamiento al elemento

        formulario.nombre.focus();
        return (false);
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
        return (false);
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

    if(formulario.correo.value.length < 5) {
        alert("Escriba el correo con el formulario xxx.x@x.x")
        //focus() nos ayuda a focalizar donde esta el error del llenado 
        //realiza un posicionamiento al elemento

        formulario.correo.focus();
        return (false);


    }
    var txt = formulario.correo.value;
    //expresion regular
    var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/
    //ejemplo@ejemplo
    //ejemplo@ejemplo.ejemplo
    //todo lo que esta adentro [] es la expresion

    //para la creacion del curp
    //para una llave compartida de SSSDDDPDF

    alert("Email " + (b.test(txt) ? "" : "no") +"valido")
    //si b.text(txt) "" es verdadero : sino  "no" falso
    return b.test(txt);
}

function validaFecha(ano, mes, dia) {
    var anoNum = parseInt(ano, 10);
    var mesNum = parseInt(mes, 10)-1;
    var diaNum = parseInt(dia, 10);
    if ((anoNum<1900)||(anoNum>2100)) return false;
    var fechaAno = new Date(anoNum,1,1); // Para tener el año a 4 dígitos
    var fechaDate = new Date(anoNum, mesNum, diaNum); // Paso a fmt fecha
    return (fechaAno.getFullYear() == fechaDate.getFullYear() &&
            mesNum == fechaDate.getMonth()) ? "Fecha correcta" : "fecha incorrecta";
  }

  function validarr() {
    var ano = document.getElementById('ano').value ;
    var mes = document.getElementById('mes').value ;
    var dia = document.getElementById('dia').value ;
    alert(validaFecha(ano, mes, dia));
    return false;
  }

  function bisiesto(ano) {
    if ((ano<1900)||(ano>2100)) return false;
    return  (((ano % 4 == 0) && (ano % 100 != 0)) || (ano % 400 == 0))
  }

  
  function porcentaje(){

    var total, sexo, Nhombre=0, Nmujer=0, porcentaje;
                total= prompt("Cuantas personas hay en el salon?");
                for(personas=1;personas<=total;personas++){
                    sexo = prompt("Es hombre o mujer?", "hombre", "mujer");
                    if(sexo == "hombre"){
                        Nhombre++;
                        alert("Se ha añadido un hombre");
                    }
                    
                    if(sexo== "mujer"){
                        Nmujer++;
                        alert("Se ha añadido una mujer");
                    }
                }//for
                porcentaje = (Nhombre*100)/total;
                alert("El porcentaje de hombres es: "+porcentaje+"%");
                porcentajem = (Nmujer*100)/total;
                 alert("El porcentaje de mujeres es: "+porcentajem+"%");
    
            }
    
            function Edad() {
    
        var FechaNacimiento = document.getElementById('miEdad').value;
    
        var fechaNace = new Date(FechaNacimiento);
        var fechaActual = new Date()
    
        var mes = fechaActual.getMonth();
        var dia = fechaActual.getDate();
        var año = fechaActual.getFullYear();
    
        fechaActual.setDate(dia);
        fechaActual.setMonth(mes);
        fechaActual.setFullYear(año);
    
        edad = Math.floor(((fechaActual - fechaNace) / (1000 * 60 * 60 * 24) / 365));
       
    
        alert( 'La edad es: ' + edad + ' Años')
    
    }

