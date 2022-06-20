class Libro{
    constructor(nombre, autor, editorial, genero){
        this.nombre = nombre
        this.autor = autor
        this.editorial = editorial
        this.genero = genero
    }

    mostrarLibro(){
        return (`El libro ${this.nombre} de ${this.autor}, editorial ${this.editorial} y género ${this.genero}`)
    }
}

/*
let libro1 = new Libro()
let libro2 = new Libro()
let libro3 = new Libro()

let libros = []

libros.push(libro1)
libros.push(libro2)
libros.push(libro3)
*/

let Pinocho = new Libro('Pinocho', 'Steve Jobs', 'madera', 'infantil')
Pinocho.mostrarLibro()

let jobs = new Libro('Jobs', 'Steve Jobs', 'barco', 'biografia')
jobs.mostrarLibro()

let Riquelme = new Libro('Riquelme el ultimo 10', 'Horacio Pagani', 'Bokita', 'epico')
Riquelme.mostrarLibro()

let libros = []

libros.push(Pinocho)
libros.push(jobs)
libros.push(Riquelme)

function filtrarAutor(arreglo, autor){
    let arregloAux = []
    for (let i = 0; i < arreglo.length; i++){
        if(arreglo[i].autor == autor){
            arregloAux.push(arreglo[i].nombre)
        }
    }
    return arregloAux
}


function filtrarPorAutor(arreglo, autor){
    let arregloAux = []
    arreglo.forEach(element => {
        if (element.autor == autor){
            arregloAux.push(element.nombre)
        }
    })
    return arregloAux
}

//usando el metodo filter de arreglos, pero devuelve el instancia completa
function otraFormaDeFiltro (arreglo, autor){
    return arreglo.filter(element => element.autor === autor)
}

