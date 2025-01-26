// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []

async function agregarAmigo(){
    let amigo = document.getElementById('amigo').value
    if (amigo !== "") {
        amigos.push(amigo)
        actualizar()
    }
}

async function actualizar(){
    document.getElementById('resultado').innerHTML = ``
    document.getElementById('amigo').value = ""
    document.getElementById('amigo').focus()
    document.getElementById('listaAmigos').innerHTML = ""
    amigos.forEach((amigo) => {
        document.getElementById('listaAmigos').innerHTML += `<li>${amigo}</li>`
    })
}

async function sortearAmigo(){
    if (amigos.length < 0) {
        alert("No hay amigos para sortear")
        return false
    }
    let ganador = amigos[Math.floor(Math.random() * amigos.length)]
    document.getElementById('listaAmigos').innerHTML = ""
    document.getElementById('resultado').innerHTML = `<p>${ganador}</p>`
}