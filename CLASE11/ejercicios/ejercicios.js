// Ejercicio Lista del super
/*
let listaDeSuper = []

listaDeSuper[0] = 'Sal'
listaDeSuper[1] = 'Azúcar'
listaDeSuper[2] = 'Café'
listaDeSuper[3] = 'Yerba'
listaDeSuper[4] = 'Fideos'
listaDeSuper[5] = 'Mayonesa'
listaDeSuper[6] = 'Atún'
listaDeSuper[7] = 'Jugos'

console.log(listaDeSuper[0])

console.log (listaDeSuper.length)

let ultimoElemento = listaDeSuper.length - 1

console.log(listaDeSuper[ultimoElemento])

listaDeSuper.push('Leche')
console.log (listaDeSuper.length)

listaDeSuper.push('Huevos', 'Arroz', 'Harina')
console.log (listaDeSuper.length)
console.log (listaDeSuper[listaDeSuper.length - 1])

let elementoEliminado = listaDeSuper.pop()
console.log(elementoEliminado)

console.log (listaDeSuper.length)
console.log (listaDeSuper[listaDeSuper.length - 1])

console.log (listaDeSuper)

let elementosQuitados = []

elementosQuitados.push(listaDeSuper.pop())
console.log(elementosQuitados)

elementosQuitados.push(listaDeSuper.pop())

elementosQuitados.push(listaDeSuper.pop())

console.log(elementosQuitados)
*/

let nombres = []
nombres.push('Héctor', 'Franco', 'Gaston', 'Pablo', 'Juan')
console.log(nombres)

let amigo = prompt('Ingresa el nombre a verificar:')

checkAmigo(amigo)

function checkAmigo(amigo){
    if (nombres.indexOf(amigo) != -1){
        alert('Tengo un amigo que se llama ' + amigo)
    }
    else{
        alert('Sería bueno tener un amigo que se llame ' + amigo)
    }
}
