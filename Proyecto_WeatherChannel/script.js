let lugar = document.querySelector('input')
let botonEnviar = document.querySelector('button')
let ubicacion = document.querySelector('#ciudad')
let temperatura = document.querySelector('#temperatura')
let descripcion = document.querySelector('#descripcion')
let imagen = document.querySelector('#wicon')
let contenedor = document.querySelector(".container")

botonEnviar.addEventListener('click', cargarCiudad)

function cargarCiudad(){
    let ciudad = lugar.value
    if (ciudad == ''){
        alert('Por favor ingrese una ciudad')
    }
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+ciudad+"&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es", function(data) {
        console.log(data);
        ubicacion.textContent = data.name;
        temperatura.innerHTML = data.main.temp + '<sup>°C</sup>';
        imagen.src = 'http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png';
        descripcion.textContent = data.weather[0].description;
        contenedor.style.visibility = "visible";
        lugar.value = '';
    })
    .fail(function() {
        alert('Error! City not found')
        lugar.value = '';
    })
}
