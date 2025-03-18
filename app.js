// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];

// 2. Función que agrega un amigo al array
function agregarAmigo() {

    limpiarResultado();
    // Tomamos el valor del input
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim(); // quitamos espacios vacíos

    // Validamos que haya texto
    if (nombreAmigo === '') {
        alert('Por favor, escribe un nombre válido.');
        return; // salimos de la función si no hay nombre
    }

    // Agregamos el nombre al array
    listaDeAmigos.push(nombreAmigo)

    // Mostramos en consola para verificar
    console.log('Lista de amigos:', listaDeAmigos);

    // Limpiamos el campo de entrada
    inputAmigo.value = '';


     // Mostramos la lista en pantalla
     mostrarAmigos();
}


function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiamos la lista antes de volver a escribirla

    // Recorremos el array y agregamos cada amigo al UL
    listaDeAmigos.forEach(function(amigo) {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    // Validación: al menos un amigo en la lista
    if (listaDeAmigos.length === 0) {
        alert('Agrega al menos 1 amigo para realizar el sorteo');
        return;
    }

    // Seleccionar un amigo al azar
    let indice = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indice];

     // Vaciar la lista completamente
     listaDeAmigos = [];

    // Mostrar el resultado
    mostrarResultado(amigoSorteado);
}

function mostrarResultado(amigo) {
    const ul = document.getElementById('resultado');
    ul.innerHTML = ''; // Limpiamos el contenido actual

    const li = document.createElement('li');
    li.textContent = `Amigo sorteado: ${amigo}`;
    ul.appendChild(li);
}

function limpiarResultado() {
    document.getElementById('resultado').innerHTML = ''; // Borra el resultado mostrado
}
