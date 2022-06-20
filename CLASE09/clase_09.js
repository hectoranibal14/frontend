/*
while (condicion){
    //código que se ejecuta mientras se cumpla la condición
} */

/*
let pasajero = 1
while(pasajero <= 20){
  console.log("Puede pasar, su asiento es el: " + pasajero);
  pasajero++;
}

console.log("Esto se ejecutó cuando salió del primer while")


let pasajero2 = 20
while(pasajero2 >= 1){
    console.log("Puede bajar, dejó libre el asiento: " + pasajero2);
    pasajero2--;

}
 
console.log("Esto se ejecutó cuando salió del segundo while") */

/*
let palabraMagica = "¡Ábrete, sésamo!"

let intento = prompt("Dígame, ¿cuál es la Palabra Mágica?")

while(intento != palabraMagica){
  alert("Esa palabra es incorrecta")
  intento = prompt("Inténtelo nuevamente")
} 
alert("¡Bienvenido a La Caverna De Los 40 Ladrones!") */


/*
let cancion = ""
let elefantes = 1
let limite = 5

while(elefantes <= limite){
    if (elefantes == 1){
        cancion += elefantes + " elefante se balanceaba sobre la tela de una araña. Como veía que resistía, fueron a llamar a otro elefante. \n"
    }
    else{
        cancion += elefantes + " elefantes se balanceaban sobre la tela de una araña. Como veían que resistía, fueron a llamar a otro elefante. \n"

    }
    
    elefantes++
}

console.log(cancion) */

/*
let minutos = 5
let minutero = 1
let segundos = 60
let segundero = 1

while(minutero <= minutos){
  while(segundero < segundos){
    if (minutero == 1){
        if (segundero == 1){
            console.log(minutero + " minuto, " + segundero + " segundo.")
        }
        else{
            console.log(minutero + " minuto, " + segundero + " segundos.")
        }
    
    }
    else {
        if (segundero == 1){
            console.log (minutero + " minutos, " + segundero + " segundo.")
        }
        else {
            console.log (minutero + " minutos, " + segundero + " segundos.")
        }
    
    }
        
    segundero++  // Esta es la condición de corte o medida de seguridad del loop anidado.
  }
  segundero = 1  // Reestablecemos el valor de la variable para que vuelva a ser true.
  minutero++  // Esta es la condición de corte o medida de seguridad del loop madre.
}
*/


let input

while( !(input = prompt('Escriba su nombre, por favor.')) ){
  alert("No recibimos la información.")
}

alert("¡Gracias! Su nombre es: " + input + ".")
