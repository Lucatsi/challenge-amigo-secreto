// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos ingresados
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Actualizar el array de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    input.value = "";
    // Actualizar la lista en pantalla
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en el HTML
function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    const lista = document.getElementById('listaAmigos');
    // Limpiar la lista existente
    lista.innerHTML = "";
    // Iterar sobre el arreglo y agregar elementos
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    // Generar un índice aleatorio
    const indice = Math.floor(Math.random() * amigos.length);
    // Obtener el nombre sorteado
    const nombreSorteado = amigos[indice];
    // Mostrar el resultado en el elemento de resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo sorteado es: <strong>${nombreSorteado}</strong></li>`;
}
