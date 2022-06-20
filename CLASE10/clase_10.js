
// Definición de la funcíon
/*
function cantarCumple (){
    console.log("Que los cumplas feliz.")
    console.log("Que los cumplas feliz.")
    console.log("Que los cumplas, Julieta.")
    console.log("Que los cumplas feliz.")
}

//Ejecución y llamado a la función
cantarCumple ()
cantarCumple ()
cantarCumple ()
*/

//-------------------

/*
function fechaHora(){
    //objeto tipo fecha
    //para crear objetos -> new
    let hoyDia = new Date();
    console.log ("Hoy es " + hoyDia)
}

fechaHora()
*/

//-------------------

// Funciones con parámetros
/*
function cantarCumple (nombre){
    console.log("Que los cumplas feliz.")
    console.log("Que los cumplas feliz.")
    console.log("Que los cumplas, " + nombre)
    console.log("Que los cumplas feliz.")
}

let nombre = prompt ("Ingrese nombre: ")
cantarCumple (nombre)
cantarCumple (nombre)
*/

// Funciones con más de un parámetro
/*
function areaCuadrado (lado){
    console.log (lado*lado)
}

function areaRectangulo (base, altura){
    console.log(base*altura)
}

function saludarTres(nombre1, nombre2, nombre3) {
    console.log("Hola "+ nombre1)
    console.log("Hola "+ nombre2)
    console.log("Hola "+ nombre3)
  }
  saludarTres("Ron", "Harry", "Hermione") 
  saludarTres("Hermione", "Harry", "Ron")
*/

// Funciones con return
function cuadrado(numero) {
    return (numero * numero)
  }
console.log("El resultado de 4 al cuadrado es: " + cuadrado(4))



// Otra manera de declarar Funciones es usar Variables. Veamos un ejemplo:

let saludar2 = function(){
  console.log("Aloha")
} // En este caso, guardamos la Función dentro de la Variable y, luego, la ejecutamos.
saludar2()