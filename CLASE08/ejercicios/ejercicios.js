
// Ejercicio 2
/*
let numero = prompt("Ingrese un número: ");
if (numero % 2 == 0){
    alert("El número ingresado es par.");
}
else {
    alert("El número ingresado es impar")
}
*/


// Ejercicio 4
/*
let edad=prompt("Ingrese su edad.")

if (edad < 0){
    alert("Error, su edad no es válida.")

} else {
    if (edad % 2 != 0){
        alert("¿Sabías que tu edad es impar?")
    }

    if(edad<18) {
        alert("No puede pasar al bar.")
    
    } else if(edad < 21){
        alert("Puede pasar al bar, pero no puede tomar alcohol.")
    
    } 
    else{
        alert("Puede pasar al bar y tomar alcohol.")
        if (edad == 21){
            alert("Felicidades por haber llegado a la mayoría de edad.")
        }
    }
}
*/


// Ejercicio 5
/*
let numero = prompt("Ingrese un número:")
let numeroSecreto = Math.ceil(Math.random() * 10)
if (numeroSecreto === Number(numero)){
    alert("Acertaste")
}
else{
    alert("NO acertaste")
}
*/


// Ejercicio 6

let sexo = prompt ("Ingrese sexo: 'F' (Femenino) - 'M' (Masculino").toUpperCase()
let edad = prompt ("Ingrese su edad:")

let edadMujer = 60
let edadHombre = 65
/*
if (sexo == 'F'){
    if (edad >= edadMujer){
        alert("Usted ya puede jubilarse")
    }
    else {
        alert("Todavía no puede jubilarse")
    }
}
else{
    if (edad >= edadHombre){
        alert("Usted ya puede jubilarse")
    }
    else {
        alert("Todavía no puede jubilarse")
    }
} */

if (((sexo == 'F') && (edad >= edadMujer)) || ((sexo == 'M') && (edad >= edadHombre))){
    alert("Usted ya puede jubilarse")
    }
    else {
        alert("Todavía no puede jubilarse")
}