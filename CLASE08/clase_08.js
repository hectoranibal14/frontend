// declarar más de una variable en la misma declaración
// concatenar strings, ojo las comillas
let mensaje1 = "Hola",
    mensaje2 = "curso",
    mensaje3 = `Hola ${mensaje2}, como estan?`

let mensaje4 = `${mensaje1} ${mensaje2}, como están?`


/*
if (true){
    alert('dio true, entramos en la ejecución del if')
}

alert('acá sigue el código después del condicional')*/

/*
if (true){
    alert('dio true, entramos en la ejecución del if')
}
else{ 
    alert('dió false, entramos en la ejecución del else')}

alert('seguimos el código después del condicional') */

let temperatura = prompt('Ingresa tu temperatura: ');

if(typeof(temperatura) != 'number'){
    alert('tiene que ingresar un número');
    temperatura = prompt('Ingresa tu temperatura: ');
}

if (temperatura > 37.5){
    alert('Tenés fiebre')
}
else {
    alert('No tenés fiebre')
}

