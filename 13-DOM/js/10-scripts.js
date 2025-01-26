// Generar contenido HTML
// 1º Crear elemento
const enlace = document.createElement('A');

// 2º Añadiéndole atributos al elemento
enlace.textContent = 'Nuevo enlace';
enlace.href = '/nuevo-enlace';
enlace.target = '_blank'; // Para que abra el enlace en una nueva pestaña
enlace.classList.add('clase-prueba');
enlace.setAttribute('data-enlace', 'nuevo-enlace'); // Setear atributos personalizados (key, value)

// Añadiendo funciones al elemento
enlace.onclick = miFuncion;
function miFuncion() {
    alert('Diste click al enlace');
}

// 4º Seleccionar navegacion
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(enlace); // Lo coloca al final

// Si lo quiero en posiciones intermedias
const enlace2 = document.createElement('A');

enlace2.textContent = 'Enlace intermedio';
enlace2.href = '/enlace-prueba';
enlace2.target = '_blank';

console.log(navegacion.children);
navegacion.insertBefore(enlace2, navegacion.children[1]); // (lo que quiero insertar, el lugar)


// OTRO EJEMPLO, CREANDO UN CARD
// Textos y clases
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('P');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

// Div que lo engloba
const info = document.createElement('DIV');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// Crear imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.alt = 'Imagen alternativa';
imagen.classList.add('img-fluid');

// Crear card
const card = document.createElement('div');
card.classList.add('card');
card.appendChild(imagen);
card.appendChild(info);

// Insertar Info en el hacer
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card); // Al final
contenedor.insertBefore(card, contenedor.children[0]); // Al inicio


console.log(c);