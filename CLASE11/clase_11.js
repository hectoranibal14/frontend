/*
let str = 'Hello'
console.log(str[0])


let productos = ["iphone", "smart tv", "ipad"]
console.log(productos.length)
console.log(productos)
console.log(productos[0])
console.log(productos[1])
console.log(productos[2])
console.log(productos[0][1])

productos[3] = 'smart watch'
console.log(productos.length)
console.log(productos[3])

let coleccionRandom=["Hola", 22, true, null, function(){console.log("hello")}, ["hola", "chau"]] // Este Arreglo tiene distintos tipos de datos.
console.log(coleccionRandom[0])
console.log(coleccionRandom[1])
console.log(coleccionRandom[2])
console.log(coleccionRandom[3])
console.log(coleccionRandom[4])
console.log(coleccionRandom[5])
console.log(coleccionRandom[5][0])
console.log(coleccionRandom[5][1])
*/


let listaDeSuper = []

listaDeSuper[0] = 'Sal'
listaDeSuper[1] = 'Azúcar'
listaDeSuper[2] = 'Café'
listaDeSuper[3] = 'Yerba'
listaDeSuper[4] = 'Fideos'
listaDeSuper[5] = 'Mayonesa'
listaDeSuper[6] = 'Atún'
listaDeSuper[7] = 'Jugos'

let listaCopia = listaDeSuper.slice()

console.log(listaDeSuper)
console.log(listaCopia)


let indice = 0
let limite = listaDeSuper.length
/*
while (indice < limite - 1){
    console.log(`Tenemos ${listaDeSuper[indice]} disponible en stock`)
    indice ++
}
*/
let i
for (i = 0;  i < limite; i++){
    console.log(`Tenemos ${listaDeSuper[indice]} disponible en stock`)
}

listaDeSuper.forEach (elem => console.log(`Tenemos ${elem} disponible en stock`))
