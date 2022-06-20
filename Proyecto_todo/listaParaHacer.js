let entrada = document.querySelector('.input')
let botonAgregar = document.querySelector('.boton-agregar')
let contenedor = document.querySelector('.container')

class Item{
    constructor(nuevaTarea){
        this.crearDiv(nuevaTarea)
    }

    crearDiv(nuevaTarea){
        let inputItem = document.createElement('input')
        inputItem.type = 'text'
        inputItem.disabled = true
        inputItem.classList.add('item-input')
        inputItem.value = nuevaTarea

        let nuevoDiv = document.createElement('div')
        nuevoDiv.classList.add('item')

        let botonEditar = document.createElement('button')
        botonEditar.innerHTML= '<i class="fas fa-lock"></i>'
        botonEditar.classList.add('boton-editar')

        let botonRemover = document.createElement('button')
        botonRemover.innerHTML= '<i class="fas fa-trash"></i>'
        botonRemover.classList.add('boton-remover')

        nuevoDiv.appendChild(inputItem)
        nuevoDiv.appendChild(botonEditar)
        nuevoDiv.appendChild(botonRemover)

        contenedor.appendChild(nuevoDiv)
        
        
        botonEditar.addEventListener("click", function editarItem(){
            inputItem.disabled = !inputItem.disabled
            if (inputItem.disabled != true){
                this.innerHTML= '<i class="fas fa-lock-open"></i>'
            }
            else {
                this.innerHTML= '<i class="fas fa-lock"></i>'
            }
        })

        
        botonRemover.addEventListener("click", function borrarItem(){
            nuevoDiv.removeChild(inputItem)
            nuevoDiv.removeChild(botonEditar)
            nuevoDiv.removeChild(botonRemover)
        })

    }

}


let lista = []
function chequearInput(){
        if (entrada.value != false){
            lista.push(new Item(entrada.value))
            entrada.value = ''
        }
        else{           
            waring("Agrege alguna tarea")
        }
}

botonAgregar.addEventListener("click", chequearInput)

