// Eventos de TECLADO
const buscador = document.querySelector('.busqueda');

// KEYDOWN. Cuando presionas una tecla.
buscador.addEventListener('keydown', () => {
    console.log('Escribiendo una tecla');
});

// KEYUP. Cuando presionas una tecla y la sueltas.
buscador.addEventListener('keyup', () => {
    console.log('Soltando una tecla');
});

// BLUR. Clicas en el elemento (en este caso buscador) y vuelves a clicar fuera.
buscador.addEventListener('blur', () => {
    console.log('Haciendo blur');
});

// COPY. Cuando seleccionas el texto y lo copias (como es buscador, copiar el texto escrito en buscador)
buscador.addEventListener('copy', () => {
    console.log('Haciendo una copia');
});

// PASTE. Al pegar algo.
buscador.addEventListener('paste', () => {
    console.log('Pegando algo');
});

// CUT. Al cortarlo con cntrl + x
buscador.addEventListener('cut', () => {
    console.log('Cortando algo');
});

// INPUT. Todos los anteriores menos el blur y copy. Cuando se le mete un input de teclado al elemento.
buscador.addEventListener('input', () => {
    console.log('Haciendo input');
});

// VALIDAR EL INPUT EN UN FORMULARIO
buscador.addEventListener('input', (e) => {
    // console.log(e.type) // Da el tipo del input del buscador, en formato html
    console.log(e.target.value); // Da el valor escrito por el usuario.
    if(e.target.value === '') {
        console.log('El usuario no ha escrito nada');
    }
});