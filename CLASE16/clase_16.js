//declaración de una clase
/*class Auto{
    constructor(marca, modelo, año, color, precio){
        this.marca = marca
        this.modelo = modelo
        this.año = año
        this.color = color
        this.precio = precio
        this.resumen = `Este es un ${marca} ${modelo} año ${año} y está valuado en $${precio}`
    }
}

let autoFiat = new Auto ('Fiat', 'Palio', 2020, 'rojo', 2000000)

let autoRenault = new Auto ('Renault', 'Sandero', 2019, 'blanco', 1800000)

autoRenault['año']
autoRenault['color']

autoRenault.marca


let mar = prompt
let autoNuevo = new Auto(mar)


//agregar propiedad a una instancia en particular del objeto
autoRenault.transmision = "manual"
*/

//Métodos
class Auto{
    constructor(marca, modelo, año, color, precio){
        this.marca = marca
        this.modelo = modelo
        this.año = año
        this.color = color
        this.precio = precio
        this.fechaCotizacion = fechaIngreso
    }
    //se define el método dentro de la clase pero fuera del constructor
    ocultarPrecio(){
        this.precio = "Consultar"
    }

    actualizarPrecio(){
        let fechaActualizacion = prompt("fecha?")
        this.precio = precio * (fechaActualizacion - this.fechaCotizacion)
    }

}

let autoFiat = new Auto ('Fiat', 'Palio', 2020, 'rojo', 2000000)