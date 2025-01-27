// Eventos con el RATÓN
const nav = document.querySelector('.navegacion');

// Click
nav.addEventListener('click', () => {
    console.log('Click en nav');
});

// Mouse enter (al situarte con el mouse)
nav.addEventListener('mouseenter', () => {
    console.log('Entrando con el ratón en el nav');
    nav.style.backgroundColor = 'white';
});

// Mouse out (al salirte del elemento con el mouse)
nav.addEventListener('mouseout', () => {
    console.log('Saliendo de la navegación');
    nav.style.backgroundColor = 'transparent';
});

// Mouse Down (se activa cuando presionas, parecido a un click, parecido O IGUAL)
nav.addEventListener('mousedown', () => {
    console.log('El evento farsante');
    nav.style.backgroundColor = 'blue';
})

// Mouse UP (cuando se da click, y se suelta el click)
nav.addEventListener('mouseup', () => {
    console.log('Soltando el click');
    nav.style.backgroundColor = 'red';
})

// DOUBLE Click (requiere dar doble click para activar el evento)
nav.addEventListener('dblclick', () => {
    console.log('Doble click');
    nav.style.backgroundColor = 'purple';
})