//CoenraadS.bracket-pair-colorizer
//esbenp.prettier-vscode
//formulahendry.auto-rename-tag
//ritwickdey.LiveServer
//BeardedBear.beardedtheme

//Variables
let cantidadCuadros = 6
let cuadros = document.querySelectorAll('.square')
let mensaje = document.querySelector('#message')
let colorDisplay = document.querySelector('#colorDisplay')
let titulo = document.querySelector('h1')
let clickedColor
let botonReset = document.querySelector('#reset')
let color = []
let botonFacil = document.querySelector('#facil')
let botonDificil = document.querySelector('#dificil')


//completa el arreglo con los colores random
color = generateRandomColors(cantidadCuadros)

//asigna un color random del vector color
let pickedColor = color[pickColor()]

//asigna un color al display del titulo
colorDisplay.textContent = pickedColor.toUpperCase()

//asigna los colores del vector a los cuadros
for(let i=0; i<cuadros.length; i++){
    cuadros[i].style.backgroundColor = color[i];
}

for(i=0; i < cuadros.length; i++){
    cuadros[i].addEventListener('click', inicio)
}

botonReset.addEventListener('click', resetear)
botonFacil.addEventListener('click', seleccionFacil)
botonDificil.addEventListener('click', seleccionDificil)

//Funciones

    //
    function inicio () {
        clickedColor = this.style.backgroundColor
        if (pickedColor == clickedColor) {
            mensaje.textContent = "Correcto!!";
            titulo.style.backgroundColor = clickedColor;
            changeColors(clickedColor);
            botonReset.textContent = "Jugar Otra Vez"
        }
        else {
            this.style.backgroundColor = "#232323"; 
            mensaje.textContent = "Intentalo Nuevamente"
        }
    }

    //pone el color ganador en todos los cuadros
    function changeColors(valor){
        for (let i = 0; i < cuadros.length; i++){
            cuadros[i].style.backgroundColor = valor;
        }
    }
    
    //asignarle a pickedColor un color aleatorio del arreglo de colores.
    function pickColor(){
        resultado = Math.floor(Math.random() * color.length);
        return resultado;
    }

    //genera y devuelve un color aleatorio
    function randomColor(){
        let primero = Math.floor(Math.random() * 256);
        let segundo = Math.floor(Math.random() * 256);
        let tercero = Math.floor(Math.random() * 256);
        return "rgb("+primero+", "+segundo+", "+tercero+")";
    }

    //genera de forma aleatoria el Arreglo de colores usando la randomColor
    function generateRandomColors(valor){
        arreglo=[];
        for (let i = 0; i < valor; i++){
            arreglo[i] = randomColor();
        }
        return arreglo;
    }


    function resetear(){
        color = generateRandomColors(cantidadCuadros);
        pickedColor = color[pickColor()];
        colorDisplay.textContent = pickedColor.toUpperCase();
        for(let i=0; i<cuadros.length; i++){
            cuadros[i].style.backgroundColor = color[i];
        };
        botonReset.textContent = "Nuevos Colores";
        mensaje.textContent = "";
        titulo.style.backgroundColor = "#232323";

    }


    function seleccionFacil(){
        botonDificil.classList.remove('selected');
        botonFacil.classList.add('selected');
        cantidadCuadros = 3;
        color = generateRandomColors(cantidadCuadros);
        pickedColor = color[pickColor()];
        colorDisplay.textContent = pickedColor.toUpperCase();
        for(let i=0; i<cuadros.length; i++){
            if(color[i]){
                cuadros[i].style.backgroundColor = color[i];
            }
            else{
                cuadros[i].style.display = "none";
            }
        };
    }

    function seleccionDificil(){
        botonFacil.classList.remove('selected');
        botonDificil.classList.add('selected');
        cantidadCuadros = 6;
        color = generateRandomColors(cantidadCuadros);
        pickedColor = color[pickColor()];
        colorDisplay.textContent = pickedColor.toUpperCase();
        for(let i=0; i<cuadros.length; i++){
            cuadros[i].style.backgroundColor = color[i];
            cuadros[i].style.display = "block";
        };
    }