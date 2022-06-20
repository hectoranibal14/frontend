let aleat = Math.ceil( Math.random() * 10 )
let adivine = Number(prompt('Cual es el numero generado al azar?'))
let cantdeintentos = 1

while (adivine !== aleat) {
    console.log(adivine)
    console.log(typeof (adivine))
    if (adivine !== 0 && !(adivine)){
        adivine = Number(prompt('Ingrese un numero'))
    }
    else {
    if (adivine === aleat) {alert('acerto')}
    else if (adivine > aleat) {alert('mas bajo')}
    else {alert('mas alto')}
  cantdeintentos ++
  adivine = Number(prompt('vuelve a intentar?'))
    }

}
alert('felicitaciones, le tomo '+ cantdeintentos +' intentos adivinar')