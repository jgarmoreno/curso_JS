// DOM Scripting. Mostrar footer al clicar el botón de 'Idioma y moneda'
const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', () => {
    mostrarOcultarFooter();
});

function mostrarOcultarFooter() {
    if(footer.classList.contains('activo')) { // Con un toggle no es necesario hacer el if.
        footer.classList.remove('activo');
        btnFlotante.classList.remove('activo');
        btnFlotante.textContent = 'Idioma y moneda';
    } else {
        footer.classList.add('activo');
        btnFlotante.classList.add('activo');
        btnFlotante.textContent = 'Cerrar';
    }
    console.log(footer);
}
