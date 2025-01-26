// Modificar textos o imágenes con JS
const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

// Acceder al texto
console.log(encabezado.innerText); // No trae texto con visibility=hidden en el css.
console.log(encabezado.textContent); // Se trae el texto.
console.log(encabezado.innerHTML); // Se trae tb el HTML.

// Modificar el texto
document.querySelector('.contenido-hero h1').textContent = 'Nuevo encabezado';
document.querySelector('.contenido-hero h1').innerText = 'Nuevo encabezado';

// Modificar una imagen
const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';
console.log(imagen);
