let divo = document.querySelector('.toClickOrNotToClick')

let divoCtrl = document.querySelector('.divClickState')

//elemento a reaccionar, tipo de evento y que pasa cuando se dá el evento
/*
divo.addEventListener('click', function(){console.log('Pasó algo')})

function clickeado (){
    divo.style.backgroundColor = 'salmon';
    divo.style.fontSize = '300%';
    divo.textContent = 'APA!';
    divoCtrl.textContent = 'Al fin te clickearon!';
}

divo.addEventListener('click', clickeado)


//https://developer.mozilla.org/es/docs/Web/API/Element/insertAdjacentHTML#visualizacion_de_las_posiciones
divo.insertAdjacentHTML("afterbegin", '<p> Me agregaron con insertAdj </p>')

divo.insertAdjacentHTML("afterend", '<p> A mi también me agregaron con insertAdj, quedé fuera del div </p>')


let lis = document.querySelectorAll(".profesores > li")

for(let i = 0; i < lis.length; i++){
	lis[i].addEventListener("click", function(){
		this.style.color="red"
	})
}

// con funcion
function pintaRojo (){
    this.style.color = 'red'
}

for(let i = 0; i < lis.length; i++){
	lis[i].addEventListener("click", pintaRojo)
}

let parrafo = document.querySelector('p')

function resaltar (){
    parrafo.classList.add('resaltado')
}
parrafo.addEventListener('mouseover', resaltar)

function desResaltar (){
    parrafo.classList.remove('resaltado')
}

parrafo.addEventListener('mouseleave', desResaltar)



// Ejercicio beeper

let beep = document.querySelector('button')
beep.addEventListener('click', callback)

function callback(){
    document.body.insertAdjacentHTML("afterend", '<p> BEEP </p>')
}
*/

// Ejercicio resaltador

let parrafo1 = document.querySelectorAll('p')


for(let i = 0; i < parrafo1.length; i++){
	parrafo1[i].addEventListener("click", resaltar)
}

function resaltar(){
    this.classList.toggle('resaltado')
}


