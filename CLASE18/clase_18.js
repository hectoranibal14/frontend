/*$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es", function(data) {
    console.log(`${data.main.temp}º`)
*/
/*
$.getJSON("https://api.chucknorris.io/jokes/random", function(data) {
    console.log(data)})
*/

let botonActualizar = document.querySelector('button')
let h2 = document.querySelector('h2')

botonActualizar.addEventListener('click', chisteNuevo)

function chisteNuevo(){
    $.getJSON("https://api.chucknorris.io/jokes/random", 
    function(data) {
        h2.textContent = data.value
        }
    )
}



$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=London&appid=95176c8edea30e33338e0eaddd53a916", 
    function(data) {
       console.log(data.value)
        }
    )