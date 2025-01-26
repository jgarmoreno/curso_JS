// Cambiar el CSS con JS
const encabezado = document.querySelector('h1');

encabezado.style.backgroundColor = 'red';
encabezado.style.fontFamily = 'Arial';
encabezado.style.textTransform = 'uppercase';


// Cambiar las clases (para no dejar de usar CSS que es de quien dependen los estilos)
const card = document.querySelector('.card');
card.classList.add('nueva-clase', 'segunda-clase');
console.log(card);

card.classList.remove('segunda-clase');
console.log(card);