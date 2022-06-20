let imagen = document.querySelector('img')

function ocultar(){
    this.classList.toggle('magico');
}

imagen.addEventListener('mouseover', ocultar)
