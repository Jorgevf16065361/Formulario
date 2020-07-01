//problema 1
function problema1() {
    //obtener los valores del input
    var p1_input = document.querySelector('#p1-input').value;
    //identifique como dividir el texto por espacios, meterlo en un arreglo
    var p1_array = p1_input.split(' ').reverse();
    //constuir la nueva cadena a partir de mi array invertido
    var p1_res = '';
    p1_array.forEach(function (palabra, i) {
        // es el principio o el final de la cadena y no agregamos espacio en blanco
        if(i != 0 || i!=p1_array.length) p1_res += ' ';
        p1_res += palabra;

        
    })
    //imprimir el resultado
    document.querySelector('#p1-output').textContent = p1_res;


    
}

//problema 2

function problema2(){
    //para encontrar el minimo producto escalar entre 2 vectores tenemos que realizar las operaciones correspondientes con el maximo valor de un vector por el minimo vector del otro

    var p2_x1 = document.querySelector('#p2-x1').value;
    var p2_x2 = document.querySelector('#p2-x2').value;
    var p2_x3 = document.querySelector('#p2-x3').value;
    var p2_x4 = document.querySelector('#p2-x4').value;
    var p2_x5 = document.querySelector('#p2-x5').value;
    var p2_y1 = document.querySelector('#p2-y1').value;
    var p2_y2 = document.querySelector('#p2-y2').value;
    var p2_y3 = document.querySelector('#p2-y3').value;
    var p2_y4 = document.querySelector('#p2-y4').value;
    var p2_y5 = document.querySelector('#p2-y5').value;
    //vamos por los vectores

    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];
    // ordenemos los vectores para realizar la operacion
    v1 = v1.sort(function(a,b){
        return b - a;

    });
    v2 = v2.sort(function(a,b){
        return b - a;

    });
    //invertir p2

    v2 = v2.reverse();

    //
    var p2_producto = 0;
    for (var i = 0; i < v1.length; i++){
        p2_producto += v1[i] * v2[i];
    }

    document.querySelector('#p2-output').textContent = 'Producto escalar minimo ' + p2_producto;


        
    }


//problema 3
function problema3(){

var alfabeto = ['Q', 'W', 'E', 'R', 'T', 'Y', 'I', 'O', 'P', 'A', 'S', 'D',
'F', 'G', 'H', 'J', 'K', 'L', 'Ñ', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];

var p3_input = document.querySelector('#p3-input').value;
var p3_palabras = p3_input.split(',');
//
p3_palabras = p3_palabras.map(function(palabra){
    return palabra.replace(/\s/g, '').toUpperCase();

});

//
var p3_res ='';
//
p3_palabras.forEach(function(palabras, i){
    //
    var lectras_unicas =[];
    var palabra_array = palabras.split('');
    //
    alfabeto.forEach(function(letra, j){
        //
        palabra_array.forEach(function(letra_palabra, k){
            //
            if(letra_palabra == letra){
                //
                if(lectras_unicas.indexOf(letra) < 0){
                    lectras_unicas.push(letra);
                }
            }
        });
    });
    p3_res += 'Palabra ' + palabras + ' = ' + 'Letras unicas ' + lectras_unicas.length + '\n';

});

document.querySelector('#p3-output').textContent = p3_res;
}