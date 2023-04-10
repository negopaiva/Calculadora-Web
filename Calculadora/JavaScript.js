function insert(Num){
   var Numero = document.getElementById('Result').innerHTML ;
    document.getElementById('Result').innerHTML = Numero + Num; 
}



function Clear(){
    document.getElementById('Result').innerHTML = "";
}

function Back(){
    var Resultado = document.getElementById('Result').innerHTML;
    document.getElementById('Result').innerHTML = Resultado.substring(0, Resultado.length -1);
}


function Calcular(){

    var Resultado = document.getElementById('Result').innerHTML;
    if(Resultado){
        document.getElementById('Result').innerHTML = eval(Resultado);
    }
    else{
        document.getElementById('Result').innerHTML = "Nada Para Calcular!";
    }
}

document.getElementById('Cabeçalho').innerHTML = "calculadora".toUpperCase();